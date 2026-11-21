"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Barcode,
  Check,
  ChevronRight,
  ClipboardList,
  EllipsisVertical,
  FileText,
  GitBranch,
  Loader2,
  Printer,
  RotateCcw,
  Trash2,
  Upload,
} from "lucide-react";

/**
 * Step-by-step animated demo (state `step`):
 *   1  heading + subline appear
 *   2  note card fades in (with border light)
 *   3  door-sketch card fades in (with border light)
 *   4  both cards move to the left column together (in parallel), note above sketch
 *   5  the upload screen fades in on the right, already at full size
 *   6  note card glides from the left column into the PHOTO section
 *   7  door-sketch card glides into the PHOTO section, below the note (one by one)
 *   8  the whole upload screen (with the photos in it) grows and centres in the section
 *   9  cursor clicks the Upload button (it replaces "Add 7 row(s)")
 *  10  the PHOTO section is scanned (scan line sweeps over both photos)
 *  11  the extracted details fill the table on the right, row by row
 *  12  the button changes to "Create Work Order" and the cursor clicks it
 *  13  a loader spins inside the button (left of the label)
 *  14  the upload screen slides out to the left; the Work Orders screen comes in (creating...)
 *  15  the work order is created: the list loads and the new row flashes
 *  16  the arrow comes up from the bottom, moves to the row's kebab (⋮) icon and clicks it
 *  17  the actions dropdown opens slowly
 *  18  the arrow moves to "Print Scan Code" in the dropdown and clicks it
 *  19  the scan-code label (single barcode) opens over the Work Orders screen
 *  20  the barcode is scanned (red laser sweeps across it)
 *  21  the label moves left; "Live Order Progress Tracking" slides in (cutting in progress)
 *  22-26  cutting, grinding, fabrication, washing, tempering complete one by one
 */

// When (ms after the section scrolls into view) each step begins.
// Increase these numbers to slow the whole sequence down.
const SCHEDULE = [
  200, 1600, 3800, 6300, 8100, 10100, 11800, 13700, 15500, 17500, 21400, 28800,
  30800, 32800, 34800, 36800, 39000, 40400, 42300, 43800, 45900, 47700, 49200,
  50700, 52200, 53700,
];

const ease = [0.22, 1, 0.36, 1] as const;

// ---- Order table drawn over the upload screenshot (its empty rows are covered) ----
// Geometry is in px of the screenshot canvas (1884 x 835); everything is positioned in %.
const IMG_W = 1884;
const IMG_H = 835;
const COLS: [number, number][] = [
  [541, 108], // code
  [659, 99], // top W
  [769, 99], // bottom W
  [879, 99], // left L
  [989, 99], // right L
  [1098, 81], // qty
  [1189, 94], // thick (mm)
  [1293, 147], // edge work
  [1450, 100],
  [1561, 107],
  [1678, 111],
];
const TABLE = { x: 483, y: 212, w: 1380, h: 474 }; // area of the screenshot whose rows are replaced
type FillRow =
  | { cells: string[] } // [code, topW, bottomW, leftL, rightL, qty, thick, edge]
  | { group: string; count: string };
const FILL: FillRow[] = [
  { group: "8mm r/g frosting", count: "4 ROW(S) · 4 PIECE(S)" },
  { cells: ["", "2510", "2510", "1650", "1650", "1", "8"] },
  { cells: ["", "1550", "1550", "1650", "1650", "1", "8"] },
  { cells: ["", "1580", "1580", "1650", "1650", "1", "8"] },
  { cells: ["", "2520", "2520", "1650", "1650", "1", "8"] },
  { group: "12mm", count: "1 ROW(S) · 1 PIECE(S)" },
  { cells: ["", "3420", "3420", "820", "820", "1", "12", "polish"] },
  { group: "12mm r/g", count: "2 ROW(S) · 3 PIECE(S)" },
  { cells: ["", "2167", "2167", "1294", "1294", "2", "12"] },
  { cells: ["", "1010", "1010", "1380", "1380", "1", "12"] },
];
const ROW_PITCH = TABLE.h / FILL.length;
const CELL_H = ROW_PITCH - 8;
const FILL_ROW_GAP = 0.7; // seconds between rows
const FILL_CELL_GAP = 0.09; // seconds between cells in a row
const box = (x: number, rowIdx: number, w: number, h = CELL_H) => ({
  left: `${(x / IMG_W) * 100}%`,
  width: `${(w / IMG_W) * 100}%`,
  top: `${((TABLE.y + rowIdx * ROW_PITCH + (ROW_PITCH - h) / 2) / IMG_H) * 100}%`,
  height: `${(h / IMG_H) * 100}%`,
});

// After the photos are placed, the upload screen grows by this factor and centres in the section.
const ENLARGE = 1.18;
const ENLARGE_TIME = 1.6;
// Zoom-in on the right side of the Work Orders page while the kebab dropdown is used.
const ZOOM = 1.4;
const MOVE_TIME = 1.6; // seconds for each card move

// Both cards share one identical box (same width and height) and the image is cropped to fill it.
// Poses are % of the stage: left/width = % of width, top/height = % of height.
// The stage is a narrow left photo column (0-18%) + the big upload screen (right 82%).
const STAGE_H_OVER_W = 0.3634; // stage height / stage width
const CARD_AR = 0.82; // card width / height
type Pose = { left: number; top: number; height: number; width?: number };
const NOTE_ROW: Pose = { left: 21.2, top: 7, height: 90 }; // centred, after reveal
const SKETCH_ROW: Pose = { left: 52, top: 7, height: 90 };
const NOTE_LEFT: Pose = { left: 2.2, top: 2, height: 46 }; // left column, note on top
const SKETCH_LEFT: Pose = { left: 2.2, top: 52, height: 46 }; // ... sketch below it
// In the PHOTO section each image sits in its own full-width slot, picture centred, white space on both sides.
const NOTE_PANEL: Pose = { left: 19.5, top: 17, height: 35, width: 18.2 };
const SKETCH_PANEL: Pose = { left: 19.5, top: 54, height: 35, width: 18.2 };
const pct = (p: Pose) => ({
  left: `${p.left}%`,
  top: `${p.top}%`,
  height: `${p.height}%`,
  width: `${p.width ?? p.height * STAGE_H_OVER_W * CARD_AR}%`,
});

// Delay (s) after the image has finished sliding in before the light starts circling its border.
const GLOW_DELAY = 0;
const GLOW_TIME = 2.2; // image fade-in and border lap share this duration

/**
 * Image card. After it reveals, a soft glass light travels once around its
 * outside border (a thin 2px conic-gradient spinning behind the card), then fades.
 */
function GlowCard({
  show,
  pose,
  label,
  hideLabel,
  landed,
  fit,
  row,
  src,
  alt,
  width,
  height,
}: {
  show: boolean;
  pose: Pose;
  label: string;
  hideLabel: boolean;
  landed: boolean;
  fit: number; // share of the PHOTO slot width the picture takes (rest stays white)
  row: Pose;
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, ...pct(row) }}
      animate={{
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0.9,
        ...pct(pose),
      }}
      transition={{
        opacity: { duration: GLOW_TIME, ease: "easeOut" },
        scale: { duration: GLOW_TIME, ease: "easeOut" },
        default: { duration: MOVE_TIME, ease },
      }}
      className="absolute rounded-xl shadow-[0_18px_36px_-14px_rgba(15,40,70,0.45)]"
    >
      {/* heading above the card: fades in with the reveal, fades out once the card is placed in the PHOTO section */}
      <motion.span
        className="pointer-events-none absolute inset-x-0 -top-7 whitespace-nowrap text-center text-xs font-semibold tracking-tight text-[#14181f] sm:text-sm"
        initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
        animate={
          show && !hideLabel
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 8, filter: "blur(6px)" }
        }
        transition={{
          duration: 0.9,
          delay: show && !hideLabel ? 0.5 : 0,
          ease,
        }}
      >
        {label}
      </motion.span>

      {/* travelling halo — sits behind the card, only the part outside the edge shows */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-[2px] overflow-hidden rounded-[18px] drop-shadow-[0_0_6px_rgba(255,255,255,1)]"
        initial={{ opacity: 0 }}
        animate={show ? { opacity: [0, 1, 1, 0] } : {}}
        transition={{
          duration: GLOW_TIME,
          delay: GLOW_DELAY,
          times: [0, 0.12, 0.8, 1],
        }}
      >
        <motion.span
          className="absolute left-1/2 top-1/2 aspect-square w-[220%] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 140deg, rgba(255,255,255,0.5) 260deg, #ffffff 320deg, #ffffff 360deg)",
          }}
          initial={{ rotate: 0 }}
          animate={show ? { rotate: 360 } : {}}
          transition={{
            duration: GLOW_TIME,
            delay: GLOW_DELAY,
            ease: "easeInOut",
          }}
        />
      </motion.span>

      {/* water ripples spreading from the card as it lands in the PHOTO section */}
      {landed &&
        [0].map((d) => (
          <motion.span
            key={d}
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl border-2 border-slate-400/60"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.7, 0], scale: [1, 1.15, 1.7] }}
            transition={{
              duration: 1.5,
              delay: MOVE_TIME * 0.75 + d,
              ease: "easeOut",
            }}
          />
        ))}

      {/* card with a thin glass rim. The picture keeps its shape and corners while it moves; no squash or morph */}
      <div
        className={`relative flex h-full items-center justify-center overflow-hidden rounded-xl transition-colors duration-700 ${
          landed ? "border border-slate-300 bg-white" : ""
        }`}
      >
        {/* picture frame: fills the card while travelling, then narrows to the natural picture width so white slot space shows on both sides */}
        <motion.div
          className="relative h-full overflow-hidden"
          initial={{ width: "100%" }}
          animate={{ width: landed ? `${fit * 100}%` : "100%" }}
          transition={{ duration: MOVE_TIME, ease }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 768px) 480px, 45vw"
            className="block h-full w-full object-cover"
          />
          {landed && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-400/50"
            />
          )}
        </motion.div>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/80"
        />
      </div>
    </motion.div>
  );
}

/** Arrow cursor: dark outline, two faces filled with a dark-green to light-green gradient. Tip is at the top-left. */
function ArrowShapes() {
  return (
    <>
      <defs>
        <linearGradient id="cursorGreenTop" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0" stopColor="#0b4f2a" />
          <stop offset="1" stopColor="#5ee08f" />
        </linearGradient>
        <linearGradient id="cursorGreenBottom" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0" stopColor="#0b4f2a" />
          <stop offset="1" stopColor="#1f9d55" />
        </linearGradient>
      </defs>
      {/* outline */}
      <path
        d="M10 8 L94 50 L52 58 L40 94 Z"
        fill="#2b3531"
        stroke="#2b3531"
        strokeWidth="9"
        strokeLinejoin="round"
      />
      {/* upper face */}
      <path d="M10 8 L94 50 L52 58 Z" fill="url(#cursorGreenTop)" />
      {/* lower face */}
      <path d="M10 8 L52 58 L40 94 Z" fill="url(#cursorGreenBottom)" />
    </>
  );
}

// ---- Live Order Progress Tracking: the five production stages of the order ----
const TRACK_STAGES = [
  { name: "Cutting", note: "Glass cut to size", time: "10:42 AM" },
  { name: "Grinding", note: "Edges ground and polished", time: "11:05 AM" },
  { name: "Fabrication", note: "Holes and cutouts done", time: "11:31 AM" },
  { name: "Washing", note: "Washed and inspected", time: "11:48 AM" },
  { name: "Tempering", note: "Toughened in the furnace", time: "12:20 PM" },
];

// ---- Work Orders list, drawn over the screenshot so rows can be added and the dropdown can sit under any row ----
const WO_W = 1919; // screenshot canvas
const WO_H = 945;
const WO_X0 = 262; // table body left / width / first row top / row height (canvas px)
const WO_BW = 1648;
const WO_Y0 = 349;
const WO_ROW = 60;
const wx = (x: number) => `${(x / WO_W) * 100}%`;
const wy = (y: number) => `${(y / WO_H) * 100}%`;
const cx = (x: number) => `${((x - WO_X0) / WO_BW) * 100}%`; // x inside a row
const cw = (w: number) => `${(w / WO_BW) * 100}%`;

type WoOrder = {
  wo: string;
  pi: string;
  bk: string;
  party: string;
  date: string;
  stages: string;
  pct: number;
  products: number;
  qty: number;
  sqm: string;
};
// ORDERS[0] is the order that gets created; the others are already in the list.
const ORDERS: WoOrder[] = [
  {
    wo: "WO-20261119-115",
    pi: "PI-20261119-121",
    bk: "ORD-20261119-141",
    party: "Sunrise Interiors",
    date: "19/11/2026",
    stages: "0/5",
    pct: 0,
    products: 3,
    qty: 12,
    sqm: "8.4",
  },
  {
    wo: "WO-20261118-114",
    pi: "PI-20261118-120",
    bk: "ORD-20261118-140",
    party: "XYZ Solutions",
    date: "18/11/2026",
    stages: "5/5",
    pct: 100,
    products: 2,
    qty: 16,
    sqm: "10.9",
  },
  {
    wo: "WO-20261118-113",
    pi: "PI-20261118-119",
    bk: "ORD-20261118-139",
    party: "Metro Glazing",
    date: "18/11/2026",
    stages: "5/5",
    pct: 100,
    products: 4,
    qty: 24,
    sqm: "17.2",
  },
  {
    wo: "WO-20261117-112",
    pi: "PI-20261117-118",
    bk: "ORD-20261117-138",
    party: "Skyline Interiors",
    date: "17/11/2026",
    stages: "5/5",
    pct: 100,
    products: 1,
    qty: 6,
    sqm: "4.1",
  },
];

function OrderCells({ o }: { o: WoOrder }) {
  const chip =
    "absolute top-1/2 flex h-[46%] -translate-y-1/2 items-center justify-center rounded-[3px] border border-cyan-200 bg-cyan-50 text-[0.72cqw] font-semibold text-cyan-900";
  const txt =
    "absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[0.74cqw] font-medium text-slate-800";
  return (
    <>
      <span className={chip} style={{ left: cx(280), width: cw(138) }}>
        {o.wo}
      </span>
      <span className={chip} style={{ left: cx(463), width: cw(127) }}>
        {o.pi}
      </span>
      <span className={chip} style={{ left: cx(616), width: cw(142) }}>
        {o.bk}
      </span>
      <span className={txt} style={{ left: cx(785) }}>
        {o.party}
      </span>
      <span className={txt} style={{ left: cx(970) }}>
        {o.date}
      </span>
      {/* progress pill */}
      <span
        className="absolute top-1/2 flex h-[58%] -translate-y-1/2 flex-col justify-center gap-[2px] rounded-md border border-cyan-200 bg-cyan-50/60 px-[0.45cqw]"
        style={{ left: cx(1120), width: cw(144) }}
      >
        <span className="flex items-center justify-between text-[0.5cqw] font-medium text-slate-600">
          <span>{o.stages} stages</span>
          <span className="flex items-center">
            {o.pct}% <ChevronRight className="h-[0.7cqw] w-[0.7cqw]" />
          </span>
        </span>
        <span className="block h-[0.35cqw] overflow-hidden rounded-full bg-slate-200">
          <span
            className="block h-full rounded-full bg-emerald-500"
            style={{ width: `${o.pct}%` }}
          />
        </span>
      </span>
      <span className={txt + " -translate-x-1/2"} style={{ left: cx(1405) }}>
        {o.products}
      </span>
      <span className={txt + " -translate-x-1/2"} style={{ left: cx(1552) }}>
        {o.qty}
      </span>
      <span className={txt} style={{ left: cx(1592) }}>
        {o.sqm}
      </span>
      <span className={txt + " text-slate-300"} style={{ left: cx(1741) }}>
        —
      </span>
      {/* actions: document + kebab */}
      <span
        className="absolute top-1/2 flex h-[50%] -translate-y-1/2 items-center justify-center rounded-md border border-purple-100 bg-purple-50 text-purple-600"
        style={{ left: cx(1824), width: cw(31) }}
      >
        <FileText className="h-[55%] w-[55%]" />
      </span>
      <span
        className="absolute top-1/2 flex h-[50%] -translate-y-1/2 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700"
        style={{ left: cx(1862), width: cw(31) }}
      >
        <EllipsisVertical className="h-[60%] w-[60%]" />
      </span>
    </>
  );
}

function OrdersTable({ step }: { step: number }) {
  const rowBase = "absolute border-b border-slate-200 bg-white";
  const rowBox = { left: wx(WO_X0), width: wx(WO_BW), height: wy(WO_ROW) };
  return (
    <>
      {/* covers the screenshot's own row and baked-in dropdown */}
      <div
        aria-hidden
        className="absolute bg-white"
        style={{
          left: wx(WO_X0),
          width: wx(WO_BW),
          top: wy(WO_Y0),
          height: wy(872 - WO_Y0),
        }}
      />

      {/* orders that already exist: they slide down one slot when the new order is added */}
      {ORDERS.slice(1).map((o, k) => {
        const i = k + 1;
        const slot = step >= 14 ? i : i - 1;
        return (
          <motion.div
            key={o.wo}
            className={rowBase}
            style={rowBox}
            initial={{ top: wy(WO_Y0 + (i - 1) * WO_ROW) }}
            animate={{ top: wy(WO_Y0 + slot * WO_ROW) }}
            transition={{
              duration: step === 14 ? 0.6 : 0,
              delay: step === 14 ? 1 : 0,
              ease,
            }}
          >
            <OrderCells o={o} />
          </motion.div>
        );
      })}

      {/* loading row while the work order is being created */}
      <motion.div
        aria-hidden
        className={rowBase + " flex items-center gap-[1%] px-[1.8%]"}
        style={{ ...rowBox, top: wy(WO_Y0) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: step === 14 ? 1 : 0 }}
        transition={{
          duration: step === 14 ? 0.4 : 0.3,
          delay: step === 14 ? 1.3 : 0,
        }}
      >
        <Loader2 className="h-[38%] w-[2%] shrink-0 animate-spin text-[#0c78b8]" />
        <span className="text-[0.85cqw] font-semibold text-slate-600">
          Creating work order…
        </span>
        <span className="ml-[3%] h-[26%] w-[14%] animate-pulse rounded bg-slate-200" />
        <span className="h-[26%] w-[10%] animate-pulse rounded bg-slate-200" />
        <span className="h-[26%] w-[8%] animate-pulse rounded bg-slate-200" />
      </motion.div>

      {/* the new work order, top of the list */}
      <motion.div
        className={rowBase}
        style={{ ...rowBox, top: wy(WO_Y0) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: step >= 15 ? 1 : 0 }}
        transition={{ duration: step >= 15 ? 0.5 : 0 }}
      >
        <OrderCells o={ORDERS[0]} />
        <motion.span
          className="absolute inset-0 bg-emerald-400/25"
          initial={{ opacity: 0 }}
          animate={step >= 15 ? { opacity: [0, 1, 0.4, 1, 0] } : { opacity: 0 }}
          transition={{ duration: step >= 15 ? 2 : 0 }}
        />
      </motion.div>

      {/* actions dropdown for the 2nd order; opens slowly from the top */}
      <motion.div
        className="absolute z-10 rounded-xl border border-slate-200 bg-white shadow-[0_8px_24px_-6px_rgba(15,23,42,0.25)]"
        style={{
          left: wx(1716),
          top: wy(462),
          width: wx(176),
          height: wy(132),
        }}
        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        animate={{
          clipPath:
            step >= 17 ? "inset(-15% -10% -25% -10%)" : "inset(0% 0% 100% 0%)",
        }}
        transition={{ duration: step >= 17 ? 1.1 : 0, ease }}
      >
        {[
          {
            icon: <Printer className="h-[55%] w-[55%]" />,
            label: "Print Work Order",
          },
          {
            icon: <Barcode className="h-[55%] w-[55%]" />,
            label: "Print Scan Code",
          },
          {
            icon: <GitBranch className="h-[55%] w-[55%]" />,
            label: "View stages",
          },
        ].map((it) => (
          <div
            key={it.label}
            className="flex h-1/3 items-center gap-[7%] px-[7%]"
          >
            <span className="flex h-[64%] w-[16%] items-center justify-center rounded-md border border-cyan-200 bg-cyan-50 text-cyan-700">
              {it.icon}
            </span>
            <span className="whitespace-nowrap text-[0.78cqw] font-medium text-slate-800">
              {it.label}
            </span>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default function AiOrderPlacementDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setStep(26); // reduced motion: jump to the end
      return;
    }
    setStep(0);
    const timers = SCHEDULE.map((ms, i) =>
      setTimeout(() => setStep(i + 1), ms),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, reduce, run]);

  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#e9eeee] via-[#eef2f2] to-[#e4ebec] py-8 md:py-12">
      <div ref={ref} className="mx-auto max-w-6xl px-6 md:px-10">
        {/* 1 — Text */}
        <div className="relative">
          <div className="mx-auto max-w-2xl pt-12 text-center md:pt-0">
            <motion.h2
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              animate={
                step >= 1
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 28, filter: "blur(10px)" }
              }
              transition={{ duration: step >= 1 ? 1 : 0, ease }}
              className="text-2xl font-semibold leading-tight tracking-tight text-[#14181f] md:text-3xl"
            >
              AI Powered Order Placement from Images and Diagrams
            </motion.h2>
            <p
              className="mt-2 text-sm text-[#2b323c] md:text-base"
              aria-label="Seamlessly extract dimensions and track production."
            >
              {"Seamlessly extract dimensions and track production."
                .split(" ")
                .map((word, i) => (
                  <Fragment key={i}>
                    {i > 0 && " "}
                    <motion.span
                      aria-hidden
                      className="inline-block"
                      initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                      animate={
                        step >= 1
                          ? { opacity: 1, y: 0, filter: "blur(0px)" }
                          : { opacity: 0, y: 16, filter: "blur(8px)" }
                      }
                      transition={{
                        duration: step >= 1 ? 0.8 : 0,
                        delay: step >= 1 ? 0.5 + i * 0.12 : 0,
                        ease,
                      }}
                    >
                      {word}
                    </motion.span>
                  </Fragment>
                ))}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setRun((r) => r + 1)}
            disabled={!inView}
            className="absolute right-0 top-0 inline-flex items-center gap-2 rounded-xl border-2 border-[#004475] px-4 py-2 text-sm font-bold text-[#004475] transition hover:bg-[#004475]/5 disabled:opacity-40"
          >
            <RotateCcw className="h-4 w-4" /> Replay
          </button>
        </div>

        {/* Stage: narrow photo column on the left, big upload screen on the right (full size from the start). */}
        {/* Vertical padding reserves the final (enlarged) height from the start, so the section never jumps. */}
        <div className="relative mx-auto mt-6 w-full max-w-6xl py-[5.5%] md:mt-6">
          <motion.div
            className="relative aspect-[2.752] w-full"
            style={{ transformOrigin: "59% 50%" }}
            animate={
              step >= 14
                ? { scale: ENLARGE, x: "-115%", opacity: 0 }
                : step >= 8
                  ? { scale: ENLARGE, x: "-9%", opacity: 1 }
                  : { scale: 1, x: "0%", opacity: 1 }
            }
            transition={{
              duration: step >= 14 ? 1.2 : step >= 8 ? ENLARGE_TIME : 0,
              ease,
            }}
          >
            <div className="absolute right-0 top-0 h-full w-[82%] [container-type:inline-size]">
              {/* ERP screen, slow fade-in */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={
                  step >= 5
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.98 }
                }
                transition={{ duration: step >= 5 ? 1.8 : 0, ease: "easeOut" }}
                className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-18px_rgba(0,68,117,0.4)]"
              >
                <Image
                  src="/images/ai-order/erp-empty.png"
                  alt="Glass ERP screen: Read an order from a photo"
                  width={1884}
                  height={835}
                  sizes="(min-width: 896px) 896px, 100vw"
                  className="h-full w-full"
                />
              </motion.div>

              {/* Heading of the upload screen, redrawn larger so it reads clearly */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute z-10 flex items-center bg-white"
                style={{
                  left: `${(90 / IMG_W) * 100}%`,
                  width: `${(400 / IMG_W) * 100}%`,
                  top: `${(14 / IMG_H) * 100}%`,
                  height: `${(48 / IMG_H) * 100}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 5 ? 1 : 0 }}
                transition={{ duration: step >= 5 ? 1.8 : 0, ease: "easeOut" }}
              >
                <span className="whitespace-nowrap text-[1.7cqw] font-semibold tracking-tight text-slate-900">
                  Read an order from a photo
                </span>
              </motion.div>

              {/* Footer buttons, redrawn so they can animate: Cancel slides left while the main button widens */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute z-10 bg-white"
                style={{
                  left: `${(1380 / IMG_W) * 100}%`,
                  width: `${(492 / IMG_W) * 100}%`,
                  top: `${(754 / IMG_H) * 100}%`,
                  height: `${(60 / IMG_H) * 100}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 5 ? 1 : 0 }}
                transition={{ duration: step >= 5 ? 1.8 : 0, ease: "easeOut" }}
              >
                {/* Cancel */}
                <motion.span
                  className="absolute flex items-center justify-center rounded-lg border border-slate-300 bg-white text-[1.05cqw] font-medium text-slate-800"
                  style={{
                    top: `${(10 / 60) * 100}%`,
                    height: `${(42 / 60) * 100}%`,
                    width: `${(91 / 492) * 100}%`,
                  }}
                  initial={{ left: `${((1520 - 1380) / 492) * 100}%` }}
                  animate={{
                    left: `${((step >= 12 ? 1385 : 1520) - 1380) / 4.92}%`,
                  }}
                  transition={{ duration: step >= 12 ? 1 : 0, ease }}
                >
                  Cancel
                </motion.span>
                {/* Main button: Upload, then a wider Create Work Order */}
                <motion.span
                  className="absolute flex items-center justify-center overflow-hidden whitespace-nowrap rounded-lg bg-[#0c78b8] text-[1.1cqw] font-semibold text-white"
                  style={{
                    top: `${(10 / 60) * 100}%`,
                    height: `${(42 / 60) * 100}%`,
                  }}
                  initial={{
                    left: `${((1633 - 1380) / 492) * 100}%`,
                    width: `${(233 / 492) * 100}%`,
                  }}
                  animate={{
                    left: `${((step >= 12 ? 1490 : 1633) - 1380) / 4.92}%`,
                    width: `${(step >= 12 ? 376 : 233) / 4.92}%`,
                  }}
                  transition={{ duration: step >= 12 ? 1 : 0, ease }}
                >
                  <motion.span
                    key={step >= 12 ? "wo" : "up"}
                    className="flex items-center gap-[0.5em]"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: step >= 12 ? 0.6 : 0,
                      delay: step >= 12 ? 0.3 : 0,
                    }}
                  >
                    {step >= 12 ? (
                      <>
                        {step >= 13 ? (
                          <Loader2 className="h-[1.2em] w-[1.2em] animate-spin" />
                        ) : (
                          <ClipboardList className="h-[1.2em] w-[1.2em]" />
                        )}{" "}
                        Create Work Order
                      </>
                    ) : (
                      <>
                        <Upload className="h-[1.2em] w-[1.2em]" /> Upload
                      </>
                    )}
                  </motion.span>
                </motion.span>
              </motion.div>

              {/* Order table: covers the screenshot's empty rows, then fills in one by one (step 11) */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 5 ? 1 : 0 }}
                transition={{ duration: step >= 5 ? 1.8 : 0, ease: "easeOut" }}
              >
                <div
                  className="absolute bg-[#fbfcfd]"
                  style={{
                    left: `${(TABLE.x / IMG_W) * 100}%`,
                    top: `${(TABLE.y / IMG_H) * 100}%`,
                    width: `${(TABLE.w / IMG_W) * 100}%`,
                    height: `${(TABLE.h / IMG_H) * 100}%`,
                  }}
                />
                {FILL.map((row, ri) => {
                  const rowDelay = ri * FILL_ROW_GAP;
                  const on = step >= 11;
                  const wipe = (d: number, dur = 0.35) => ({
                    initial: { clipPath: "inset(0 100% 0 0)" },
                    animate: {
                      clipPath: on ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
                    },
                    transition: { duration: on ? dur : 0, delay: on ? d : 0 },
                  });
                  return (
                    <Fragment key={ri}>
                      {/* checkbox + delete button */}
                      <span
                        className="absolute flex items-center justify-center rounded-[2px] bg-[#1d6fe0] text-[0.7cqw] leading-none text-white"
                        style={box(496, ri, 16, 16)}
                      >
                        ✓
                      </span>
                      <span
                        className={`absolute flex items-center justify-center rounded-lg bg-red-50 ${"group" in row ? "opacity-40" : ""}`}
                        style={box(1805, ri, 43)}
                      >
                        <Trash2 className="h-[45%] w-[40%] text-red-400" />
                      </span>

                      {"group" in row ? (
                        <>
                          <span
                            className="absolute rounded-md border border-teal-200 bg-[#f4fffd]"
                            style={box(541, ri, 1022)}
                          />
                          <motion.span
                            className="absolute flex items-center pl-[1.2%] text-[1.05cqw] font-medium text-slate-800"
                            style={box(541, ri, 1000)}
                            {...wipe(rowDelay + 0.1, 0.5)}
                          >
                            {row.group}
                          </motion.span>
                          <motion.span
                            className="absolute flex items-center justify-center text-[0.78cqw] font-semibold text-teal-700"
                            style={box(1575, ri, 215)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: on ? 1 : 0 }}
                            transition={{
                              duration: on ? 0.4 : 0,
                              delay: on ? rowDelay + 0.5 : 0,
                            }}
                          >
                            {row.count}
                          </motion.span>
                        </>
                      ) : (
                        COLS.map(([x, w], ci) => (
                          <Fragment key={ci}>
                            <span
                              className="absolute rounded-md border border-slate-200 bg-white"
                              style={box(x, ri, w)}
                            />
                            {row.cells[ci] && (
                              <motion.span
                                className="absolute flex items-center justify-center text-[1.05cqw] font-medium text-slate-800"
                                style={box(x, ri, w)}
                                {...wipe(rowDelay + ci * FILL_CELL_GAP)}
                              >
                                {row.cells[ci]}
                              </motion.span>
                            )}
                          </Fragment>
                        ))
                      )}

                      {/* row highlight flash */}
                      <motion.span
                        className="absolute rounded-md bg-[#33a8d9]/15"
                        style={box(541, ri, 1249)}
                        initial={{ opacity: 0 }}
                        animate={on ? { opacity: [0, 1, 0] } : { opacity: 0 }}
                        transition={{
                          duration: on ? 0.9 : 0,
                          delay: on ? rowDelay : 0,
                        }}
                      />
                    </Fragment>
                  );
                })}
              </motion.div>

              {/* 10 — Scan of the PHOTO section after Upload is clicked */}
              {step === 10 && (
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute z-20 overflow-hidden rounded-lg"
                  style={{
                    left: "1.2%",
                    top: "15%",
                    width: "23.8%",
                    height: "74%",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 3.8, times: [0, 0.08, 0.92, 1] }}
                >
                  {/* soft tint while scanning */}
                  <div className="absolute inset-0 bg-[#33a8d9]/[0.07]" />
                  {/* corner brackets */}
                  <span className="absolute left-1 top-1 h-3 w-3 rounded-tl border-l-2 border-t-2 border-[#0c78b8]" />
                  <span className="absolute right-1 top-1 h-3 w-3 rounded-tr border-r-2 border-t-2 border-[#0c78b8]" />
                  <span className="absolute bottom-1 left-1 h-3 w-3 rounded-bl border-b-2 border-l-2 border-[#0c78b8]" />
                  <span className="absolute bottom-1 right-1 h-3 w-3 rounded-br border-b-2 border-r-2 border-[#0c78b8]" />
                  {/* sweeping scan line with trailing glow */}
                  <motion.div
                    className="absolute inset-x-0 h-14 -translate-y-full bg-gradient-to-b from-transparent to-[#33a8d9]/35"
                    initial={{ top: "0%" }}
                    animate={{ top: ["0%", "100%", "0%", "100%"] }}
                    transition={{
                      duration: 3.4,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[#33a8d9] shadow-[0_0_14px_4px_rgba(51,168,217,0.6)]" />
                  </motion.div>
                </motion.div>
              )}

              {step >= 9 && step < 12 && (
                <>
                  <motion.svg
                    viewBox="0 0 100 100"
                    className="pointer-events-none absolute z-20 -ml-[2px] -mt-[2px] h-5 w-5 drop-shadow-md md:h-6 md:w-6"
                    initial={{ left: "55%", top: "55%", opacity: 0 }}
                    animate={{
                      left: "92%",
                      top: "93%",
                      opacity: 1,
                      scale: [1, 1, 0.85, 1],
                    }}
                    transition={{
                      duration: 1.4,
                      ease: "easeInOut",
                      scale: { delay: 1.4, duration: 0.3 },
                    }}
                  >
                    <ArrowShapes />
                  </motion.svg>
                  <motion.span
                    className="pointer-events-none absolute left-[86.7%] top-[91.4%] z-20 h-[5.2%] w-[12.4%] rounded-lg border-2 border-slate-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 0], scale: [1, 1, 1, 1.35] }}
                    transition={{ duration: 1.9, times: [0, 0.7, 0.75, 1] }}
                  />
                </>
              )}

              {/* 12 — second click: the button now reads "Create Work Order" */}
              {step >= 12 && (
                <>
                  <motion.svg
                    viewBox="0 0 100 100"
                    className="pointer-events-none absolute z-20 -ml-[2px] -mt-[2px] h-5 w-5 drop-shadow-md md:h-6 md:w-6"
                    initial={{ left: "92%", top: "93%", opacity: 1, scale: 1 }}
                    animate={{
                      left: "88.5%",
                      top: "93%",
                      scale: [1, 1, 0.85, 1],
                    }}
                    transition={{
                      left: { duration: 1, ease },
                      scale: {
                        delay: 1.3,
                        duration: 0.4,
                        times: [0, 0.3, 0.6, 1],
                      },
                    }}
                  >
                    <ArrowShapes />
                  </motion.svg>
                  <motion.span
                    className="pointer-events-none absolute left-[79.1%] top-[91.4%] z-20 h-[5.2%] w-[20%] rounded-lg border-2 border-slate-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 0], scale: [1, 1, 1, 1.35] }}
                    transition={{
                      duration: 1.9,
                      delay: 1.2,
                      times: [0, 0.6, 0.65, 1],
                    }}
                  />
                </>
              )}
            </div>
            {/* The two photos: centred, then to the left column, then one by one into the PHOTO section */}
            <div className="absolute inset-0 z-10">
              <GlowCard
                show={step >= 2}
                label="Text Dimensions Image"
                hideLabel={step >= 4}
                landed={step >= 6}
                fit={0.64}
                pose={step >= 6 ? NOTE_PANEL : step >= 4 ? NOTE_LEFT : NOTE_ROW}
                row={NOTE_ROW}
                src="/images/ai-order/handwritten-note.png"
                alt="Handwritten glass order note with sizes and thickness"
                width={354}
                height={386}
              />
              <GlowCard
                show={step >= 3}
                label="Diagram Dimensions Image"
                hideLabel={step >= 4}
                landed={step >= 7}
                fit={0.5}
                pose={
                  step >= 7
                    ? SKETCH_PANEL
                    : step >= 4
                      ? SKETCH_LEFT
                      : SKETCH_ROW
                }
                row={SKETCH_ROW}
                src="/images/ai-order/door-sketch.png"
                alt="Hand-drawn glass door sketch with dimensions"
                width={1154}
                height={1600}
              />
            </div>
          </motion.div>

          {/* Work Orders screen: slides in from the right once the upload screen has gone */}
          <motion.div
            aria-hidden={step < 14}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, x: "35%" }}
            animate={
              step >= 14 ? { opacity: 1, x: "0%" } : { opacity: 0, x: "35%" }
            }
            transition={{ duration: step >= 14 ? 1.2 : 0, ease }}
          >
            <div
              className="relative w-[96%] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-18px_rgba(0,68,117,0.4)] [container-type:inline-size]"
              style={{ aspectRatio: "1919 / 945" }}
            >
              {/* zoom layer: zooms toward the kebab dropdown so its items are easy to read */}
              <motion.div
                className="absolute inset-0"
                style={{ transformOrigin: "100% 44%" }}
                initial={{ scale: 1 }}
                animate={{ scale: step >= 19 ? 1 : step >= 17 ? ZOOM : 1 }}
                transition={{
                  duration: step >= 19 ? 0.9 : step >= 17 ? 1.2 : 0,
                  ease,
                }}
              >
                <Image
                  src="/images/ai-order/work-orders-full.png"
                  alt="Work Orders screen listing the work orders"
                  width={1919}
                  height={945}
                  sizes="(min-width: 768px) 1200px, 100vw"
                  quality={95}
                  className="block h-full w-full"
                />

                <OrdersTable step={step} />

                {/* 16 — arrow rises from the bottom, glides to the kebab icon and clicks it */}
                {step >= 16 && step < 18 && (
                  <>
                    <motion.svg
                      viewBox="0 0 100 100"
                      className="pointer-events-none absolute z-20 -ml-[2px] -mt-[2px] h-5 w-5 drop-shadow-md md:h-6 md:w-6"
                      initial={{
                        left: "72%",
                        top: "104%",
                        opacity: 0,
                        scale: 1,
                      }}
                      animate={{
                        left: "97.7%",
                        top: "46.6%",
                        opacity: 1,
                        scale: [1, 1, 0.85, 1],
                      }}
                      transition={{
                        left: { duration: 1.5, ease },
                        top: { duration: 1.5, ease },
                        opacity: { duration: 0.3 },
                        scale: {
                          delay: 1.6,
                          duration: 0.4,
                          times: [0, 0.3, 0.6, 1],
                        },
                      }}
                    >
                      <ArrowShapes />
                    </motion.svg>
                    <motion.span
                      className="pointer-events-none absolute z-10 rounded-md border-2 border-slate-500"
                      style={{
                        left: "97%",
                        top: "44.9%",
                        width: "1.7%",
                        height: "3.3%",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 1, 0], scale: [1, 1, 1, 1.5] }}
                      transition={{
                        duration: 1.2,
                        delay: 1.5,
                        times: [0, 0.1, 0.2, 1],
                      }}
                    />
                  </>
                )}

                {/* 18 — arrow moves to "Print Scan Code" and clicks it */}
                {step >= 18 && (
                  <>
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute z-10 rounded-md bg-sky-200/70 ring-1 ring-sky-400/60"
                      style={{
                        left: "90.2%",
                        top: "53.8%",
                        width: "7.8%",
                        height: "4.2%",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1] }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    />
                    <motion.svg
                      viewBox="0 0 100 100"
                      className="pointer-events-none absolute z-20 -ml-[2px] -mt-[2px] h-5 w-5 drop-shadow-md md:h-6 md:w-6"
                      initial={{
                        left: "97.7%",
                        top: "46.6%",
                        opacity: 1,
                        scale: 1,
                      }}
                      animate={{
                        left: "94%",
                        top: "56%",
                        scale: [1, 1, 0.85, 1],
                      }}
                      transition={{
                        left: { duration: 1, ease },
                        top: { duration: 1, ease },
                        scale: {
                          delay: 1.1,
                          duration: 0.4,
                          times: [0, 0.3, 0.6, 1],
                        },
                      }}
                    >
                      <ArrowShapes />
                    </motion.svg>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* 19 — single scan-code label opens over the Work Orders screen */}
          <motion.div
            aria-hidden={step < 19}
            className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 19 ? 1 : 0 }}
            transition={{ duration: step >= 19 ? 0.5 : 0 }}
          >
            <div className="absolute inset-x-[2%] inset-y-0 rounded-2xl bg-slate-900/50" />
            <motion.div
              className="relative w-[46%] overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
              style={{ aspectRatio: "1692 / 930" }}
              initial={{ scale: 0.82, y: 24, x: "0%" }}
              animate={
                step >= 21
                  ? { scale: 0.72, y: 0, x: "-62%" }
                  : step >= 19
                    ? { scale: 1, y: 0, x: "0%" }
                    : { scale: 0.82, y: 24, x: "0%" }
              }
              transition={{
                duration: step >= 21 ? 1.1 : step >= 19 ? 0.9 : 0,
                ease,
              }}
            >
              <Image
                src="/images/ai-order/scan-code-label-v2.png"
                alt="Scan-code label with barcode for the work order piece"
                width={1692}
                height={930}
                sizes="(min-width: 768px) 560px, 70vw"
                className="block h-full w-full"
              />
              {/* 20 — red laser sweeps across the barcode, then it flashes green (scanned) */}
              {step === 20 && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute overflow-hidden"
                  style={{
                    left: "7.4%",
                    top: "49%",
                    width: "85.6%",
                    height: "24%",
                  }}
                >
                  <motion.span
                    className="absolute top-[-6%] h-[112%] w-[0.9%] rounded-full bg-red-500 shadow-[0_0_14px_5px_rgba(239,68,68,0.7)]"
                    initial={{ left: "0%", opacity: 0 }}
                    animate={{
                      left: ["0%", "100%", "0%", "100%"],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{ duration: 1.7, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="absolute inset-0 bg-emerald-400/35"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 0] }}
                    transition={{ duration: 1.9, times: [0, 0.8, 0.88, 1] }}
                  />
                </div>
              )}
            </motion.div>

            {/* 21+ — Live Order Progress Tracking panel */}
            <motion.div
              aria-hidden={step < 21}
              className="absolute right-[4%] top-1/2 w-[52%] -translate-y-1/2 rounded-2xl bg-white p-[3%] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] [container-type:inline-size]"
              initial={{ opacity: 0, x: 60 }}
              animate={
                step >= 21 ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }
              }
              transition={{
                duration: step >= 21 ? 0.9 : 0,
                delay: step >= 21 ? 0.35 : 0,
                ease,
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[3.3cqw] font-bold tracking-tight text-slate-900">
                  Live Order Progress Tracking
                </span>
                <span className="flex items-center gap-[1cqw] text-[2cqw] font-bold text-emerald-600">
                  <span className="relative flex h-[1.6cqw] w-[1.6cqw]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500" />
                  </span>
                  LIVE
                </span>
              </div>
              <div className="mt-[1%] text-[2.2cqw] text-slate-500">
                WO-20261118-114 &nbsp;·&nbsp; Piece 1/11 &nbsp;·&nbsp; ABC TUFF
              </div>

              {/* overall progress */}
              <div className="mt-[3%] flex items-center gap-[2%]">
                <div className="h-[1.6cqw] flex-1 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${step >= 21 ? Math.min(100, Math.max(0, step - 21) * 20 + 10) : 0}%`,
                    }}
                    transition={{ duration: step >= 21 ? 1 : 0, ease }}
                  />
                </div>
                <span className="w-[8cqw] text-right text-[2.6cqw] font-bold text-slate-800">
                  {step >= 21
                    ? Math.min(100, Math.max(0, step - 21) * 20 + 10)
                    : 0}
                  %
                </span>
              </div>

              {/* stages: done / in progress / waiting */}
              <ol className="mt-[3%]">
                {TRACK_STAGES.map((st, i) => {
                  const done = step >= 22 + i;
                  const active = !done && step >= 21 + i;
                  return (
                    <li
                      key={st.name}
                      className="relative flex items-center gap-[2.4%] py-[1.6%]"
                    >
                      {i < TRACK_STAGES.length - 1 && (
                        <span className="absolute left-[2.6cqw] top-[5.2cqw] h-[3.2cqw] w-[2px] -translate-x-1/2 bg-slate-200">
                          <motion.span
                            className="absolute inset-x-0 top-0 bg-emerald-500"
                            initial={{ height: "0%" }}
                            animate={{ height: done ? "100%" : "0%" }}
                            transition={{ duration: done ? 0.6 : 0 }}
                          />
                        </span>
                      )}
                      <span
                        className={`relative z-10 flex h-[5.2cqw] w-[5.2cqw] shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                          done
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : active
                              ? "border-sky-500 bg-sky-50 text-sky-600"
                              : "border-slate-300 bg-white text-slate-300"
                        }`}
                      >
                        {done ? (
                          <Check className="h-[60%] w-[60%]" strokeWidth={3} />
                        ) : active ? (
                          <Loader2 className="h-[60%] w-[60%] animate-spin" />
                        ) : (
                          <span className="text-[2.2cqw] font-bold">
                            {i + 1}
                          </span>
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-[2.9cqw] font-semibold leading-tight ${
                            done || active ? "text-slate-900" : "text-slate-400"
                          }`}
                        >
                          {st.name}
                        </span>
                        <span className="block text-[2.1cqw] leading-tight text-slate-500">
                          {st.note}
                        </span>
                      </span>
                      <span
                        className={`shrink-0 text-[2.3cqw] font-semibold ${
                          done
                            ? "text-emerald-600"
                            : active
                              ? "text-sky-600"
                              : "text-slate-300"
                        }`}
                      >
                        {done ? st.time : active ? "In progress…" : "Waiting"}
                      </span>
                    </li>
                  );
                })}
              </ol>

              {/* final state */}
              <motion.div
                className="mt-[2%] flex items-center gap-[1.2cqw] border-t border-slate-200 pt-[2.4%] text-[2.7cqw] font-bold text-emerald-600"
                initial={{ opacity: 0, y: 6 }}
                animate={
                  step >= 26 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
                }
                transition={{ duration: step >= 26 ? 0.6 : 0 }}
              >
                <Check className="h-[3.4cqw] w-[3.4cqw]" strokeWidth={3} />{" "}
                Order processed · Ready for dispatch
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

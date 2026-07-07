interface Props {
  text: string;
  isUser: boolean;
}

export default function ChatbotMessage({
  text,
  isUser,
}: Props) {
  return (
    <div
      className={`flex mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line shadow-sm ${
          isUser
            ? "bg-[#1d8fe1] text-white rounded-br-sm"
            : "bg-white text-gray-800 rounded-bl-sm"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
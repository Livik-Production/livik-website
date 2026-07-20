const fs = require('fs');

const filePath = 'd:\\Projects\\content-modification-live\\liviktech-site\\src\\modules\\Services\\MedusaJSDevelopmentPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update "Why Choose Medusa JS Section" to use the dark theme from the Headless page
let whyChooseMedusaStart = content.indexOf('{/* Why Choose MedusaJS Section */}');
let ourServicesStart = content.indexOf('{/* Why Businesses Choose Livik Tech Section */}'); // this is the next section boundary we can look at, actually the next one is "Our MedusaJS Development Services Section - Clean Card Layout"

if (whyChooseMedusaStart === -1) {
    console.log("Could not find Why Choose Medusa JS section");
} else {
    // Find the end of the section by looking for the next section comment
    let whyChooseMedusaEnd = content.indexOf('{/* Why Businesses Choose Livik Tech Section */}'); // Just a rough bound, let's use the explicit next section 

    // The next section is actually: {/* Why Businesses Choose Livik Tech Section */} or maybe the UI section we changed.
    // Let's just find the exact section tag
    let nextSectionStart = content.indexOf('{/* Why Businesses Choose Livik Tech Section */}');

    if (nextSectionStart !== -1) {
        let section = content.substring(whyChooseMedusaStart, nextSectionStart);

        // Let's replace the light theme classes with the dark theme classes
        section = section.replace('className="py-16 md:py-16 bg-white relative overflow-hidden border-t border-gray-100"', 'className="py-16 md:py-16 px-4 md:px-8 bg-[#0B0F19] text-white relative overflow-hidden"');

        // Add the background blurs from headless page
        // <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        // <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        section = section.replace(
            '<div className="container-custom max-w-7xl mx-auto px-4 md:px-8 relative z-10">',
            '<div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>\n          <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>\n          <div className="container-custom max-w-7xl mx-auto px-4 md:px-8 relative z-10">'
        );

        // Text changes
        section = section.replace(/text-\[#1A1A40\]/g, 'text-white');
        section = section.replace(/text-gray-600/g, 'text-gray-300');
        section = section.replace(/text-gray-700/g, 'text-gray-300');
        section = section.replace(/bg-white rounded-2xl/g, 'bg-white/5 backdrop-blur-md rounded-2xl border-white/10 shadow-lg');
        section = section.replace(/bg-\[#F4F7FE\]/g, 'bg-white/5 backdrop-blur-md border border-white/10 shadow-lg');
        section = section.replace(/bg-blue-50/g, 'bg-blue-500/20');
        section = section.replace(/border-gray-900/g, 'border-white/10');
        section = section.replace(/border-gray-100/g, 'border-white/10');
        section = section.replace(/bg-white rounded-\[3rem\]/g, 'bg-[#0B0F19] rounded-[3rem]'); // just in case
        section = section.replace(/shadow-\[0_2px_15px_rgba\(0,0,0,0\.03\)\]/g, 'shadow-lg');
        section = section.replace(/shadow-\[0_8px_30px_rgba\(0,0,0,0\.04\)\]/g, 'shadow-lg');

        content = content.substring(0, whyChooseMedusaStart) + section + content.substring(nextSectionStart);
    }
}

// 2. Revert "Development Process" to Light Theme
let devProcessStart = content.indexOf('{/* Development Process */}');
let devProcessEnd = content.indexOf('{/* Trusted Technologies Section */}');

if (devProcessStart !== -1 && devProcessEnd !== -1) {
    let section = content.substring(devProcessStart, devProcessEnd);

    // Change background and text colors back
    section = section.replace(/bg-\[#0B0F19\]/g, 'bg-[#fdfaf5]');
    section = section.replace(/border-blue-900\/50/g, 'border-[#e6d5b8]');
    section = section.replace(/via-blue-900\/50/g, 'via-[#e6d5b8]');
    section = section.replace(/text-white/g, 'text-[#333]');
    section = section.replace(/text-gray-400/g, 'text-gray-600');
    section = section.replace(/border-\[#0B0F19\]/g, 'border-white');

    // Mobile cards back
    section = section.replace(/bg-white\/5 p-6 rounded-2xl shadow-sm border border-white\/10 backdrop-blur-sm/g, 'bg-white p-6 rounded-2xl shadow-sm border border-gray-100');

    content = content.substring(0, devProcessStart) + section + content.substring(devProcessEnd);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated themes as requested.');

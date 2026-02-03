import React, { useState } from 'react';

export default function BentoGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      id: 1,
      title: "Data-Backed Strategy",
      description: "We craft marketing plans built on real insights, not guesswork—so every move has purpose.",
      span: "md:col-span-1 md:row-span-2",
      icon: "🔭" // Binoculars representation
    },
    {
      id: 2,
      title: "Targeted Campaigns",
      description: "Reach the right audience at the right time with campaigns that convert across every platform.",
      span: "md:col-span-1 md:row-span-1",
      icon: "🎯"
    },
    {
      id: 3,
      title: "Social Media Management",
      description: "From content calendars to engagement tactics.",
      span: "md:col-span-1 md:row-span-1",
      icon: "🎧"
    },
    {
      id: 4,
      title: "Creative Branding",
      description: "Elevate your brand with bold, strategic messaging and a brand identity that speaks your language.",
      span: "md:col-span-1 md:row-span-1",
      icon: "🎨"
    },
    {
      id: 5,
      title: "SEO & Content Marketing",
      description: "Boost visibility and authority with content that ranks, resonates, and delivers long-term value.",
      span: "md:col-span-1 md:row-span-1",
      icon: "🔍"
    },
    {
      id: 6,
      title: "Performance Analytics",
      description: "Track results in real-time and adapt fast—because great marketing never stands still.",
      span: "md:col-span-1 md:row-span-1",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What We Do Best
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, our services are built to elevate your brand, engage your audience, and drive measurable growth.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${item.span} group relative overflow-hidden rounded-3xl bg-neutral-800 border border-neutral-700 transition-all duration-500 ease-out hover:border-neutral-600 ${
                hoveredIndex === index ? 'scale-[1.02]' : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                minHeight: index === 0 || index === 3 ? '400px' : '190px'
              }}
            >
              {/* Background gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-neutral-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                {/* Icon/Visual Element */}
                <div className="flex-1 flex items-center justify-center mb-6">
                  <div className={`text-7xl md:text-8xl lg:text-9xl transform transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                  }`}>
                    {item.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Bottom shine effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform transition-transform duration-500 ${
                hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
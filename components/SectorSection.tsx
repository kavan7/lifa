import React from 'react';
import SectorCard from './ui/SectorCard';

// --- Sample Data (Replace images with your own) ---
const sectorsData = [
  {
    id: 1,
    title: "Technology, Media & Telecom",
    // Use images from public folder e.g., "/images/sectors/tmt.jpg"
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop", 
  },
  {
    id: 2,
    title: "Financial Institutions",
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Metals & Mining",
    imageSrc: "https://images.unsplash.com/photo-1581093588402-f87c3e573362?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Industrials",
    imageSrc: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Consumers",
    imageSrc: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Healthcare",
    imageSrc: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Energy & Utilities",
    imageSrc: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
  },
];


const SectorsSection = () => {
  const topRow = sectorsData.slice(0, 4);
  const bottomRow = sectorsData.slice(4, 7);

  return (
    <section className="bg-[#08101c] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Optional: Subtle background ambient light for the whole section */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header (Optional) */}
        <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif tracking-tight">Areas of Expertise</h2>
            <p className="text-zinc-400 text-lg max-w-2xl">Deep industry knowledge and specialized experience across key global sectors.</p>
        </div>

        <div className="flex flex-col gap-6">
          {/* --- Top Row (4 items) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topRow.map((sector) => (
              <SectorCard key={sector.id} title={sector.title} imageSrc={sector.imageSrc} />
            ))}
          </div>

          {/* --- Bottom Row (3 items centered) --- */}
          {/* We use flex and justify-center to mimic the original image's layout */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
             {bottomRow.map((sector) => (
               // On large screens, these 3 items should act like they are in a 4-col grid, so we force the width
              <div key={sector.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                 <SectorCard title={sector.title} imageSrc={sector.imageSrc} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SectorsSection;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PromptBadge = ({ label, promptContent, images = [], aiTool = "Antigravity - Gemini 3 Pro" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative z-[100]" // Increased z-index
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge Button */}
      <button className="bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all shadow-lg cursor-pointer">
        <span className="text-xl">🪄</span>
        <span className="font-light">{label}</span>
      </button>

      {/* Tooltip / Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full right-0 mt-4 w-[600px] max-h-[80vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl p-6 shadow-2xl text-left custom-scrollbar"
          >
            <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2 sticky top-0 bg-slate-900/95 z-10">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Used AI Tool</span>
                <span className="text-sm text-slate-300 font-mono">{aiTool}</span>
            </div>
            
            {promptContent && (
                <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-mono bg-black/50 p-4 rounded-lg border border-slate-800 mb-4">
                    {promptContent}
                </div>
            )}

            {images.length > 0 && (
                <div className="space-y-4">
                    {images.map((img, idx) => (
                        <img 
                            key={idx} 
                            src={img} 
                            alt={`Prompt screenshot ${idx + 1}`} 
                            className="w-full rounded-lg border border-slate-700 shadow-md"
                        />
                    ))}
                </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PromptBadge;

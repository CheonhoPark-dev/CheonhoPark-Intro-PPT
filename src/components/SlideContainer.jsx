import React from 'react';
import PromptBadge from './PromptBadge';

const SlideContainer = ({ children, className = "", prompts = [], prompt }) => {
  // Backwards compatibility for single prompt prop
  const allPrompts = prompt ? [{ ...prompt, label: `프롬프트 ${prompt.index}` }] : prompts;

  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    const handleResize = () => {
      // Calculate scale to fit 1920x1080 into current window
      // We leave a small margin (e.g., 0.95) to ensure it doesn't touch edges
      const scaleX = window.innerWidth / 1920;
      const scaleY = window.innerHeight / 1080;
      const newScale = Math.min(scaleX, scaleY, 1); // Don't scale up, only down
      setScale(newScale);
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        <div 
            className={`relative w-[1920px] h-[1080px] bg-slate-950 text-white overflow-hidden shadow-2xl shrink-0 ${className}`}
            style={{
                transform: `scale(${scale})`,
                transformOrigin: 'center center'
            }}
        >
            <div className="absolute top-8 right-8 flex gap-4 z-[100]">
                {allPrompts.map((p, i) => (
                    <PromptBadge 
                        key={i}
                        label={p.label || `프롬프트 ${i + 1}`}
                        promptContent={p.content} 
                        images={p.images}
                        aiTool={p.aiTool}
                    />
                ))}
            </div>
            {children}
        </div>
    </div>
  );
};

export default SlideContainer;

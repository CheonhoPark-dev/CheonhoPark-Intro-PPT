import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { FaBrain, FaProjectDiagram, FaMicrochip } from 'react-icons/fa';

const LogicNode = ({ label, x, y, delay }) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, delay }}
    className="absolute w-24 h-12 bg-slate-800 border border-purple-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)] z-20"
    style={{ left: x, top: y }}
  >
    <span className="text-xs text-purple-300 font-bold">{label}</span>
  </motion.div>
);

const ConnectionLine = ({ x1, y1, x2, y2, delay }) => (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <motion.line 
            x1={x1} y1={y1} x2={x2} y2={y2} 
            stroke="#a855f7" 
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay }}
        />
    </svg>
);

const Slide10_Elementalism = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          images: ["/prompts/Slide10/Slide10_Prompt.png"]
        }
      ]}
    >
      {/* Background Decor - Logic/Circuit */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full h-full flex p-16 gap-16 items-center">
        
        {/* Left: Visuals (Game Screen & Logic Diagram) */}
        <div className="w-7/12 h-full flex items-center justify-center relative">
            {/* Game Screen */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-[80%] aspect-video rounded-xl border-4 border-slate-800 bg-slate-900 overflow-hidden shadow-2xl"
            >
                <img src="/images/Elementalism_GamePlay.png" alt="Elementalism Gameplay" className="w-full h-full object-cover opacity-80" />
                
                {/* Overlay Logic Diagram */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]">
                    {/* Nodes */}
                    <LogicNode label="Input Event" x="10%" y="50%" delay={0.5} />
                    <LogicNode label="State Machine" x="40%" y="30%" delay={0.7} />
                    <LogicNode label="Physics Calc" x="40%" y="70%" delay={0.9} />
                    <LogicNode label="Render Frame" x="75%" y="50%" delay={1.1} />

                    {/* Connections */}
                    {/* Coordinates are approximate percentages converted to pixels for SVG line (assuming 800x450 container for simplicity in mental model, but using % in CSS for nodes. SVG needs absolute or % coords. Using simple absolute div lines might be easier but SVG is cleaner. Let's try simple div lines or just rely on the nodes floating) */}
                    {/* Actually, let's just use absolute positioned divs for lines for simplicity in React without measuring refs */}
                </div>
                
                {/* Central Text on Image */}
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <h3 className="text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">COMPLEX LOGIC</h3>
                </motion.div>
            </motion.div>
        </div>

        {/* Right: Content */}
        <div className="w-5/12 flex flex-col justify-center z-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
                <FaBrain className="text-purple-500 text-3xl" />
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold border border-purple-500/30">
                    ALGORITHM
                </span>
            </div>

            <h2 className="text-5xl font-black mb-6 leading-tight">
              Elementalism<br />
              <span className="text-purple-400">Logic & Optimization</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-10 font-light border-l-4 border-purple-500 pl-6 py-2 bg-slate-900/50 rounded-r-lg">
              "복잡한 문제를<br/>
              <span className="text-white font-bold">알고리즘으로 해결합니다.</span>"
            </p>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-slate-800 rounded-lg text-purple-400">
                        <FaProjectDiagram />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">State Pattern Design</h4>
                        <p className="text-sm text-slate-400">복잡한 캐릭터 상태 및 상호작용을 체계적으로 관리</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-slate-800 rounded-lg text-blue-400">
                        <FaMicrochip />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Performance Optimization</h4>
                        <p className="text-sm text-slate-400">메모리 풀링(Object Pooling) 및 알고리즘 최적화</p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>

      </div>
    </SlideContainer>
  );
};

export default Slide10_Elementalism;

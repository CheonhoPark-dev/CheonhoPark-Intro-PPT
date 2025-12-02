import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { SiFlutter, SiSupabase } from 'react-icons/si';
import { FaDatabase, FaLayerGroup } from 'react-icons/fa';

const Slide05_Para = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          images: [
            "/prompts/Slide5/Slide5_Prompt1_1.png",
            "/prompts/Slide5/Slide5_Prompt1_2.png"
          ]
        }
      ]}
    >
      {/* Background Decor - Organized/Clean Tone */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="w-full h-full flex p-16 gap-16 items-center">
        {/* Left: Visuals (Mockups) */}
        <div className="w-6/12 h-full flex items-center justify-center relative">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="relative z-20 w-full max-w-[500px] rounded-xl overflow-hidden shadow-2xl border border-slate-800"
            >
                <img src="/images/PARAflow.png" alt="PARA FLOW App" className="w-full h-auto object-cover" />
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 bg-slate-800/90 backdrop-blur border border-slate-600 p-4 rounded-lg shadow-xl z-30"
            >
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="font-bold">Projects</span>
                </div>
            </motion.div>
            <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-40 right-0 bg-slate-800/90 backdrop-blur border border-slate-600 p-4 rounded-lg shadow-xl z-30"
            >
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="font-bold">Areas</span>
                </div>
            </motion.div>
             <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-40 left-0 bg-slate-800/90 backdrop-blur border border-slate-600 p-4 rounded-lg shadow-xl z-30"
            >
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="font-bold">Resources</span>
                </div>
            </motion.div>
        </div>

        {/* Right: Project Info */}
        <div className="w-6/12 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-bold border border-blue-500/30">
                    PROJECT 02
                </span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-bold border border-slate-700">
                    Productivity Tool
                </span>
            </div>

            <h2 className="text-6xl font-black mb-4 leading-tight">
              PARA FLOW
            </h2>
            
            <p className="text-xl text-slate-400 mb-10 font-light leading-relaxed">
              복잡한 정보를 체계적으로 정리하는<br/>
              <span className="text-white font-medium">PARA 방법론 기반 노트 앱</span>
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                    <FaLayerGroup className="text-3xl text-blue-400 mb-3" />
                    <h4 className="font-bold text-white mb-1">Systematic Logic</h4>
                    <p className="text-sm text-slate-400">PARA 방법론(Project, Area, Resource, Archive) 완벽 구현</p>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                    <FaDatabase className="text-3xl text-purple-400 mb-3" />
                    <h4 className="font-bold text-white mb-1">Data Structure</h4>
                    <p className="text-sm text-slate-400">효율적인 데이터 관리 및 계층 구조 설계</p>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="text-sm text-slate-500 uppercase tracking-wider font-bold">Tech Stack</h4>
                <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 text-2xl border border-slate-700">
                            <SiFlutter />
                        </div>
                        <span className="text-xs text-slate-400">Flutter</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-green-400 text-2xl border border-slate-700">
                            <SiSupabase />
                        </div>
                        <span className="text-xs text-slate-400">Supabase</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide05_Para;

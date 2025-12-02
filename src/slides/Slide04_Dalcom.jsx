import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { SiFlutter, SiOpenai, SiFirebase, SiSupabase } from 'react-icons/si';

const Slide04_Dalcom = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          images: ["/prompts/Slide4/Slide4_Prompt1.png"]
        }
      ]}
    >
      {/* Background Decor - Warm/Emotional Tone */}
      <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-pink-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-full h-full flex p-16 gap-12 items-center">
        {/* Left: Project Info */}
        <div className="w-5/12 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-bold border border-pink-500/30">
                    PROJECT 01
                </span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-bold border border-slate-700">
                    App Store / Play Store
                </span>
            </div>

            <h2 className="text-6xl font-black mb-2 leading-tight">
              달콤 다이어리<br />
              <span className="text-pink-400 text-4xl font-bold">Dalcom Diary</span>
            </h2>
            
            <p className="text-xl text-slate-400 mb-8 font-light">
              AI 친구와 함께 쓰는 감성 일정 일기 앱
            </p>

            <div className="p-6 bg-slate-900/50 border-l-4 border-pink-500 rounded-r-xl backdrop-blur-sm mb-10">
                <h3 className="text-lg font-bold text-white mb-2">💡 Core Value</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                    "기술(AI)을 통해 <span className="text-pink-300 font-bold">사용자의 감성을 어루만지는</span><br />
                    새로운 경험을 제공합니다."
                </p>
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
                            <SiOpenai />
                        </div>
                        <span className="text-xs text-slate-400">Gen AI</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-yellow-500 text-2xl border border-slate-700">
                            <SiFirebase />
                        </div>
                        <span className="text-xs text-slate-400">Firebase</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-green-500 text-2xl border border-slate-700">
                            <SiSupabase />
                        </div>
                        <span className="text-xs text-slate-400">Supabase</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Visuals (Mockups) */}
        <div className="w-7/12 h-full flex items-center justify-center relative">
            {/* AI Logic / Feature Screen - Main Visual */}
            <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-20 w-[80%] max-w-[600px]"
            >
                <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl p-6 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-4">
                        <SiOpenai className="text-green-400 text-2xl" />
                        <span className="text-lg font-bold text-slate-300">Generative AI Logic</span>
                    </div>
                    <div className="rounded-lg overflow-hidden border border-slate-800 shadow-inner">
                        <img src="/images/dalcomAI.png" alt="AI Feature" className="w-full object-cover" />
                    </div>
                    <div className="mt-6 space-y-2">
                        <div className="flex items-center gap-3 text-sm text-slate-400 font-mono">
                            <span className="text-green-500">✔</span> Analyzing user emotions...
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-400 font-mono">
                            <span className="text-blue-500">✔</span> Generating personalized feedback...
                        </div>
                    </div>
                </div>
                
                {/* Decorative Elements behind */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-green-500/20 rounded-full blur-xl -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl -z-10"></div>
            </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide04_Dalcom;

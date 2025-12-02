import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { FaFlagCheckered, FaRocket, FaUserTie, FaLayerGroup } from 'react-icons/fa';

const RoadmapItem = ({ year, title, desc, icon: Icon, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay }}
    className="relative flex flex-col items-center text-center w-1/3 px-4"
  >
    {/* Year Badge */}
    <div className={`px-6 py-2 rounded-full bg-${color}-500/10 border border-${color}-500/30 text-${color}-400 font-black text-2xl mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
        {year}
    </div>

    {/* Icon Circle */}
    <div className={`w-20 h-20 rounded-full bg-slate-900 border-4 border-${color}-500 flex items-center justify-center mb-6 z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group hover:scale-110 transition-transform duration-300`}>
        <Icon className={`text-3xl text-${color}-400`} />
    </div>

    {/* Content */}
    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl w-full backdrop-blur-sm hover:border-slate-600 transition-colors">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>

    {/* Connecting Line (Horizontal) - Only for first 2 items */}
    {delay < 0.6 && (
        <div className="absolute top-[88px] left-1/2 w-full h-[4px] bg-slate-800 -z-10">
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: delay + 0.4 }}
                className={`h-full bg-gradient-to-r from-${color}-500 to-transparent opacity-50`}
            />
        </div>
    )}
  </motion.div>
);

const Slide14_Roadmap = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          images: ["/prompts/Slide14/Slide14_Prompt1.png"]
        }
      ]}
    >
      {/* Background Decor - Future/Space */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-full h-full flex flex-col p-16 relative z-10">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
        >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-4">
                <FaFlagCheckered /> VISION ROADMAP
            </div>
            <h2 className="text-5xl font-black leading-tight mb-4">
              Future Growth Plan
            </h2>
            <p className="text-xl text-slate-400 font-light">
              "멈추지 않는 성장으로 <span className="text-blue-400 font-bold">대체 불가능한 개발자</span>가 되겠습니다."
            </p>
        </motion.div>

        {/* Roadmap Container */}
        <div className="flex-1 flex items-center justify-center w-full max-w-6xl mx-auto">
            
            <RoadmapItem 
                year="2025"
                title="Full-Stack Mastery"
                desc="Next.js, Supabase 등 모던 웹/앱 스택 심화 학습 및 풀스택 개발 역량 완성"
                icon={FaLayerGroup}
                color="blue"
                delay={0.2}
            />

            <RoadmapItem 
                year="2026"
                title="AI Service Commercialization"
                desc="자체 개발한 AI 서비스의 고도화 및 실제 시장 출시를 통한 비즈니스 가치 창출"
                icon={FaRocket}
                color="purple"
                delay={0.4}
            />

            <RoadmapItem 
                year="2027+"
                title="Tech Lead & Architect"
                desc="대규모 시스템 설계 능력과 팀 리딩 역량을 갖춘 테크 리드로 성장"
                icon={FaUserTie}
                color="green"
                delay={0.6}
            />

        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide14_Roadmap;

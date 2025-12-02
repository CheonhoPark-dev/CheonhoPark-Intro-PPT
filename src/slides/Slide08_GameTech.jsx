import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { FaGamepad, FaRocket, FaPaintBrush, FaCode } from 'react-icons/fa';
import { SiUnrealengine, SiUnity } from 'react-icons/si';

const BenefitCard = ({ icon: Icon, title, desc, delay, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay }}
    className={`flex flex-col p-8 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-${color}-500/50 transition-all group hover:-translate-y-2`}
  >
    <div className={`w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-${color}-500/20 transition-colors`}>
      <Icon className={`text-3xl text-slate-400 group-hover:text-${color}-400 transition-colors`} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

const Slide08_GameTech = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          images: ["/prompts/Slide8/Slide8_Prompt.png"]
        }
      ]}
    >
      {/* Background Decor - Dynamic/Speed */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Code Snippet Overlay (Abstract) */}
      <div className="absolute top-20 right-20 opacity-10 font-mono text-sm text-green-500 pointer-events-none">
        <pre>{`void Update() {
  if (isOptimized) {
    RenderHighQuality();
  }
}`}</pre>
      </div>

      <div className="w-full h-full flex flex-col justify-center p-16 relative z-10">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mb-16"
        >
            <div className="flex items-center gap-4 mb-4">
                <SiUnrealengine className="text-4xl text-slate-500" />
                <SiUnity className="text-4xl text-slate-500" />
                <div className="h-8 w-[1px] bg-slate-700 mx-2"></div>
                <span className="text-red-400 font-bold tracking-widest uppercase">Differentiation</span>
            </div>
            <h2 className="text-6xl font-black leading-tight">
              Why Game Tech?
            </h2>
            <p className="text-2xl text-slate-400 mt-4 font-light">
              게임 개발 경험이 만드는 <span className="text-white font-bold">압도적인 차이</span>
            </p>
        </motion.div>

        {/* 3 Key Benefits Grid */}
        <div className="grid grid-cols-3 gap-8 w-full">
            <BenefitCard 
                icon={FaRocket}
                title="Extreme Performance"
                desc="게임 엔진 수준의 최적화 노하우를 앱에 적용하여, 복잡한 데이터도 끊김 없이 실시간으로 처리합니다."
                delay={0.2}
                color="red"
            />
            <BenefitCard 
                icon={FaGamepad}
                title="Gamification Experience"
                desc="단순한 앱 사용을 넘어, 게임을 플레이하는 듯한 즐거움과 몰입감을 주는 인터랙티브 경험을 설계합니다."
                delay={0.4}
                color="purple"
            />
            <BenefitCard 
                icon={FaPaintBrush}
                title="High-End Visuals"
                desc="쉐이더(Shader), 파티클 등 게임 그래픽 기술을 활용하여, 일반적인 앱에서는 볼 수 없는 화려하고 유려한 디자인을 구현합니다."
                delay={0.6}
                color="blue"
            />
        </div>

        {/* Bottom Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex items-center gap-3 bg-slate-900/80 border border-slate-700 px-6 py-3 rounded-full w-fit"
        >
            <FaCode className="text-green-400" />
            <span className="text-slate-300 text-sm">C++ / OpenGL / DirectX 기반의 깊이 있는 기술적 이해</span>
        </motion.div>

      </div>
    </SlideContainer>
  );
};

export default Slide08_GameTech;

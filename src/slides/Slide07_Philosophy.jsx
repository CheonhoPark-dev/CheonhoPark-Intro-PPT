import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { FaUserFriends, FaChartLine, FaLayerGroup, FaQuoteLeft } from 'react-icons/fa';

const PhilosophyCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay }}
    className="flex flex-col items-center text-center p-8 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-colors group"
  >
    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
      <Icon className="text-3xl text-slate-400 group-hover:text-blue-400 transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

const Slide07_Philosophy = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          images: ["/prompts/Slide7/Slide7_Prompt.png"]
        }
      ]}
    >
      {/* Background Decor - Abstract Network */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center p-16 relative z-10">
        
        {/* Main Message */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="text-center mb-20 max-w-4xl"
        >
            <FaQuoteLeft className="text-4xl text-slate-700 mx-auto mb-6" />
            <h2 className="text-5xl font-black leading-tight mb-6">
                "기술은 도구일 뿐,<br />
                목적은 <span className="text-blue-400">사용자 가치 창출</span>입니다."
            </h2>
            <p className="text-xl text-slate-400 font-light">
                Technology is just a tool, the goal is creating user value.
            </p>
        </motion.div>

        {/* 3 Keywords Grid */}
        <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
            <PhilosophyCard 
                icon={FaUserFriends}
                title="User-Centric"
                desc="사용자의 불편함을 찾아내고, 그들의 경험(UX)을 최우선으로 고려하는 설계를 지향합니다."
                delay={0.2}
            />
            <PhilosophyCard 
                icon={FaChartLine}
                title="Data-Driven"
                desc="직관에 의존하기보다 데이터에 기반하여 문제를 정의하고, 끊임없이 개선(Improvement)합니다."
                delay={0.4}
            />
            <PhilosophyCard 
                icon={FaLayerGroup}
                title="Scalable Architecture"
                desc="단순한 기능 구현을 넘어, 확장 가능하고 유지보수가 용이한 견고한 아키텍처를 설계합니다."
                delay={0.6}
            />
        </div>

        {/* Bottom Text */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-12 text-slate-500 text-sm font-mono"
        >
            Dev Philosophy & Core Values
        </motion.div>

      </div>
    </SlideContainer>
  );
};

export default Slide07_Philosophy;

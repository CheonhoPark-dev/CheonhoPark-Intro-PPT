import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaServer, FaMobileAlt, FaArrowRight, FaLock } from 'react-icons/fa';
import { SiSupabase, SiOpenai, SiFlutter } from 'react-icons/si';

const FlowNode = ({ icon: Icon, label, subLabel, color, delay }) => (
  <motion.div 
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, delay }}
    className={`flex flex-col items-center p-6 bg-slate-900/80 border-2 border-${color}-500/30 rounded-2xl backdrop-blur-sm shadow-xl z-10 min-w-[180px]`}
  >
    <div className={`w-16 h-16 rounded-full bg-${color}-500/10 flex items-center justify-center mb-4 border border-${color}-500/20`}>
      <Icon className={`text-3xl text-${color}-400`} />
    </div>
    <h4 className={`text-lg font-bold text-${color}-100`}>{label}</h4>
    <p className="text-xs text-slate-400 mt-1">{subLabel}</p>
  </motion.div>
);

const ConnectionArrow = ({ delay }) => (
    <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay }}
        className="flex items-center text-slate-600 text-2xl mx-4"
    >
        <FaArrowRight />
    </motion.div>
);

const Slide11_CaseStudy = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          images: ["/prompts/Slide11/Slide11_Prompt1.png"]
        }
      ]}
    >
      {/* Background Decor - Security/Shield */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="w-full h-full flex flex-col p-16 relative z-10">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
        >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold mb-4">
                <FaShieldAlt /> CASE STUDY: SECURITY
            </div>
            <h2 className="text-5xl font-black leading-tight mb-4">
              Secure AI Architecture
            </h2>
            <p className="text-xl text-slate-400 font-light">
              API Key 보호를 위한 <span className="text-green-400 font-bold">Supabase Proxy 패턴</span> 도입
            </p>
        </motion.div>

        {/* Main Content: Problem & Solution Flow */}
        <div className="flex-1 flex flex-col justify-center gap-16">
            
            {/* Problem Statement */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center gap-8"
            >
                <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl max-w-2xl text-center">
                    <h3 className="text-red-400 font-bold text-lg mb-2 flex items-center justify-center gap-2">
                        <span className="text-2xl">⚠️</span> PROBLEM
                    </h3>
                    <p className="text-slate-300">
                        클라이언트(앱) 내부에 API Key를 직접 저장할 경우,<br/>
                        <span className="text-white font-bold">리버스 엔지니어링을 통한 Key 탈취 및 무단 사용 위험</span> 존재
                    </p>
                </div>
            </motion.div>

            {/* Solution Diagram */}
            <div className="flex items-center justify-center relative">
                {/* Connecting Line Background */}
                <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-slate-800 -z-10"></div>

                <FlowNode 
                    icon={SiFlutter} 
                    label="Client App" 
                    subLabel="Request (No Key)" 
                    color="blue" 
                    delay={0.4} 
                />
                
                <ConnectionArrow delay={0.5} />
                
                <div className="relative">
                    <FlowNode 
                        icon={SiSupabase} 
                        label="Supabase Proxy" 
                        subLabel="Edge Functions" 
                        color="green" 
                        delay={0.6} 
                    />
                    {/* Security Badge */}
                    <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.9, type: "spring" }}
                        className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-slate-900 shadow-lg z-20"
                    >
                        <FaLock className="text-sm" />
                    </motion.div>
                </div>

                <ConnectionArrow delay={0.7} />

                <FlowNode 
                    icon={SiOpenai} 
                    label="OpenAI API" 
                    subLabel="Secure Execution" 
                    color="purple" 
                    delay={0.8} 
                />
            </div>

            {/* Result */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-center"
            >
                <div className="inline-block bg-slate-800/50 border border-slate-700 px-8 py-4 rounded-2xl">
                    <h3 className="text-green-400 font-bold text-xl mb-1">🚀 RESULT</h3>
                    <p className="text-white">
                        API Key 완벽 보호 & 비즈니스 로직 은닉 (Server-Side Execution)
                    </p>
                </div>
            </motion.div>

        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide11_CaseStudy;

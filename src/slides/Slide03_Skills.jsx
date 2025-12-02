import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { FaReact, FaPython, FaUnity, FaCode } from 'react-icons/fa';
import { SiFlutter, SiCplusplus, SiUnrealengine, SiOpenai, SiDart, SiJavascript, SiTypescript } from 'react-icons/si';

const data = [
  { subject: '서비스 & 앱', A: 95, fullMark: 100 },
  { subject: '기술 혁신 (AI)', A: 85, fullMark: 100 },
  { subject: '데이터 로직', A: 80, fullMark: 100 },
  { subject: '게임 엔진', A: 90, fullMark: 100 },
  { subject: '그래픽스/C++', A: 85, fullMark: 100 },
  { subject: '최적화', A: 80, fullMark: 100 },
];

const TechCard = ({ icon: Icon, name, category, color }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className={`bg-slate-900/50 border border-slate-700 p-6 rounded-xl flex flex-col items-center gap-4 backdrop-blur-sm hover:border-${color}-500 transition-colors group`}
  >
    <Icon className={`text-5xl text-slate-400 group-hover:text-${color}-400 transition-colors`} />
    <div className="text-center">
      <h4 className="text-white font-bold text-lg">{name}</h4>
      <p className="text-slate-500 text-sm">{category}</p>
    </div>
  </motion.div>
);

const Slide03_Skills = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          images: [
            "/prompts/Slide3/Slide3_Prompt1_1.png",
            "/prompts/Slide3/Slide3_Prompt1_2.png"
          ]
        }
      ]}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="w-full h-full flex p-16 gap-16">
        {/* Left: Radar Chart & Core Message */}
        <div className="w-5/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-2">핵심 역량 <span className="text-blue-500">(Core Competencies)</span></h2>
            <p className="text-xl text-slate-400 mb-12">서비스 지향 아키텍처 & 딥테크 기반 기술</p>

            <div className="w-full h-[500px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 14 }} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    fill="#3b82f6"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 bg-blue-600/20 border border-blue-500/50 backdrop-blur-md px-6 py-3 rounded-lg"
              >
                <span className="text-blue-300 font-mono text-sm">LEVEL: SPECIALIST</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right: Tech Stack Grid */}
        <div className="w-7/12 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-6"
          >
            {/* Service & App */}
            <div className="col-span-3 mb-2">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                    서비스 & 앱 개발 <span className="text-sm font-normal text-slate-500 ml-2">(Main Focus)</span>
                </h3>
            </div>
            <TechCard icon={SiFlutter} name="Flutter" category="크로스 플랫폼" color="blue" />
            <TechCard icon={FaReact} name="React" category="웹 프론트엔드" color="cyan" />
            <TechCard icon={SiDart} name="Dart" category="앱 비즈니스 로직" color="blue" />

            {/* Innovation Tech */}
            <div className="col-span-3 mt-8 mb-2">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                    기술 혁신 (Innovation)
                </h3>
            </div>
            <TechCard icon={SiOpenai} name="AI Integration" category="ChatGPT API 활용" color="green" />
            <TechCard icon={SiJavascript} name="Data Logic" category="데이터 처리" color="yellow" />
            <TechCard icon={SiTypescript} name="TypeScript" category="타입 안정성" color="blue" />

            {/* Deep Tech Foundation */}
            <div className="col-span-3 mt-8 mb-2">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-slate-500 rounded-full"></span>
                    딥테크 기반 (Foundation)
                </h3>
            </div>
            <TechCard icon={SiCplusplus} name="C++" category="핵심 로직 구현" color="blue" />
            <TechCard icon={FaUnity} name="Game Engines" category="Unity / Unreal" color="slate" />
            <TechCard icon={FaCode} name="Custom Engine" category="OpenGL / DirectX" color="red" />
          </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide03_Skills;

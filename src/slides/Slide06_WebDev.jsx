import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCheckCircle } from 'react-icons/fa';

const ProjectItem = ({ title, desc }) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="mt-1 text-green-400 text-xl">
      <FaCheckCircle />
    </div>
    <div>
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <p className="text-slate-400">{desc}</p>
    </div>
  </div>
);

const Slide06_WebDev = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          aiTool: "Antigravity - Gemini 3 Pro, NanoBanana Pro 🍌",
          images: [
            "/prompts/Slide6/Slide6_Prompt1_1.png",
            "/prompts/Slide6/Slide6_Prompt1_2.png",
            "/prompts/Slide6/Slide6_Prompt1_3.png"
          ]
        }
      ]}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="w-full h-full flex p-16 gap-16 items-center">
        {/* Left: Content */}
        <div className="w-5/12 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-bold border border-green-500/30">
                    FREELANCE & WEB
                </span>
            </div>

            <h2 className="text-5xl font-black mb-4 leading-tight">
              웹 서비스 개발<br />
              <span className="text-green-400">& 성공 사례</span>
            </h2>
            
            <p className="text-2xl text-slate-300 mb-12 font-light border-l-4 border-green-500 pl-6 py-2 bg-slate-900/30 rounded-r-lg">
              "고객의 니즈를 <span className="text-white font-bold">현실로 구현하는 실행력</span>"
            </p>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
                <ProjectItem 
                    title="담다 (Damda)" 
                    desc="문화 시설 공간 대여 및 예약 관리 플랫폼" 
                />
                <ProjectItem 
                    title="포레스트 (Forest)" 
                    desc="밴드 공연장 대관, 프로젝트 모집 및 악기 대여 서비스" 
                />
                <ProjectItem 
                    title="마을 커뮤니티 프로젝트" 
                    desc="무거 버스커 마을, 달동 낙서 마을 등 지역 기반 웹사이트" 
                />
            </div>
          </motion.div>
        </div>

        {/* Right: Visuals (Collage) */}
        <div className="w-7/12 h-full flex items-center justify-center relative">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-20 w-full"
            >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-900 group">
                    <img 
                        src="/images/web_portfolio_collage.png" 
                        alt="Web Portfolio Collage" 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-8 right-8 bg-slate-900/90 backdrop-blur border border-slate-700 px-6 py-3 rounded-xl flex items-center gap-3 shadow-xl">
                        <FaLaptopCode className="text-green-400 text-2xl" />
                        <div>
                            <div className="text-xs text-slate-400 font-bold uppercase">Total Projects</div>
                            <div className="text-white font-bold">다양한 웹 솔루션 제공</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide06_WebDev;

import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';

const Slide02_Profile = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white"
      prompts={[
        {
          label: "프롬프트 1",
          content: "게임보다는 근데 앱 개발에 초점을 두고 싶어. 목표는 이 세상에 없는 새로운 기술로 세상을 변화시키는거야",
          images: ["/prompts/Slide2/Slide2_Prompt2.png"]
        }
      ]}
    >
      {/* Left Column: Photo & Contact */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="w-1/3 h-full bg-slate-900 flex flex-col items-center justify-center p-12 border-r border-slate-800 relative"
      >
        <div className="relative w-64 h-64 mb-12">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img 
                src="/images/031711박천호.jpg" 
                alt="Park Cheonho" 
                className="w-full h-full object-cover rounded-full border-4 border-slate-700 shadow-2xl relative z-10"
            />
        </div>
        
        <div className="space-y-6 text-center w-full">
            <div>
                <h2 className="text-4xl font-bold mb-2">박천호</h2>
                <p className="text-blue-400 text-xl">Game & Software Developer</p>
            </div>
            
            <div className="w-full h-px bg-slate-800 my-8"></div>

            <div className="space-y-4 text-left pl-8">
                <div className="flex items-center gap-4">
                    <span className="text-slate-500 w-20">Email</span>
                    <span className="text-slate-300">hiroizora3011@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-slate-500 w-20">GitHub</span>
                    <span className="text-slate-300">github.com/CheonhoPark-dev</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-slate-500 w-20">Edu</span>
                    <span className="text-slate-300">계명대학교 게임소프트웨어학과</span>
                </div>
            </div>
        </div>
      </motion.div>

      {/* Right Column: Intro & Vision */}
      <div className="w-2/3 h-full p-24 flex flex-col justify-center">
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.8 }}
        >
            <h3 className="text-6xl font-bold leading-tight mb-12">
                <span className="text-blue-500">기술</span>로 사람들의 삶을<br />
                <span className="text-white">변화시키는 서비스</span>를 만듭니다.
            </h3>
            
            <div className="space-y-8 text-2xl text-slate-400 font-light leading-relaxed">
                <p>
                    단순히 코드를 작성하는 것을 넘어, <strong className="text-white font-medium">사용자에게 새로운 가치</strong>를 전달하는 것을 목표로 합니다.
                </p>
                <p>
                    <strong className="text-white font-medium">게임 엔진 개발</strong>을 통해 다져진 깊이 있는 CS 지식과 최적화 역량을 바탕으로, 
                    <strong className="text-white font-medium"> 웹과 앱 서비스</strong>의 한계를 뛰어넘는 혁신적인 경험을 설계합니다.
                </p>
                <p>
                    AI, 데이터 시각화 등 <strong className="text-blue-400 font-medium">최신 기술(Innovation Tech)</strong>을 적극적으로 도입하여
                    세상에 없던 솔루션을 만들어내는 개발자입니다.
                </p>
            </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default Slide02_Profile;

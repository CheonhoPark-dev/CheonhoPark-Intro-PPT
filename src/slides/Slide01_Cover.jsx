import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const Slide01_Cover = () => {
  return (
    <SlideContainer 
      className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
      prompts={[
        {
          label: "프롬프트 1",
          images: [
            "/prompts/Slide1/Slide1_Prompt1_1.png",
            "/prompts/Slide1/Slide1_Prompt1_2.png",
            "/prompts/Slide1/Slide1_Prompt1_3.png",
            "/prompts/Slide1/Slide1_Prompt1_4.png",
            "/prompts/Slide1/Slide1_Prompt1_5.png",
            "/prompts/Slide1/Slide1_Prompt1_6.png",
          ]
        },
        {
          label: "프롬프트 2",
          images: [
            "/prompts/Slide1/Slide1_Prompt2_1.png",
            "/prompts/Slide1/Slide1_Prompt2_2.png",
          ]
        }
      ]}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px]"
        />
      </div>

      <div className="z-10 text-center space-y-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl font-light tracking-[0.2em] text-blue-300 uppercase"
        >
          Innovative Software Developer
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-8xl font-black tracking-tight text-white drop-shadow-lg"
        >
          PARK CHEONHO
        </motion.h1>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="h-2 bg-blue-500 mx-auto rounded-full"
        />

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-4xl font-thin text-slate-300 mt-8 max-w-4xl leading-relaxed"
        >
          "세상에 없는 기술로<br />
          <span className="font-bold text-white">세상을 변화시키다</span>"
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 text-slate-500 text-lg tracking-widest"
      >
        PORTFOLIO 2025
      </motion.div>

      {/* Prompt Hint */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute top-28 right-12 flex flex-col items-end z-50 pointer-events-none"
      >
        <div className="bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-lg border border-blue-400/50 text-blue-200 text-sm font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)] mb-2 text-right">
          마우스를 위에 올리면<br/>프롬프트를 볼 수 있습니다!
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-blue-400 text-3xl mr-4"
        >
          <FaArrowUp />
        </motion.div>
      </motion.div>
    </SlideContainer>
  );
};

export default Slide01_Cover;

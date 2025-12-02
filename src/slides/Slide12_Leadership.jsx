import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { FaUsers, FaCodeBranch, FaTasks } from 'react-icons/fa';

const KeywordBadge = ({ icon: Icon, label, delay }) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-slate-300"
  >
    <Icon className="text-blue-400" />
    <span className="font-bold text-sm">{label}</span>
  </motion.div>
);

const Slide12_Leadership = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          images: ["/prompts/Slide12/Slide12_Prompt1.png"]
        }
      ]}
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full h-full flex flex-col p-16 relative z-10">
        
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
        >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-4">
                <FaUsers /> TEAM LEADERSHIP
            </div>
            <h2 className="text-5xl font-black leading-tight mb-4">
              Collaboration & Process
            </h2>
            <p className="text-xl text-slate-400 font-light">
              "효율적인 협업 프로세스를 구축하고 <span className="text-white font-bold">팀을 리드합니다.</span>"
            </p>
            
            <div className="flex justify-center gap-4 mt-6">
                <KeywordBadge icon={FaUsers} label="Communication" delay={0.2} />
                <KeywordBadge icon={FaTasks} label="Agile / Scrum" delay={0.4} />
                <KeywordBadge icon={FaCodeBranch} label="Git Flow" delay={0.6} />
            </div>
        </motion.div>

        {/* Visuals Section */}
        <div className="flex-1 grid grid-cols-2 gap-12 items-center">
            
            {/* Git Strategy */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col gap-4"
            >
                <div className="flex items-center gap-3 mb-2">
                    <FaCodeBranch className="text-orange-500 text-2xl" />
                    <h3 className="text-2xl font-bold text-white">Git Branch Strategy</h3>
                </div>
                <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 shadow-xl overflow-hidden relative group">
                    <img 
                        src="/images/git.png" 
                        alt="Git Branch Strategy" 
                        className="w-full h-auto object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
                </div>
                <p className="text-slate-400 text-sm pl-2 border-l-2 border-orange-500">
                    Main, Develop, Feature 브랜치 전략을 통한 체계적인 버전 관리 및 코드 리뷰 문화 정착
                </p>
            </motion.div>

            {/* Project Management (Gantt) */}
            <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col gap-4"
            >
                <div className="flex items-center gap-3 mb-2">
                    <FaTasks className="text-green-500 text-2xl" />
                    <h3 className="text-2xl font-bold text-white">Agile Project Management</h3>
                </div>
                <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 shadow-xl overflow-hidden relative group">
                    <img 
                        src="/images/gantt.png" 
                        alt="Gantt Chart" 
                        className="w-full h-auto object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
                </div>
                <p className="text-slate-400 text-sm pl-2 border-l-2 border-green-500">
                    Notion을 활용한 스프린트 계획 수립 및 간트 차트를 통한 일정 시각화 및 리스크 관리
                </p>
            </motion.div>

        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide12_Leadership;

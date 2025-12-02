import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaChalkboardTeacher, FaRobot, FaCode } from 'react-icons/fa';

const ActivityCard = ({ image, title, desc, tags, delay }) => (
  <motion.div 
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay }}
    className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group hover:border-orange-500/50 transition-all"
  >
    <div className="h-48 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
    </div>
    <div className="p-6">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">
                    #{tag}
                </span>
            ))}
        </div>
    </div>
  </motion.div>
);

const Slide13_SocialImpact = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          images: ["/prompts/Slide13/Slide13_Prompt1.png"]
        }
      ]}
    >
      {/* Background Decor - Warm/Human */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-yellow-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full h-full flex flex-col p-16 relative z-10">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold mb-4">
                <FaHandHoldingHeart /> SOCIAL IMPACT
            </div>
            <h2 className="text-5xl font-black leading-tight mb-4">
              Education & Contribution
            </h2>
            <p className="text-xl text-slate-400 font-light">
              "기술 나눔을 통해 <span className="text-orange-400 font-bold">사회에 기여합니다.</span>"
            </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto w-full">
            
            {/* Left: WEs Center Activity 1 */}
            <ActivityCard 
                image="/images/wes1.jpg"
                title="울산 WEs 문화센터 코딩 강사"
                desc="지역 아동 및 청소년을 대상으로 한 정기 코딩 교육 봉사. 단순한 코딩 교육을 넘어, 논리적 사고력과 문제 해결 능력을 키우는 데 집중했습니다."
                tags={["Mentoring", "Youth Education", "Volunteer"]}
                delay={0.2}
            />

            {/* Right: WEs Center Activity 2 (Curriculum Focus) */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col justify-between h-full"
            >
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm h-full">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <FaChalkboardTeacher className="text-orange-400" />
                        주요 교육 커리큘럼
                    </h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl">
                                <FaRobot />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">AI 활용 교육</h4>
                                <p className="text-slate-400 text-sm">ChatGPT, Gemini 등 생성형 AI 도구를 활용한 창의적 문제 해결 및 콘텐츠 제작 실습</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl">
                                <FaCode />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">바이브 코딩 (Vibe Coding)</h4>
                                <p className="text-slate-400 text-sm">음악과 코딩을 결합한 융합 교육. 알고리즘을 통해 리듬과 멜로디를 생성하며 코딩의 즐거움 전달</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800">
                        <img src="/images/wes2.jpg" alt="Classroom" className="w-full h-40 object-cover rounded-xl opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide13_SocialImpact;

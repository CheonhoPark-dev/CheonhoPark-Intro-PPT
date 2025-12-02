import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaHandshake } from 'react-icons/fa';

const ContactItem = ({ icon: Icon, label, value, delay, href }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay }}
    className="flex items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm hover:bg-slate-800/80 hover:border-blue-500/50 transition-all group w-full max-w-md cursor-pointer"
  >
    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
      <Icon className="text-2xl text-slate-400 group-hover:text-blue-400 transition-colors" />
    </div>
    <div className="flex flex-col">
        <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">{label}</span>
        <span className="text-lg text-white font-medium group-hover:text-blue-300 transition-colors">{value}</span>
    </div>
  </motion.a>
);

const Slide15_Contact = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          images: ["/prompts/Slide15/Slide15_Prompt1.png"]
        }
      ]}
    >
      {/* Background Decor - Ending/Impact */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="w-full h-full flex flex-col items-center justify-center p-16 relative z-10">
        
        {/* Main Message */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
        >
            <div className="inline-block mb-6 p-4 bg-blue-500/10 rounded-full border border-blue-500/20">
                <FaHandshake className="text-4xl text-blue-400" />
            </div>
            <h2 className="text-7xl font-black leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-purple-400">
              THANK YOU
            </h2>
            <p className="text-3xl text-slate-300 font-light">
              "함께 성장할 준비가 되어 있습니다.<br />
              <span className="font-bold text-white">감사합니다.</span>"
            </p>
        </motion.div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 w-full items-center">
            <ContactItem 
                icon={FaEnvelope}
                label="Email"
                value="pchh1353@gmail.com"
                href="mailto:pchh1353@gmail.com"
                delay={0.2}
            />
            <ContactItem 
                icon={FaGithub}
                label="GitHub"
                value="github.com/CheonhoPark-dev"
                href="https://github.com/CheonhoPark-dev"
                delay={0.4}
            />
        </div>

        {/* Footer */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-12 text-slate-600 text-sm font-mono"
        >
            © 2025 Cheonho Park. All Rights Reserved.
        </motion.div>

      </div>
    </SlideContainer>
  );
};

export default Slide15_Contact;

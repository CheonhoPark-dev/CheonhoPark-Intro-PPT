import React from 'react';
import SlideContainer from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { SiCplusplus, SiOpengl } from 'react-icons/si';
import { FaCogs, FaLayerGroup } from 'react-icons/fa';

const PipelineStage = ({ title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center text-center relative z-10"
  >
    <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
      <span className="text-blue-400 font-bold text-sm">{title}</span>
    </div>
    <p className="text-slate-400 text-xs max-w-[120px]">{desc}</p>
  </motion.div>
);

const Arrow = ({ delay }) => (
  <motion.div 
    initial={{ width: 0 }}
    whileInView={{ width: 60 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, delay }}
    className="h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 mx-2 relative top-[-20px]"
  >
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-purple-500 rotate-45"></div>
  </motion.div>
);

const Slide09_Engine = () => {
  return (
    <SlideContainer 
      className="flex bg-slate-950 text-white relative overflow-hidden"
      prompts={[
        {
          label: "프롬프트 1",
          images: ["/prompts/Slide9/Slide9_Prompt.png"]
        }
      ]}
    >
      {/* Background Decor - Blueprint/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full h-full flex p-16 gap-16 items-center">
        {/* Left: Content & Message */}
        <div className="w-5/12 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
                <SiCplusplus className="text-blue-500 text-3xl" />
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-bold border border-blue-500/30">
                    DEEP TECH
                </span>
            </div>

            <h2 className="text-5xl font-black mb-6 leading-tight">
              Custom Engine<br />
              <span className="text-blue-400">& Graphics</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-10 font-light border-l-4 border-blue-500 pl-6 py-2 bg-slate-900/50 rounded-r-lg">
              "엔진을 사용하는 것을 넘어,<br/>
              <span className="text-white font-bold">엔진을 직접 설계하고 만듭니다.</span>"
            </p>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-slate-800 rounded-lg text-blue-400">
                        <FaCogs />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">DirectX 11 / OpenGL</h4>
                        <p className="text-sm text-slate-400">로우 레벨 그래픽스 API 직접 제어 및 최적화</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-slate-800 rounded-lg text-purple-400">
                        <FaLayerGroup />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Custom Shader Pipeline</h4>
                        <p className="text-sm text-slate-400">HLSL/GLSL 쉐이더 프로그래밍 및 렌더링 파이프라인 구축</p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Visuals (Pipeline & Code) */}
        <div className="w-7/12 h-full flex flex-col items-center justify-center relative">
            
            {/* Pipeline Diagram */}
            <div className="flex items-center justify-center mb-12 w-full">
                <PipelineStage title="Input" desc="Vertex Data" delay={0.2} />
                <Arrow delay={0.3} />
                <PipelineStage title="Vertex Shader" desc="Transform" delay={0.4} />
                <Arrow delay={0.5} />
                <PipelineStage title="Rasterizer" desc="Pixelation" delay={0.6} />
                <Arrow delay={0.7} />
                <PipelineStage title="Pixel Shader" desc="Coloring" delay={0.8} />
                <Arrow delay={0.9} />
                <PipelineStage title="Output" desc="Frame Buffer" delay={1.0} />
            </div>

            {/* Code Snippet Window */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full max-w-2xl bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-slate-700 font-mono text-xs"
            >
                <div className="flex items-center gap-2 px-4 py-2 bg-[#252526] border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-slate-400">GraphicsEngine.cpp</span>
                </div>
                <div className="p-6 text-slate-300 overflow-x-auto">
<pre><code className="language-cpp">{`// Initialize DirectX 11 Device & SwapChain
HRESULT Graphics::Initialize(HWND hwnd) {
    DXGI_SWAP_CHAIN_DESC scd = {0};
    scd.BufferCount = 1;
    scd.BufferDesc.Format = DXGI_FORMAT_R8G8B8A8_UNORM;
    scd.BufferUsage = DXGI_USAGE_RENDER_TARGET_OUTPUT;
    scd.OutputWindow = hwnd;
    scd.SampleDesc.Count = 4; // MSAA 4x
    
    // Create Device and SwapChain
    D3D11CreateDeviceAndSwapChain(
        NULL, D3D_DRIVER_TYPE_HARDWARE, NULL, 0, NULL, 0,
        D3D11_SDK_VERSION, &scd, &m_swapChain, &m_device, 
        NULL, &m_deviceContext
    );
    
    // ... Shader Compilation & Buffer Setup ...
    return S_OK;
}`}</code></pre>
                </div>
            </motion.div>

        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide09_Engine;

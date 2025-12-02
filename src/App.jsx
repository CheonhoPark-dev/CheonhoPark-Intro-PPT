import React from 'react';
import Slide01_Cover from './slides/Slide01_Cover';
import Slide02_Profile from './slides/Slide02_Profile';
import Slide03_Skills from './slides/Slide03_Skills';
import Slide04_Dalcom from './slides/Slide04_Dalcom';
import Slide05_Para from './slides/Slide05_Para';
import Slide06_WebDev from './slides/Slide06_WebDev';
import Slide07_Philosophy from './slides/Slide07_Philosophy';
import Slide08_GameTech from './slides/Slide08_GameTech';
import Slide09_Engine from './slides/Slide09_Engine';
import Slide10_Elementalism from './slides/Slide10_Elementalism';
import Slide11_CaseStudy from './slides/Slide11_CaseStudy';
import Slide12_Leadership from './slides/Slide12_Leadership';
import Slide13_SocialImpact from './slides/Slide13_SocialImpact';
import Slide14_Roadmap from './slides/Slide14_Roadmap';
import Slide15_Contact from './slides/Slide15_Contact';

export default function App() {
  return (
    <div className="overflow-y-auto h-screen snap-y snap-mandatory">
      <div className="snap-start"><Slide01_Cover /></div>
      <div className="snap-start"><Slide02_Profile /></div>
      <div className="snap-start"><Slide03_Skills /></div>
      <div className="snap-start"><Slide04_Dalcom /></div>
      <div className="snap-start"><Slide05_Para /></div>
      <div className="snap-start"><Slide06_WebDev /></div>
      <div className="snap-start"><Slide07_Philosophy /></div>
      <div className="snap-start"><Slide08_GameTech /></div>
      <div className="snap-start"><Slide09_Engine /></div>
      <div className="snap-start"><Slide10_Elementalism /></div>
      <div className="snap-start"><Slide11_CaseStudy /></div>
      <div className="snap-start"><Slide12_Leadership /></div>
      <div className="snap-start"><Slide13_SocialImpact /></div>
      <div className="snap-start"><Slide14_Roadmap /></div>
      <div className="snap-start"><Slide15_Contact /></div>
    </div>
  )
}

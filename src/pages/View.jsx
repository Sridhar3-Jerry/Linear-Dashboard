import { IoFilterSharp } from "react-icons/io5";
import { LuPanelRight } from "react-icons/lu";
import { LuSlidersHorizontal } from "react-icons/lu";
import {
  PiCubeBold,
  PiStackBold,
  PiDotsThreeBold,
  PiSquaresFourBold,
} from "react-icons/pi";
import { BiLayerPlus } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { BiLinkAlt } from "react-icons/bi";

function View(){
    return(
        <div className="flex flex-col h-full ">
        <div className="border-b border-white/10 flex items-center justify-between ">
          <div className="text-textColor flex gap-3 items-center p-2 pl-6 ">
            <p className="text-white">Projects</p>
            <div className="flex items-center bg-menuHover rounded  border border-white/10 px-2 ">
              <button className=" p-0.5 text-sm  text-white ">Issues</button>
            </div>
  
            <div className="flex hover:text-white items-center hover:bg-menuHover border border-gray-800 rounded px-2 ">
              <button className=" p-0.5 text-sm">Projects</button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-2 px-2 rounded mr-6 border border-white/10  bg-menuHover">
                <p className="text-textColor">
                <LuSlidersHorizontal />
                </p>
                <button className="text-white/80 text-sm rounded">Display</button>
            </div>
            <div className="flex items-center gap-2 px-2 rounded mr-6 border border-white/10  bg-menuHover">
                <p className="text-textColor">
                    <FaPlus/>
                </p>
                <button className="text-white/80 text-sm rounded">New View</button>
            </div>
          </div>
        </div>
       
  
          <div className="flex justify-center items-center h-full">
              <div className="flex flex-col items-center w-1/5">
              <div className=" self-start">
              <svg className="w-24 h-full" viewBox="15 14 92 112" fill="none" aria-label="Empty custom views list illustration">
                <path d="M20 110.4a2 2 0 0 1-1.26-1.85v-2.5a3 3 0 0 1 2.7-2.99L105 94.75v4.4a2 2 0 0 1-1 1.73l-41.78 24a6 6 0 0 1-5.22.37l-37-14.84Z" fill="lch(4.8% 0.7 272)" stroke="lch(19% 3.54 272 / 1)" stroke-width="1.5"></path><path d="M19.88 106.41a2 2 0 0 1-.27-3.6L61.8 78.5a6 6 0 0 1 5.18-.4l37.13 14.5a2 2 0 0 1 .27 3.6L62.2 120.5a6 6 0 0 1-5.18.4l-37.13-14.5Z" fill="lch(4.8% 0.7 272)" stroke="lch(19% 3.54 272 / 1)" stroke-width="1.5"></path><path d="M20 99.46a2 2 0 0 1-1.26-1.86v-2.5a3 3 0 0 1 2.7-2.99L105 83.8v4.4a2 2 0 0 1-1 1.73l-41.78 24a6 6 0 0 1-5.22.37L20 99.46Z" 
                fill="lch(4.8% 0.7 272)" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5"></path><path d="M19.88 95.46a2 2 0 0 1-.27-3.6l42.2-24.33a6 6 0 0 1 5.18-.39l37.13 14.5a2 2 0 0 1 .27 3.6l-42.2 24.32a6 6 0 0 1-5.18.4l-37.13-14.5Z" fill="lch(4.8% 0.7 272)" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5"></path><path d="M20 88.5a2 2 0 0 1-1.26-1.85v-2.5a3 3 0 0 1 2.7-3l83.55-8.3v4.4a2 2 0 0 1-1 1.73l-41.78 24a6 6 0 0 1-5.22.36l-37-14.84Z" fill="lch(4.8% 0.7 272)" stroke="lch(62.6% 1.35 272 / 1)" stroke-width="1.5"></path><path d="M19.88 84.5a2 2 0 0 1-.27-3.59l42.2-24.33A6 6 0 0 1 67 56.2l37.13 14.5a2 2 0 0 1 .27 3.59L62.2 98.6a6 6 0 0 1-5.2.4L19.88 84.5Z" fill="lch(4.8% 0.7 272)" stroke="lch(62.6% 1.35 272 / 1)" stroke-width="1.5"></path><path d="M20.14 72.9a2 2 0 0 1-2.02-.99l-1.25-2.16a3 3 0 0 1 .85-3.94l68.2-48.97 2.2 3.8a2 2 0 0 1 0 2.01L63.94 64.32a6 6 0 0 1-4.34 2.93l-39.46 5.64Z" fill="lch(4.8% 0.7 272)" stroke="lch(90.65% 1.35 272 / 1)" stroke-width="1.5"></path><path d="M18.04 69.49a2 2 0 0 1-2.03-2.98L40.4 24.34a6 6 0 0 1 4.29-2.93l39.4-6.01a2 2 0 0 1 2.03 2.98L61.73 60.55a6 6 0 0 1-4.29 2.93l-39.4 6.01Z" fill="lch(4.8% 0.7 272)" stroke="lch(90.65% 1.35 272 / 1)" stroke-width="1.5">
                </path></svg>
              </div>
              <div className="flex ">
              <div className="flex flex-col  gap-2  pt-5 ">
                  <h2 className="text-white">Views</h2>
                  <p className="max-h-full text-textColor text-sm">Create custom views using filters to show only the issues or projects you want to see. You can save, share, and favorite these views for easy access and faster team collaboration.</p>
                  <div className="flex text-textColor gap-1">
                    <p className="text-textColor text-sm">You can also save any existing view by clicking the </p>
                    <BiLayerPlus/>
                  </div>
                   <p className="text-textColor text-sm pb-2">icon or by pressing ⌥ V.</p>
                  <div className="flex gap-2">
                    <div className="bg-Mbutton rounded flex items-center gap-2 p-0.5 w-full">
                        <button className="text-sm text-white  p-1">
                            Create new issue
                        </button>
                    </div>
                    <div className="bg-menuHover rounded border border-gray-800 p-1 flex items-center w-full">
                          <button className="text-white text-sm">Documentation</button>
                    </div>
                  </div>
              </div>
              </div>
              
          </div>
       
        </div>
      </div>
    )
}
export default View;
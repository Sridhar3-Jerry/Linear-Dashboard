import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { LuPanelRight } from "react-icons/lu";
import { LuSlidersHorizontal } from "react-icons/lu";
import { TfiLayers } from "react-icons/tfi";
import { PiCircleHalfFill } from "react-icons/pi";
import { TbCircleDotted } from "react-icons/tb";
import { GoBellFill } from "react-icons/go";
import { BsCircle } from "react-icons/bs";
import { FaCaretDown,FaCaretRight } from "react-icons/fa";
import Issue from "./Issue";
import { FaPlus } from "react-icons/fa";
import { TbCopyXFilled } from "react-icons/tb";
import { FaPencil } from "react-icons/fa6";
import { ChevronDown, Search, Inbox,Layers2} from "lucide-react"



function Issues(){
    const [collapsed,setCollapsed] = useState(true);
    const [newView,setNewView] = useState(false);
    const [backLogs,setBackLogs] = useState(false);
   
    const menus = [
        {id:1,icon:<TfiLayers/>,label:"All issues"},
        {id:2,icon:<PiCircleHalfFill />,label:"Active"},
        {id:3,icon:<TbCircleDotted/>,label:"Backlogs"}
    ]
    const [isActive,setIsActive] = useState(menus[0].id);
    return(
        <div className="flex flex-col h-full ">
            <div className="border-b border-white/10 flex items-center justify-between ">
                <div className="text-textColor flex gap-3 items-center p-2 pl-6 ">
                    {menus.map((menu)=>{
                        return(
                            <div key={menu.id} onClick={()=>setIsActive(menu.id)} className={`flex items-center rounded ${isActive==menu.id ? " bg-menuHover text-white":"text-textColor" }  border border-white/10 px-2 gap-1`}>
                                    {menu.icon}
                                <button className=" p-1 text-xs ">{menu.label}</button>
                            </div>
                        )
                    })}
                    
                    <div onClick={()=>{setNewView(v=>!v);()=>setIsActive(null);}} className="hover:bg-menuHover p-1 hover:text-white rounded">
                        {newView ? 
                         
                        <div className="flex gap-2 items-center bg-white/10  border border-dotted border-gray-600 rounded">
                            <Layers2 size={16} className="text-white"/>
                            <button  className="text-xs p-1 ">New view</button>
                            <FaPencil size={12}/>
                        </div> : <TbCopyXFilled className="rotate-225" size={16}/> }
                        
                    </div>
        
                </div>
                <div className="flex items-center gap-3">
                    <p className="text-textColor  hover:bg-menuHover hover:text-white p-2 rounded-lg">
                    <GoBellFill className="" />
                    </p>
                    <p className="text-textColor  hover:text-white p-2 rounded-lg pr-8 border-l border-white/10 ">
                    <LuPanelRight className="" />
                    </p>
                </div>
            </div>
            <div className={`${newView ? "p-2":"p-0"}`}>
               <div className={`${newView ? "border border-white/10 bg-menuHover rounded-lg":"border-none"} `}>
               {newView &&   <div className="text-textColor text-sm flex justify-between p-3 border-b border-white/10">
                        <div className="flex gap-2 flex-col ">
                            <div className="flex gap-2">
                                <Layers2 className="bg-menuHover border border-white/50 p-1 rounded text-white/90"/> 
                                <input
                                  type="text"
                                  placeholder="All issues"
                                  className="text-textColor border-none outline-none focus:outline-none focus:border-none appearance-none"
                                />
                            </div>
                            <div className="pl-8">
                                <p>Description (optional)</p>
                            </div>
                            
                        </div>
                        
                        <div className="pr-2">
                            <button onClick={()=>setNewView(v=>!v)} className="hover:bg-menuHover p-0.5 px-2 rounded ">Cancel</button>
                            <button className="bg-Mbutton  p-0.5 px-2  rounded text-white">Save</button>
                        </div>
                    </div>}
                    <div className="flex justify-between items-center border-b border-white/10 p-2 ">
                        <div className={` ${newView ? "pl-2":"pl-4"} text-white flex gap-2 `}>
                            <IoFilterSharp />
                            <p className="text-sm">Filter</p>
                        </div>
                        <div className="flex items-center gap-2 px-2 rounded mr-6 border border-white/10  bg-menuHover">
                            <p className="text-textColor">
                            <LuSlidersHorizontal />
                            </p>
                            <button className="text-white/80 text-sm rounded">Display</button>
                        </div>
                    </div>
                </div>
            </div>
            

            {isActive==3 && !newView && <div className="flex justify-center items-center h-full">
              <div className="flex flex-col items-center w-1/5">
                    <div className=" self-start">
                        <svg className="w-24 h-full" viewBox="0 0 80 74" fill="none" aria-label="Empty backlog illustration"><path d="M18 33.5c-9.39 0-17-5.96-17-13.3V15h34v5.2c0 7.34-7.61 13.3-17 13.3Z" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5"></path><ellipse cx="17" cy="13.05" rx="17" ry="13.05" transform="matrix(-1 0 0 1 35 1)" fill="lch(4.8% 0.7 272)" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5"></ellipse><ellipse cx="13" cy="9" rx="13" ry="9" transform="matrix(-1 0 0 1 31 5)" fill="lch(4.8% 0.7 272)" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="1 3"></ellipse><path d="M62 33.5c-9.39 0-17-5.96-17-13.3V15h34v5.2c0 7.34-7.61 13.3-17 13.3Z" stroke="lch(62.6% 1.35 272 / 1)" stroke-width="1.5"></path><ellipse cx="17" cy="13.05" rx="17" ry="13.05" transform="matrix(-1 0 0 1 79 1)" fill="lch(4.8% 0.7 272)" stroke="lch(62.6% 1.35 272 / 1)" stroke-width="1.5"></ellipse><ellipse cx="13" cy="9" rx="13" ry="9" transform="matrix(-1 0 0 1 75 5)" fill="lch(4.8% 0.7 272)" stroke="lch(62.6% 1.35 272 / 1)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="1 3"></ellipse><path d="M18 72.5c-9.39 0-17-5.96-17-13.3V54h34v5.2c0 7.34-7.61 13.3-17 13.3Z" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5"></path><ellipse cx="17" cy="13.05" rx="17" ry="13.05" transform="matrix(-1 0 0 1 35 40)" fill="lch(4.8% 0.7 272)" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5"></ellipse><ellipse cx="13" cy="9" rx="13" ry="9" transform="matrix(-1 0 0 1 31 44)" fill="lch(4.8% 0.7 272)" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="1 3"></ellipse><path d="M62 72.5c-9.39 0-17-5.96-17-13.3V54h34v5.2c0 7.34-7.61 13.3-17 13.3Z" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5"></path><ellipse cx="17" cy="13.05" rx="17" ry="13.05" transform="matrix(-1 0 0 1 79 40)" fill="lch(4.8% 0.7 272)" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5"></ellipse><ellipse cx="13" cy="9" rx="13" ry="9" transform="matrix(-1 0 0 1 75 44)" fill="lch(4.8% 0.7 272)" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="1 3"></ellipse></svg>
                    </div>
                <div className="flex ">
                    <div className="flex flex-col  gap-2  pt-5 ">
                        <h2 className="text-white">Backlog issues</h2>
                        <p className="max-h-full text-textColor text-sm">The backlog is a place for new issues and ideas that haven’t been prioritized yet.</p>
                        <div className="flex text-textColor gap-1">
                            <p className="text-textColor text-sm">When your team is ready to work on these issues, you can move them out of the backlog by updating their status or adding them to a Cycle.</p>
                        </div>
                     
                        <div className="flex gap-2 ">
                            <div className="bg-Mbutton rounded flex items-center gap-2 p-0.5 w-2/3 justify-center">
                                <button className="text-sm text-white  p-1">
                                    Create new issue
                                </button>
                                <p className="border border-white px-1 rounded text-xs text-white">C</p>
                        </div>
                        <div className="bg-menuHover rounded border border-gray-800 p-1 flex items-center w-1/2 justify-center">
                            <button className="text-white text-sm text-center">Documentation</button>
                        </div>
                    </div>
                </div>
              </div>
                 </div>
            </div>}


           {isActive!==3 &&  <div>
                <div className="flex justify-between items-center bg-menuHover py-2">
                    <div className="flex">
                        <div className="flex items-center">
                            {collapsed ? <FaCaretDown onClick={()=>setCollapsed(c=>!c)} className="hover:text-white text-white/50" size={12}/> :
                            <FaCaretRight onClick={()=>setCollapsed(c=>!c)} className="hover:text-white text-white/50" size={12}/>}
                        </div>
                            
                        <div className=" text-white flex gap-2 pl-3 items-center">
                            <BsCircle size={14}/>
                            <p className="text-sm">Todo 9</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-1 hover:bg-white/10 rounded mr-8  bg-menuHover group ">
                        <p className="text-textColor group-hover:text-white ">
                            <FaPlus size={12}/>
                        </p>
                    </div>
                </div>
                {collapsed && <Issue></Issue>}
            </div>}

        </div>
    )
}
export default Issues;
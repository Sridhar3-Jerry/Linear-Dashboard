import { FaCaretDown,FaCaretRight } from "react-icons/fa";
import { PiCubeBold, PiStackBold, PiDotsThreeBold,} from "react-icons/pi";
import { useState } from "react";

function DropSection({menus,heading,person,moreI,drag}){
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [collapsed,setCollapsed] = useState(false);
    
    return(
        <div>
                <div className="">
                    <div onClick={()=>setCollapsed(c=>!c)}className="text-white px-1 ">
                        <div className="flex items-center gap-1 mt-1 py-1 text-white/50 px- hover:bg-gray-800 hover:rounded-md justify-between group"
                        >
                            <div className="flex gap-1 items-center">
                                <p className="group-hover:text-gray-500 text-black">{drag}</p>
                                <p className="bg-gray-500 rounded text-violet-900">{person}</p>
                                <h4 className={`text-sm ${heading=="Sridhar Stephen" ? "text-white":"text-white/50"}`}>{heading}</h4>
                                {collapsed ? <FaCaretDown className="text-xs"/> : <FaCaretRight  className="text-xs"/>}
                            </div>
                            <div>
                                <p className="group-hover:text-white text-black">{moreI}</p>
                            </div>
                        
                        </div>

                    {collapsed &&  <div>
                        {menus.map((menu,index)=>{
                            return(
                                <div key={index} className="w-full bg-black">
                                    <div 
                                        onMouseOver={()=>setHoveredIndex(index)} 
                                        onMouseOut={()=>setHoveredIndex(null)} 
                                        className="flex items-center gap- py-1.5 hover:bg-gray-900 rounded-lg px-2  justify-between"
                                    >
                                        <div className="flex gap-2 w-full">
                                            <p className={`${hoveredIndex === index ? "text-white" : "text-white/50"} `}>{menu.icon}</p>
                                            <p className="text-sm text-white/80 cursor-default">{menu.name}</p>
                                        </div>
                                    
                                        <div>
                                            <p className={`${hoveredIndex === index ? "text-gray-700 block hover:text-white" : "text-white/50 hidden"} `}>{menu.icon1}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        </div>}
                    </div>
                </div>

        </div>
    )
}
export default DropSection;
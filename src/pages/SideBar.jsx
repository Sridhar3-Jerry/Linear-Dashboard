 import { ChevronDown, Search, Inbox,Layers2} from "lucide-react"
 import { FiEdit } from "react-icons/fi";
 import { MdFilterCenterFocus } from "react-icons/md";
 import DropSection from './DropSection'
 import { FaCaretDown,FaCaretRight } from "react-icons/fa";
import { PiCubeBold, PiStackBold, PiDotsThreeBold, PiSquaresFourBold} from "react-icons/pi";
import { FiPlus, FiRefreshCcw } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TfiLayers } from "react-icons/tfi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useState, useRef } from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { GoQuestion } from "react-icons/go";
import React from "react";
import { Link } from "react-router-dom";
import { CgMoreAlt } from "react-icons/cg";
// import { PiSquaresFourBold, PiCubeBold, PiStackBold } from "react-icons/pi";

function SideBar(){
    const menus = [
        {
          name: "Projects",
          icon: <PiCubeBold size={16}/>,
          to: "/projects",
          tooltip: { text: "Go to projects", shortcut: ["G", "then", "P"] }
        },
        {
          name: "Views",
          icon: <Layers2  size={16}/>,
          to: "/views",
          tooltip: { text: "Go to views", shortcut: ["G", "then", "V"] }
        },
        {
          name: "More",
          icon: <PiDotsThreeBold size={16}/>,
          to: "/more"
        },
      ];
      const tryMenus = [
        {
          name: "Invite people",
          icon: <FiPlus size={16} />, // no route
          icon1:<IoMdClose />
        },
        {
          name: "Cycles",
          icon: <FiRefreshCcw size={16} />, // no route
          icon1: <IoMdClose />
        },
        {
          name: "Link GitHub",
          icon: <FaGithub size={16} />, // no route
          icon1: <IoMdClose />
        },
      ];

      const yourTeam = [
        {
          name: "Issues",
          icon: <TfiLayers size={16} />,
          to: "/issues"
        },
        {
          name: "Projects",
          icon: <PiCubeBold size={16} />,
          to: "/projects",
          tooltip: { text: "Go to projects", shortcut: ["G", "then", "P"] }
        },
        {
          name: "Views",
          icon: <Layers2 size={16} />,
          to: "/views",
          tooltip: { text: "Go to views", shortcut: ["G", "then", "V"] }
        },
      ];

      const [workspaceCollapsed, setWorkspaceCollapsed] = useState(true);
      const [teamCollapsed, setTeamCollapsed] = useState(true);
      const [width, setWidth] = useState(250); // initial width in px
      const sidebarRef = useRef(null);
      const isResizing = useRef(false);
      const [workspaceHoveredIndex, setWorkspaceHoveredIndex] = useState(null);
      const [teamHoveredIndex, setTeamHoveredIndex] = useState(null);
      const [teamSectionCollapsed, setTeamSectionCollapsed] = useState(true); // For 'Your teams' header
      const [teamMenuCollapsed, setTeamMenuCollapsed] = useState(true); // For team row

  // Mouse event handlers
  const onMouseDown = (e) => {
    isResizing.current = true;
    document.body.style.cursor = "col-resize";
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    if (!isResizing.current) return;
    if (sidebarRef.current) {
        const sidebarLeft = sidebarRef.current.getBoundingClientRect().left;
        const newWidth = e.clientX - sidebarLeft;
        setWidth(Math.max(150, Math.min(newWidth, 400)));
    }
  };

  const onMouseUp = () => {
    isResizing.current = false;
    document.body.style.cursor = "";
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  // Remove the useEffect for event listeners, as we now attach/detach in the handlers

    return(
        <div
      ref={sidebarRef}
      style={{
        width,
        maxWidth: 400,
        minWidth: 180,
        
        transition: isResizing.current ? "none" : "width 0.2s",
      }}
      className="h-screen bg-black border-r border-gray-800 text-white p-1 relative z-50 overflow-visible"
    >
            {/* Name Section */}
            <div className=" p-1 flex items-center  justify-between">
                <div className="flex gap-2 items-center hover:bg-gray-900 p-1 rounded-lg">
                    <h1 className="bg-amber-300 text-white/90 rounded text p-0.5 text-xs">SS</h1>
                    <h3 className="text-white text-sm">Sridhar Stephen</h3>
                    <ChevronDown className="text-white" size={14}/>
                </div>
                <div className="flex gap-3 pr-5 items-center">
                    <Search size={14}></Search>
                    <FiEdit className="bg-gray-400 p-1 text-white rounded-lg" size={26}></FiEdit>
                </div>
            </div>

            {/* Menu */}
            <div className="pl-2 pt-5 flex flex-col">
                <Link to="/inbox" className="flex items-center gap-1 hover:bg-gray-800 p-1 rounded">
                    <Inbox className="text-gray-500" size={16}></Inbox>
                    <p className="text-sm text-white/80">Inbox</p>
                </Link>
                <Link to="/my-issues" className="flex items-center gap-1 hover:bg-gray-800 p-1 rounded">
                    <MdFilterCenterFocus className="text-gray-500 "/>
                    <p className="text-sm text-white/80">My issues</p>
                </Link>
            </div>

            {/* Workspace,Your teams,Try */}
            <div className="mt-5 flex flex-col justify-between h-8/9">
                <div>
                    {/* Workspace Dropdown - now styled like Your team */}
                    <div className="pl-2 py-1 text-white/50 px-1 justify-between group">
                        <div onClick={() => setWorkspaceCollapsed((c) => !c)} className="w-full flex gap-1 items-center hover:bg-gray-800 hover:rounded-md py-1 cursor-pointer">
                            <p></p>
                            <h4 className="text-sm">Workspace</h4>
                            {workspaceCollapsed ? <FaCaretDown className="text-xs"/> : <FaCaretRight className="text-xs"/>}
                        </div>
                        <div
                            className={`flex flex-col gap-1 transition-all duration-300 ${workspaceCollapsed ? 'overflow-hidden max-h-40 opacity-100' : 'overflow-visible max-h-[500px] opacity-100'}`}
                            style={{ transitionProperty: 'max-height, opacity' }}
                        >
                            {menus.map((menu, index) => (
                                <div key={menu.name} className="relative">
                                    <Link
                                        to={menu.to}
                                        className={`flex items-center gap-2 p-2 rounded group transition-colors duration-150 ${workspaceHoveredIndex === index ? "bg-gray-800" : ""}`}
                                        onMouseOver={() => setWorkspaceHoveredIndex(index)}
                                        onMouseOut={() => setWorkspaceHoveredIndex(null)}
                                    >
                                        <span className={`${workspaceHoveredIndex === index ? "text-white" : "text-gray-500"}`}>{menu.icon}</span>
                                        <span className="text-sm">{menu.name}</span>
                                    </Link>
                                    {/* Inline tooltip for debugging */}
                                    {workspaceHoveredIndex === index && menu.tooltip && (
                                                 <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white border border-gray-700 rounded px-3 py-2 flex items-center gap-3 shadow-lg z-20 min-w-max">
                                                 <span className="text-white text-xs whitespace-nowrap">{menu.tooltip.text}</span>
                                                 <span className="flex items-center gap-1">
                                                     <span className="bg-gray-800 border border-gray-600 rounded px-1 text-xs text-gray-300">{menu.tooltip.shortcut[0]}</span>
                                                     <span className="text-gray-400 text-xs">{menu.tooltip.shortcut[1]}</span>
                                                     <span className="bg-gray-800 border border-gray-600 rounded px-1 text-xs text-gray-100">{menu.tooltip.shortcut[2]}</span>
                                                 </span>
                                             </div>
                                            )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Your Teams Section */}
                    <div className="pl-2 mt-1 py-1 text-white/50 px-1 group">
                        {/* Your teams header */}
                        <div
                            onClick={() => setTeamSectionCollapsed((c) => !c)}
                            className="w-full flex gap-1 items-center hover:bg-gray-800 hover:rounded-md py-1 cursor-pointer select-none"
                        >
                            <h4 className="text-sm text-white/50">Your teams</h4>
                            {teamSectionCollapsed ? <FaCaretRight className="text-xs"/> : <FaCaretDown className="text-xs"/>}
                        </div>
                        {/* Team row, only visible if section is expanded */}
                        {!teamSectionCollapsed && (
                            <>
                            <div
                                onClick={() => setTeamMenuCollapsed((c) => !c)}
                                className="w-full flex justify-between gap-1 items-center hover:bg-gray-800 hover:rounded-md py-1 cursor-pointer select-none"
                            >
                                <div className="flex items-center gap-2">
                                    <p><PiDotsSixVerticalBold/></p>
                                    <span className="bg-fuchsia-700 rounded text-white flex items-center justify-center  text-lg font-bold">{/* Avatar */}<IoPersonCircleOutline size={20} /></span>
                                    <h4 className="text-sm text-white font-medium">Sridhar Stephen</h4>
                                    {teamMenuCollapsed ? <FaCaretRight className="text-xs"/> : <FaCaretDown className="text-xs"/>}
                                </div>
                                <div>
                                    <CgMoreAlt className="text-white/50 hover:text-white text-lg" />
                                </div>
                            </div>
                            {/* Team menu, only visible if team row is expanded */}
                            {!teamMenuCollapsed && (
                                <div className="flex flex-col gap-1 mt-1">
                                    {yourTeam.map((menu, index) => (
                                        <div key={menu.name} className="relative">
                                            <Link
                                                to={menu.to}
                                                className={`flex items-center gap-2 p-2 rounded group transition-colors duration-150 ${teamHoveredIndex === index ? "bg-gray-800" : ""}`}
                                                onMouseOver={() => setTeamHoveredIndex(index)}
                                                onMouseOut={() => setTeamHoveredIndex(null)}
                                            >
                                                <span className={`${teamHoveredIndex === index ? "text-white" : "text-gray-500"}`}>{menu.icon}</span>
                                                <span className="text-sm text-white/80 cursor-default">{menu.name}</span>
                                            </Link>
                                            {/* Tooltip for Projects and Views */}
                                            {teamHoveredIndex === index && menu.tooltip && (
                                                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-900 border border-gray-700 rounded px-3 py-2 flex items-center gap-3 shadow-lg z-20 min-w-max">
                                                    <span className="text-white text-xs whitespace-nowrap">{menu.tooltip.text}</span>
                                                    <span className="flex items-center gap-1">
                                                        <span className="bg-gray-800 border border-gray-600 rounded px-1 text-xs text-gray-300">{menu.tooltip.shortcut[0]}</span>
                                                        <span className="text-gray-400 text-xs">{menu.tooltip.shortcut[1]}</span>
                                                        <span className="bg-gray-800 border border-gray-600 rounded px-1 text-xs text-gray-300">{menu.tooltip.shortcut[2]}</span>
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                            </>
                        )}
                    </div>

                    <DropSection menus={tryMenus} heading="Try"></DropSection>
                </div>
                <div className="pl-2 pb-1">
                    <GoQuestion size={30} className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-full"/>
                </div>
            </div>
            {/* Resize handle */}
      <div
        onMouseDown={onMouseDown}
        className="absolute top-0 right-0 h-full cursor-col-resize z-20"
        style={{ width: 6 }}
      />
    </div>
    )
}

export default SideBar
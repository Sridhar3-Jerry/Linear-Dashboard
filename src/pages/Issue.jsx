import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { BsCircle } from "react-icons/bs";
import { useState } from "react";

function Issue(){
    const steps = [
        "Welcome to Linear 👋",
        "3 ways to navigate Linear: Command menu, keyboard or mouse",
        "Connect to Slack",
        "Connect GitHub or GitLab",
        "Customize settings",
        "Use Cycles to focus work over n–weeks",
        "Use Projects to organize work for features or releases",
        "Invite your teammates",
        "Next steps",
      ];
      
    const [checkedIndexes, setCheckedIndexes] = useState([]);

    const handleCheckboxChange = (index) => {
        setCheckedIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return(
        <div>
            {steps.map((step,index)=>{
                const isChecked = checkedIndexes.includes(index);
                return(
                    <div
                        key={index}
                        className={`flex justify-between py-3 text-textColor text-sm group transition-colors
                            ${isChecked ? "bg-issue" : "hover:bg-menuHover"}
                        `}
                    >
                        <div className="flex items-center gap-2 ">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleCheckboxChange(index)}
                                className={`w-3 h-3 appearance-none bg-black border border-white rounded-sm
                                    checked:bg-Mbutton checked:border-Mbutton focus:outline-none
                                    ${isChecked ? "visible border-Mbutton" : "invisible group-hover:visible group-hover:border-Mbutton"}
                                `}
                            />
                            <MdOutlineSignalCellularAlt size={20} className="hover:text-white"/>
                            <p>SRI-{index+1}</p>
                            <BsCircle size={14} className="text-white font-bold"/>
                            <p className="text-white">{step}</p>
                        </div>
                        <div className="flex items-center px-6 gap-3">
                            <p>Jul 10</p>
                            <p className=""><IoPersonSharp className="border border-dotted rounded-full"/></p>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}
export default Issue;
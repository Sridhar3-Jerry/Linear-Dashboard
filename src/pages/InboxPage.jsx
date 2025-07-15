import { IoFilterSharp } from "react-icons/io5";
import { LuSlidersHorizontal } from "react-icons/lu";
import { Inbox  } from "lucide-react";

function InboxPage(){
    return(
        <div className="flex h-full">
            <div className=" w-1/6  border-r border-white/10 ">
                <div className="flex items-center border-b border-white/10 p-1 justify-between">
                    <p className="text-white h-full text-sm pl-2">Inbox</p>

                    <div className="flex items-center gap-2">
                        <p className="hover:text-white text-white/50 hover:bg-gray-800 p-1 rounded "><IoFilterSharp /></p>
                        <p className="hover:text-white text-white/50 hover:bg-gray-800 p-1 rounded"><LuSlidersHorizontal /></p>
                    </div>
                </div>
                    
            </div>
            <div className=" w-5/6 flex items-center justify-center flex-col">
                <Inbox className="text-gray-300" size={150}/>
                <p className="text-white/50">No notifications</p>
            </div>
        </div>
    )
}
export default InboxPage;
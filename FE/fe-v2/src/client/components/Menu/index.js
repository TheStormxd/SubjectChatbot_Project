import { MenuOutlined, PlusOutlined, MessageOutlined, QuestionCircleOutlined, SettingOutlined, ClockCircleOutlined } from "@ant-design/icons";

function Menu({ collapsed, handleCollapsed }) {

    return (
        <>
            <div className="min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] py-[30px] px-[20px] w-full animate-fadeIn">

                <div className="">
                    <MenuOutlined onClick={handleCollapsed} className="text-xl p-2 rounded-md mb-10 transition duration-300 hover:bg-slate-300 cursor-pointer mb-3" />
                    
                    <div className="text-lg w-[80%] transition duration-300 hover:bg-slate-300 font-normal p-2 rounded-2xl bg-slate-200 cursor-pointer flex justify-center items-center gap-2">
                        <PlusOutlined className=""/> {collapsed ? <p className=""></p> : <p className="">New chat</p>}
                    </div>

                    <div className="flex flex-col" >
                        {collapsed ? (
                            <div className="flex gap-3 mt-8 mb-5 animate-fadeIn"><ClockCircleOutlined /> </div>
                            
                        ) : (
                            <div className="flex gap-3 mt-8 mb-5 animate-fadeIn">
                                <ClockCircleOutlined /> <p className="text-black font-normal text-lg overflow-x-auto">Recent</p>
                            </div>
                        )}

                        <div className="h-[470px] overflow-y-auto">
                            {[...Array(1)].map((_, idx) => (
                                <div key={idx} className="flex p-2 items-center gap-2 transition duration-300 rounded-lg cursor-pointer hover:bg-slate-200">
                                    <MessageOutlined className="text-lg" /> {collapsed ? <p></p> : <p>Chat bal lfas ...</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col">
                    <div className="flex p-2 items-center gap-2 transition duration-300 rounded-lg cursor-pointer hover:bg-slate-200">
                        <QuestionCircleOutlined className="pr-1" /> {collapsed ? <p></p> : <p>Help</p>}
                    </div>
                    <div className="flex p-2 items-center gap-2 transition duration-300 rounded-lg cursor-pointer hover:bg-slate-200">
                        <SettingOutlined className="pr-1" /> {collapsed ? <p></p> : <p>Settings</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;

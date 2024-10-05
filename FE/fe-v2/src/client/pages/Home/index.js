import { Form, Image, Input } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import {CompassOutlined,BulbOutlined,MessageOutlined,CodeOutlined,SendOutlined,UserOutlined} from "@ant-design/icons"
import { VscAccount } from "react-icons/vsc";
function Home() {

    const stateAuth = useSelector(state=>state.UserReducer)



    return (
        <div className='bg-white min-h-full pb-3 relative'>
            <div className='flex items-center justify-between  p-[20px] text-[#585858]'>
                <p className='text-[22px]'>Niko-Bot</p>
                <Image 
                    src='https://smilemedia.vn/wp-content/uploads/2022/09/cach-chup-hinh-the-dep.jpeg' 
                    width={45} // Adjust the width and height here
                    height={45} 
                     // Disable image preview on click if not needed
                     className="rounded-[50%]"
                />
            </div>

            <div className='m-auto max-w-[900px]'>
                {/* <div className='my-[50px] mx-[0px] text-[50px] font-medium p-[20px] text-[#c4c7c5] '>
                    <p className='uppercase' style={{
                background: 'linear-gradient(16deg, #4b90ff, #ff5546)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
                    }} >Hello, {stateAuth.userInfo.fullName}</p>
                    <p>How can I help you today?</p>
                </div> // greet
        

                <div className='' 
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                        gap: '16px',
                        padding:"20px"
                    }}
                >
                    <div className='h-[200px] p-[15px] bg-slate-200 relative rounded-lg cursor-pointer hover:bg-slate-300 transition duration-300'>
                        <p className='text-[15px] text-[#585858]'>Cau hoi so 1</p>
                        <CompassOutlined className='w-[35px] text-[20px] p-[5px] absolute rounded-3xl bottom-[10px] right-[10px] '/>
                    </div>
                    <div className='h-[200px] p-[15px] bg-slate-200 relative rounded-lg cursor-pointer text-[20px] hover:bg-slate-300 transition duration-300'>
                        <p className='text-[15px] text-[#585858]'>Cau hoi so 1</p>
                        <BulbOutlined className='w-[35px] p-[5px] absolute rounded-3xl bottom-[10px] right-[10px] text-[20px]'/>
                    </div>
                    <div className='h-[200px] p-[15px] bg-slate-200 relative rounded-lg cursor-pointer hover:bg-slate-300 transition duration-300'>
                        <p className='text-[15px] text-[#585858]'>Cau hoi so 1</p>
                        <MessageOutlined className='w-[35px] p-[5px] absolute rounded-3xl bottom-[10px] right-[10px] text-[20px]'/>
                    </div>
                    <div className='h-[200px] p-[15px] bg-slate-200 relative rounded-lg cursor-pointer hover:bg-slate-300 transition duration-300'>
                        <p className='text-[15px] text-[#585858]'>Cau hoi so 1</p>
                        <CodeOutlined className='w-[35px] p-[5px] absolute rounded-3xl bottom-[10px] right-[10px] text-[20px]'/>
                    </div>
                </div> */}

                <div className='py-0 px-[5%] max-h-[70vh] overflow-y-scroll '>
                    {/* <div className='my-[40px] mx-0 flex items-center gap-[10px] p-2 bg-slate-200 rounded-md'>
                        <UserOutlined className='rounded-[50%] text-base '/>
                        <p>I forgot the code and password for the HCI course, provide them to me again. </p>
                    </div>

                    <div className='flex items-start gap-[10px] '>
                        <VscAccount size={30}/>
                        <p dangerouslySetInnerHTML={{ __html: `
        If you've forgotten the code and password for the HCI (Human-Computer Interaction) course, no worries! Below are the details you need to access the course:<br>

        <strong>Course Code:</strong> S2024_62FIT3HCI<br>
        <strong>Course Password:</strong> S2024%HCI<br>

        Please make sure to keep this information handy for future reference. If you encounter any issues or need further assistance, feel free to reach out!

        <script>
            // Your script here
            console.log("HCI Course Details displayed.");
        </script>
    `}} /> */}

                    {/* </div> */}

                    <div className='my-[40px] mx-0 flex items-center gap-[10px] p-2 bg-slate-200 rounded-md'>
                        <UserOutlined className='rounded-[50%] text-base '/>
                        <p>tell me Introduction to the topic of HCI subject

</p>
                    </div>

                    <div className='flex items-start gap-[10px] '>
    <VscAccount size={30}/>
    <p dangerouslySetInnerHTML={{ __html: `
        <strong>Course Schedule for Human-Computer Interaction (HCI)</strong><br>
        The course schedule for the Human-Computer Interaction (HCI) class outlines the topics to be covered over the duration of the course. Each week focuses on a different aspect of HCI, enabling students to build a comprehensive understanding of the subject. Here’s a breakdown of the weekly topics:<br>
        <table>
            <thead>
                <tr>
                    <th>Week</th>
                    <th>Topic</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>Introduction & Motivation</td></tr>
                <tr><td>2</td><td>Cultural Factors in HCI Design</td></tr>
                <tr><td>3</td><td>Computer Revolution and Trends Forecast to 2050</td></tr>
                <tr><td>4</td><td>Prototyping</td></tr>
                <tr><td>5</td><td>Usability Paradigms and Principles</td></tr>
                <tr><td>6</td><td>Design Evaluation</td></tr>
                <tr><td>7</td><td>Emotional Design</td></tr>
                <tr><td>8</td><td>UI & UX</td></tr>
                <tr><td>9</td><td>Midterm Test</td></tr>
                <tr><td>10</td><td>Adaptive and Personalized Interfaces</td></tr>
                <tr><td>11</td><td>Interactive Data Exploration, Presentation, and Natural UI</td></tr>
                <tr><td>12</td><td>Psychology in Design</td></tr>
                <tr><td>13</td><td>Robots, Avatars, and Virtual Humans</td></tr>
                <tr><td>14</td><td>Backup & Final Project Submission</td></tr>
            </tbody>
        </table>
        <strong>Overview of Topics</strong><br>
        1. <strong>Introduction & Motivation</strong>: This week will introduce the fundamentals of HCI, its significance, and the motivation behind studying the interaction between humans and computers.<br>
        2. <strong>Cultural Factors in HCI Design</strong>: Exploring how cultural differences impact design decisions and user interactions.<br>
        3. <strong>Computer Revolution and Trends Forecast to 2050</strong>: Understanding the historical context of computer technology and predicting future trends.<br>
        4. <strong>Prototyping</strong>: Learning the techniques and tools for creating prototypes of interactive systems.<br>
        5. <strong>Usability Paradigms and Principles</strong>: Examining the principles that define usability and how they apply to HCI.<br>
        6. <strong>Design Evaluation</strong>: Techniques for evaluating the effectiveness of user interfaces and interaction designs.<br>
        7. <strong>Emotional Design</strong>: Investigating how emotional responses can influence user experience and interaction design.<br>
        8. <strong>UI & UX</strong>: Understanding the differences and relationships between User Interface (UI) and User Experience (UX) design.<br>
        9. <strong>Midterm Test</strong>: An assessment covering the material learned in the first half of the course.<br>
        10. <strong>Adaptive and Personalized Interfaces</strong>: Studying how interfaces can adapt to individual user needs and preferences.<br>
        11. <strong>Interactive Data Exploration, Presentation, and Natural UI</strong>: Focusing on innovative ways to interact with data and how natural user interfaces can enhance usability.<br>
        12. <strong>Psychology in Design</strong>: Exploring psychological principles that inform design decisions and user interactions.<br>
        13. <strong>Robots, Avatars, and Virtual Humans</strong>: Analyzing the role of robots and virtual agents in HCI and how they affect user experience.<br>
        14. <strong>Backup & Final Project Submission</strong>: Preparing for the final project submission and ensuring all requirements are met.<br>
        This structured approach allows students to progressively deepen their understanding of HCI and develop practical skills for designing user-centered systems.
    ` }} />
</div>




                    
                </div>

                <div className='absolute bottom-0 w-full max-w-[900px] py-0 px-[20px] m-auto'>
                    
                        {/* <Form className='flex center justify-between gap-[0px] bg-[#f0f4f9] rounded-[50px] py-[10px] px-[20px] '>
                            <Form.Item name="search" className='flex-1 mb-0 h-full'>
                                <Input className='h-full bg-transparent border-none outline-none p-[8px] text-[16px] hover:bg-transparent focus:bg-transparent focus:border-none focus:outline-none' placeholder='Enter a prompt here'/>

                                
                            </Form.Item>
                            <Form.Item className='flex items-center'>
                                <button>
                          
                                    <SendOutlined className='text-2xl cursor-pointer'/>
                                </button>
                            </Form.Item>
                        </Form> */}

                    <Form className='flex items-center justify-between gap-[5px] bg-[#f0f4f9] rounded-[50px] py-[10px] mb-4 px-[20px]'>
                        <Form.Item name="search" className='flex-1 mb-0 h-full '>
                            <Input className='h-full bg-transparent border-none outline-none focus:outline-none focus:border-none focus:bg-transparent  hover:outline-none hover:border-none hover:bg-transparent' placeholder='Enter a prompt here'/>
                        </Form.Item>
                        <Form.Item className='flex items-center mb-0'>
                            <button>
                                <SendOutlined className='text-2xl cursor-pointer'/>
                            </button>
                        </Form.Item>
                    </Form>

                    <p className='text-[13px] my-[15px] mx-auto text-center font-light'>
                    Niko-Bot can make mistakes. Please verify important information.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Home;
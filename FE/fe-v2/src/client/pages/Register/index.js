import React, { useState } from 'react';
import {Form, Input} from "antd"
import UploadImg from '../../components/Upload';
// import { IoIosCloseCircle } from "react-icons/io";


function Register() {

  const [imageFile, setImageFile] = useState(null);  // State for image file
    const handleImageSelect = (file) => {
        setImageFile(file);  // Save the image file when selected
    };
    const DeleteImg = ()=>{
        console.log(imageFile);
        setImageFile(null)
    }


    return (
        <>
    
            <div className='mt-5'>
                <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4'>
                    <h3>Welcome to Chat app!</h3>
                    <Form
                    layout='vertical'
                    className='mt-5'
                    
                    >
                        <Form.Item name="fullName" label="Name :" className=''>
                            <Input 
                                placeholder='enter your name'
                                className='bg-slate-100 px-2 py-1'

                            />

                        </Form.Item>

                        <Form.Item name="email" label="Email :" className=''>
                            <Input 
                                placeholder='enter your name'
                                className='bg-slate-100 px-2 py-1'

                            />

                        </Form.Item>

                        <Form.Item name="password" label="Password :" className=''>
                            <Input 
                                placeholder='enter your name'
                                className='bg-slate-100 px-2 py-1'

                            />

                        </Form.Item>

                        <Form.Item 
                            name="avatar" 
                            label={
                                <span className=''>Avatar :</span> // Thiết lập class cho label
                            } 
                            className=''
                        >
                            <div className='flex items-start'>
                                <UploadImg onImageSelect={handleImageSelect} className="hidden"/>
                                {imageFile && (
                                    <>
                                        <button></button>
                                    </>
                                )}
                            </div>
                            
                        </Form.Item>
                        

                    </Form>
                </div>
            </div>
        </>
    );
}

export default Register;
import React, { useState } from 'react';
import Typography from '../../components/typography/typography';
import TextBox from '../../components/textbox/textbox';

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Button from '../../components/button/button';

import { useNavigate } from 'react-router-dom';


export default function SigninPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };
    return (
        <div className='w-full min-h-screen bg-gray-300 py-8 px-4 overflow-y-auto'>
            <form className='bg-white pt-8 px-8 space-y-2 rounded-md shadow-md max-w-2xl mx-auto' onSubmit={handleSubmit}>
                <Typography>Welcome</Typography>
                <Typography variant='h2'>Sigin to continue</Typography>
                <div className='py-4 space-y-2'>
                    <TextBox
                        id={"sign-in-email"}
                        name={"sign-in-email"}
                        type={"email"}
                        placeholder={"Email Address"}
                        value={formData?.email}
                        icon={<MdOutlineAlternateEmail />}
                        onChange={value => setFormData({ ...formData, email: value })}
                        required
                    />
                    <TextBox
                        id={"sign-in-password"}
                        name={"sign-in-password"}
                        type={"password"}
                        placeholder={"Password"}
                        value={formData?.password}
                        icon={<FaLock />}
                        onChange={value => setFormData({ ...formData, password: value })}
                        required
                    />

                    <div className='flex justify-end'>
                        <h3 className='text-blue-500 text-sm cursor-pointer'>Forgot Password?</h3>
                    </div>
                    <div className='py-4'>
                        <Button type={"submit"}>Signin</Button>
                    </div>
                    <div className='pb-3 flex justify-center'>
                        <h3 className='text-gray-500 text-sm'>Didn't have an account?
                            <span className='text-blue-500 ml-1 font-semibold cursor-pointer'
                                onClick={() => navigate('/sign-up')}
                            >Signup</span>
                        </h3>
                    </div>
                </div>
            </form>

            <div className='flex justify-center py-4 text-sm'>
                <p className='text-gray-700 text-center text-md'>Powerd By
                    <span className='font-bold text-gray-800 ml-2 text-lg'>Nutech</span></p>
            </div>
        </div>
    );
}

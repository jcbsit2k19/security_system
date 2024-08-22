import React, { useState } from 'react';
import Typography from '../../components/typography/typography';
import TextBox from '../../components/textbox/textbox';
import { useNavigate } from 'react-router-dom';

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { BsFiletypeKey } from "react-icons/bs";


import Button from '../../components/button/button';


export default function SignupPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    return (
        <div className='w-full min-h-screen bg-gray-300 py-8 px-4 overflow-y-auto'>
            <form className='bg-white pt-8 px-8 space-y-2 rounded-md shadow-md max-w-2xl mx-auto'>
                <Typography>Welcome</Typography>
                <Typography variant='h2'>Signup your account</Typography>
                <div className='py-4 space-y-2'>
                    <TextBox
                        id={"sign-up-name"}
                        name={"sign-up-name"}
                        type={"email"}
                        placeholder={"Name"}
                        value={formData?.name}
                        icon={<PiIdentificationBadgeLight />}
                        onChange={value => setFormData({ ...formData, name: value })}
                        required
                    />
                    <TextBox
                        id={"sign-up-email"}
                        name={"sign-up-email"}
                        type={"email"}
                        placeholder={"Email Address"}
                        value={formData?.email}
                        icon={<MdOutlineAlternateEmail />}
                        onChange={value => setFormData({ ...formData, email: value })}
                        required
                    />
                    <TextBox
                        id={"sign-up-password"}
                        name={"sign-up-password"}
                        type={"password"}
                        placeholder={"Password"}
                        value={formData?.password}
                        icon={<FaLock />}
                        onChange={value => setFormData({ ...formData, password: value })}
                        required
                    />
                    <TextBox
                        id={"sign-up-confirmpassword"}
                        name={"sign-in-confirmpassword"}
                        type={"password"}
                        placeholder={"Confirm Password"}
                        value={formData?.confimpassword}
                        icon={<FaLock />}
                        onChange={value => setFormData({ ...formData, confimpassword: value })}
                        required
                    />
                    <TextBox
                        id={"sign-up-regkey"}
                        name={"sign-in-regkey"}
                        type={"text"}
                        placeholder={"Registration Key"}
                        value={formData?.regKey}
                        icon={<BsFiletypeKey />}
                        onChange={value => setFormData({ ...formData, regKey: value })}
                        required
                    />
                    <div className='py-4'>
                        <Button type={"submit"}>Sign Up</Button>
                    </div>
                    <div className='pb-3 flex justify-center'>
                        <h3 className='text-gray-500 text-sm'>Already have an account?
                            <span className='text-blue-500 ml-1 font-semibold cursor-pointer'
                                onClick={() => navigate('/')}
                            >Signin</span>
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

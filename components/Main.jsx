import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center ">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        LET&#39;S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I&#39;m{' '}
                        <span className="text-[#5651e5]">Beluga</span>{' '}
                    </h1>
                    <h1 className="py-4 text-gray-700">
                        A Front-End Web Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto ">
                        I'm a front-end web developer interested in new
                        technology. Currently, I'm focused on building
                        responsive front-end web applications and using API
                        while learning back-end technologies
                    </p>
                    <div className="flex items-center justify-between max-w-[350px] m-auto py-4 ">
                        <a href="https://www.instagram.com/halay.x/" target="_blank" rel="noreferrer">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-[#5651e5] hover:text-white duration-300">
                                <AiFillInstagram size="20" />
                            </div>
                        </a>

                        <a href="https://github.com/Beluga-Whale" target="_blank" rel="noreferrer">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-[#5651e5] hover:text-white duration-300">
                                <AiFillGithub size="20" />
                            </div>
                        </a>

                        <a href="https://www.facebook.com/Thanathat159/" target="_blank" rel="noreferrer">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-[#5651e5] hover:text-white duration-300">
                                <AiFillFacebook size="20" />
                            </div>
                        </a>

                        <a href='mailto:thanathat.js@gmail.com' target="_blank" rel="noreferrer">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-[#5651e5] hover:text-white duration-300">
                                <AiOutlineMail size="20" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

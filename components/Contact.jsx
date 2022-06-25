import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
// 1:31:41 Minute
const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen ">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:m-16 gap-8">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ">
                        <div className="lg:p-8 h-full">
                            <div>
                                <img
                                    className="rounded-xl hover:scale-105 ease-in duration-300 "
                                    src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                                    alt="/"
                                />
                            </div>
                            <div>
                                <h2 className="py-2">Name here </h2>
                                <p>Front-End Developer </p>
                                <p className="py-4">
                                    I am available for freelance or full-time
                                    positions. Contact me and let's talk.
                                </p>
                            </div>
                            <div>
                                <p className="uppercase pt-8">
                                    Connect With Me
                                </p>
                                <div className="flex items-center max-w-[500px]  justify-between py-4">
                                    <a
                                        href="https://www.instagram.com/halay.x/"
                                        target="_blank"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-[#5651e5] hover:text-white duration-300">
                                            <AiFillInstagram size="20" />
                                        </div>
                                    </a>

                                    <a
                                        href="https://github.com/Beluga-Whale"
                                        target="_blank"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-[#5651e5] hover:text-white duration-300">
                                            <AiFillGithub size="20" />
                                        </div>
                                    </a>

                                    <a
                                        href="https://www.facebook.com/Thanathat159/"
                                        target="_blank"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-[#5651e5] hover:text-white duration-300">
                                            <AiFillFacebook size="20" />
                                        </div>
                                    </a>

                                    <a href="mailto:thanathat.js@gmail.com">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-[#5651e5] hover:text-white duration-300">
                                            <AiOutlineMail size="20" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12 ">
                    <Link href="/">
                        <di
                            className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in "
                            v
                        >
                            <HiOutlineChevronDoubleUp
                                className="text-[#5651e5]"
                                size={30}
                            />
                        </di>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;

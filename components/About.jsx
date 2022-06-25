import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
    return (
        <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5615e5]">
                        About
                    </p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        //I am new developer but am not normal developer
                    </p>
                    <p className="py-2 text-gray-600">
                        In 2021, I found myself interested in front-end website
                        development. Then I started learning HTML, CSS only.
                        Then I started to look at the designs from Figma to
                        improve my CSS skills. I started to love coding more and
                        realized that what I was doing was not enough. Be a
                        Front-end Developer
                    </p>
                    <p className="py-2 text-gray-600">
                        Then I started studying More JavaScript to make the
                        website better. Then I started writing React Js and
                        began studying various projects from Youtube to develop
                        myself. And also like to learn new
                    </p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">
                        Check out some of my latest projects.
                    </p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image src={AboutImg} className="rounded-xl" alt="/" />
                </div>
            </div>
        </div>
    );
};

export default About;

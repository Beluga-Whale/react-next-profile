import React from 'react';
import Image from 'next/image';
import realestateImg from '../public/assets/projects/realestate.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const realestate = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative ">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
                <Image
                    className="absolute z-0"
                    layout="fill"
                    objectFit="cover"
                    src={realestateImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-p[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
                    <h2 className="py-2">Real Estate</h2>
                    <h3>Next Js / Chakra UI / Rapid API </h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        This app was built by React NextJs, Rapid API and is styled with Tailwind CSS. User able to search property range prices for Buy
                        or Rent. You can view the information of the property
                    </p>
                    <a
                        href="https://react-next-realestate-six.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                    </a>
                    <a
                        href="https://github.com/Beluga-Whale/react-next-realestate"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4">Code</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 ">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Technologies
                        </p>
                        <div className="gird grid-cols-3 md:gird-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                NextJS
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                Chakra UI
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                Javascript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                Rapid API
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default realestate;

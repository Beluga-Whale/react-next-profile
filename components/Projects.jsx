import React from 'react';
import realestateImg from '../public/assets/projects/realestate.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div id='projects' className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16 ">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Project
                </p>
                <h2 className="py-4">What I've Build</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title="ContactProperty Finder"
                        backgroundImg={realestateImg}
                        projectUrl="/realestate"
                    />
                    <ProjectItem
                        title="Crypto App"
                        backgroundImg={cryptoImg}
                        projectUrl="/property"
                    />
                    <ProjectItem
                        title="Property Finder"
                        backgroundImg={netflixImg}
                        projectUrl="/property"
                    />
                    <ProjectItem
                        title="Property Finder"
                        backgroundImg={twitchImg}
                        projectUrl="/twitchImg"
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default Projects;

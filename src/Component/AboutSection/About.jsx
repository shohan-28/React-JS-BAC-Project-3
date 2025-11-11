import React from 'react';
import AboutLeft from "../../assets/images/about_left.png";
import About1 from "../../assets/images/about-1.png";
import About2 from "../../assets/images/about-2.png";
import About3 from "../../assets/images/about-3.png";

const About = () => {
    return (
        <div>
            <div className='flex justify-between items-center gap-6'>
                <img src={AboutLeft} alt="" />
                <div className='space-y-10'>
                    <p className='text-black text-3xl'>Welcome to Nest</p>
                    <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.</p>
                    <p className='text-base text-gray-400'>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
                        interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
                        orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare
                        lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.</p>

                    <div className='flex items-center gap-2'>
                        <img src={About1} alt="" />
                        <img src={About2} alt="" />
                        <img src={About3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
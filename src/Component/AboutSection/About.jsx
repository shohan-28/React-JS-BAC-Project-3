import React from 'react';
import AboutLeft from "../../assets/images/about_left.png";
import About1 from "../../assets/images/about-1.png";
import About2 from "../../assets/images/about-2.png";
import About3 from "../../assets/images/about-3.png";

import Icon1 from "../../assets/images/icon-1.png";
import Icon2 from "../../assets/images/icon-2.png";
import Icon3 from "../../assets/images/icon-3.png";
import Icon4 from "../../assets/images/icon-4.png";
import Icon5 from "../../assets/images/icon-5.png";
import Icon6 from "../../assets/images/icon-6.png";

import About5 from "../../assets/images/about-5.png";

import Main from "../../assets/images/Main.png";
import Main1 from "../../assets/images/Main-1.png";

import AboutBottom from "../../assets/images/about_bottom.png";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const About = () => {
    return (
        <div className='pt-10 pb-10 w-8/12 mx-auto'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 items-center'>
                <img src={AboutLeft} alt="" />
                <div className='space-y-10 '>
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

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                        <img src={About1} alt="" />
                        <img src={About2} alt="" />
                        <img src={About3} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <p className='text-2xl text-black flex justify-center items-center p-10 font-bold'>What We Provide?</p>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 pt-10 pb-10'>
                <div className='flex flex-col justify-center items-center space-y-6 shadow p-4 rounded-md'>
                    <img src={Icon1} alt="" />
                    <p className='text-xl text-black'>Best Prices & Offers</p>
                    <p className='text-gray-500 text-base text-center'>There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                        alteration in some form</p>
                    <button className='text-green-400'>Read more</button>
                </div>

                <div className='flex flex-col justify-center items-center space-y-6 shadow p-4 rounded-md'>
                    <img src={Icon2} alt="" />
                    <p className='text-xl text-black'>Wide Assortment</p>
                    <p className='text-gray-500 text-base text-center'>There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                        alteration in some form</p>
                    <button className='text-green-400'>Read more</button>
                </div>

                <div className='flex flex-col justify-center items-center space-y-6 shadow p-4 rounded-md'>
                    <img src={Icon3} alt="" />
                    <p className='text-xl text-black'>Free Delivery</p>
                    <p className='text-gray-500 text-base text-center'>There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                        alteration in some form</p>
                    <button className='text-green-400'>Read more</button>
                </div>

                <div className='flex flex-col justify-center items-center space-y-6 shadow p-4 rounded-md'>
                    <img src={Icon4} alt="" />
                    <p className='text-xl text-black'>Easy Returns</p>
                    <p className='text-gray-500 text-base text-center'>There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                        alteration in some form</p>
                    <button className='text-green-400'>Read more</button>
                </div>

                <div className='flex flex-col justify-center items-center space-y-6 shadow p-4 rounded-md'>
                    <img src={Icon5} alt="" />
                    <p className='text-xl text-black'>100% Satisfaction</p>
                    <p className='text-gray-500 text-base text-center'>There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                        alteration in some form</p>
                    <button className='text-green-400'>Read more</button>
                </div>

                <div className='flex flex-col justify-center items-center space-y-6 shadow p-4 rounded-md'>
                    <img src={Icon6} alt="" />
                    <p className='text-xl text-black'>Great Daily Deal</p>
                    <p className='text-gray-500 text-base text-center'>There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                        alteration in some form</p>
                    <button className='text-green-400'>Read more</button>
                </div>
            </div>

            <div>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-1 pt-5 pb-5 items-center'>
                    <img src={About5} alt="" />
                    <div className='space-y-8'>
                        <p className='text-gray-400 text-xl'>Our performance</p>
                        <p className='text-black text-6xl font-bold'>Your Partner for e-
                            commerce grocery
                            solution</p>
                        <p className='text-gray-400 text-base'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto</p>
                        <p className='text-gray-400 text-base'>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 pt-5 pb-5'>
                    <div className='space-y-5'>
                        <p className='text-black text-2xl font-bold'>Who we are</p>
                        <p className='text-gray-400'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                            mattis enim ut tellus eros donec ac odio orci ultrices in.
                            ellus eros donec ac odio orci ultrices in.</p>
                    </div>
                    <div className='space-y-5'>
                        <p className='text-black text-2xl font-bold'>Our history</p>
                        <p className='text-gray-400'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                            mattis enim ut tellus eros donec ac odio orci ultrices in.
                            ellus eros donec ac odio orci ultrices in.</p>
                    </div>
                    <div className='space-y-5'>
                        <p className='text-black text-2xl font-bold'>Our mission</p>
                        <p className='text-gray-400'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                            mattis enim ut tellus eros donec ac odio orci ultrices in. ellus
                            eros donec ac odio orci ultrices in.</p>
                    </div>
                </div>
            </div>

            <div className='pt-5 py-5 text-center'>
                <p className='text-4xl font-bold text-black'>Our Team</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='hidden lg:block md:block space-y-4 pb-5'>
                    <p className='text-green-400'>Our Team</p>
                    <p className='text-black text-5xl'>Meet Our Expert
                        Team</p>
                    <p className='text-base text-gray-400'>Proin ullamcorper pretium orci. Donec necscele risque leo.
                        Nam massa dolor imperdiet neccon sequata congue idsem.
                        Maecenas malesuada faucibus finibus.</p>
                    <p className='text-base text-gray-400'>Proin ullamcorper pretium orci. Donec necscele risque leo.
                        Nam massa dolor imperdiet neccon sequata congue idsem.
                        Maecenas malesuada faucibus finibus.</p>
                    <button className='px-5 py-1 rounded-sm bg-green-400 text-white'>View All Members</button>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2  gap-2'>
                    <div className="relative">
                        <img src={Main} alt="" className="w-full h-full" />
                        <div className="absolute top-65 left-1/2 transform -translate-x-1/2 w-65">
                            <div className="bg-white p-15 py-6 rounded-lg text-center w-full space-y-2 shadow-md">
                                <p className="text-black font-bold text-base  w-full">H. Merinda</p>
                                <p className="text-gray-400 text-base">CEO & Co-Founder</p>
                                <p className='text-base text-green-500 flex space-x-2 items-center justify-center'><FaFacebookF />
                                <FaTwitter />
                                <FaInstagram />
                                <FaYoutube />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img src={Main1} alt="" className="w-full h-full" />
                        <div className="absolute top-65 left-1/2 transform -translate-x-1/2 w-65">
                            <div className="bg-white p-15 py-6 rounded-lg text-center w-full space-y-2 shadow-md">
                                <p className="text-black font-bold text-base  w-full">H. Merinda</p>
                                <p className="text-gray-400 text-base">CEO & Co-Founder</p>
                                <p className='text-base text-green-500 flex space-x-2 items-center justify-center'><FaFacebookF />
                                <FaTwitter />
                                <FaInstagram />
                                <FaYoutube />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-35'>
                <img src={AboutBottom} alt="" />
            </div>
        </div>
    );
};

export default About;
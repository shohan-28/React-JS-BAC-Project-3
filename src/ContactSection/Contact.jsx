import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import image460 from "../assets/images/460.png";
import image469 from "../assets/images/469.png";

const Contact = () => {
    return (
        <div className='container mx-auto pt-5 pb-5'>

            <div>
                <p className='text-green-400 text-xl p-4'>How can help you ?</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>

                <div className='space-y-3'>
                    <p className='text-black text-6xl inter font-bold'>Let us know how
                        we can help you</p>
                    <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.</p>
                    <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:col-span-2'>
                    <div className='space-y-4'>
                        <p className='text-black text-xl font-bold'>01. Visit Feedback</p>
                        <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-black text-xl font-bold'>02. Employer Services</p>
                        <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-black text-xl font-bold'>03. Billing Inquiries</p>
                        <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-black text-xl font-bold'>04.General Inquiries</p>
                        <p className='text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className="text-sm text-gray-600 leading-relaxed py-5">
                    <p className='text-2xl text-green-500 pb-5'>Office</p>
                    <p>205 North Michigan Avenue, Suite 810</p>
                    <p>Chicago, 60601, USA</p>
                    <p>Phone: (123) 456-7890</p>
                    <p className='pb-5'>Email: contact@Evara.com</p>

                    <button className='bg-green-500 text-white px-7  rounded-md py-2 flex text-base items-center '> <IoLocationOutline className='pr-1 text-xl' /> Visit Map</button>
                </div>

                <div className="text-sm text-gray-600 leading-relaxed py-5">
                    <p className='text-2xl text-green-500 pb-5'>Studio</p>
                    <p>205 North Michigan Avenue, Suite 810</p>
                    <p>Chicago, 60601, USA</p>
                    <p>Phone: (123) 456-7890</p>
                    <p className='pb-5'>Email: contact@Evara.com</p>

                    <button className='bg-green-500 text-white px-7  rounded-md py-2 flex text-base items-center '> <IoLocationOutline className='pr-1 text-xl' /> Visit Map</button>
                </div>

                <div className="text-sm text-gray-600 leading-relaxed py-5">
                    <p className='text-2xl text-green-500 pb-5'>Shop</p>
                    <p>205 North Michigan Avenue, Suite 810</p>
                    <p>Chicago, 60601, USA</p>
                    <p>Phone: (123) 456-7890</p>
                    <p className='pb-5'>Email: contact@Evara.com</p>

                    <button className='bg-green-500 text-white px-7  rounded-md py-2 flex text-base items-center '> <IoLocationOutline className='pr-1 text-xl' /> Visit Map</button>
                </div>
            </div>

            <section className="bg-white py-16 ">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">


                    {/* Right Side: Form */}
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Drop Us a Line</h2>
                        <p className="text-sm text-gray-400 mb-6">
                            Your email address will not be published. Required fields are marked *
                        </p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name *"
                                    className="w-full border border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email *"
                                    className="w-full border border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full border border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full border border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded-md px-4 py-10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-gray-600 text-white px-6 py-4 rounded-md cursor-pointer hover:bg-blue-900 transition duration-200"
                            >
                                Send message
                            </button>
                        </form>
                    </div>

                    {/* Left Side: Image */}
                    <div className="hidden md:block">
                        <img
                            src={image460}
                            alt="Contact illustration"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </section>

            <img src={image469} alt="" />
        </div >
    );
};

export default Contact;



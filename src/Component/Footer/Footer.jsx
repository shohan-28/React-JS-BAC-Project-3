import React from "react";
import Download1 from "../../assets/images/download1.png";
import Download2 from "../../assets/images/download2.png";
import NestLogo from "../../assets/images/Nest-Logo.png";
import Payment from "../../assets/images/payment.png";

const Footer = () => {
    return (
        <footer className=" text-gray-700 pt-12 pb-8 lg:pl-2 lg:pr-8 container mx-auto">
            <div className=" grid grid-cols-1 md:grid-cols-6 gap-6">
                {/* Logo & Contact */}
                <div className="md:col-span-1 space-y-4">

                    <img src={NestLogo} alt="" />
                    <p className="text-sm">Awesome grocery store website template.</p>
                    <p className="text-sm">5171 W Campbell Ave, Kent, Utah 53127, USA</p>
                    <p className="text-sm">📞 (+91)-540-025-124553</p>
                    <p className="text-sm text-green-400">✉️ sale@Nest.com</p>
                    <p className="text-sm">🕒 10:00 - 18:00, Mon - Sat</p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                        <li>Support Center</li>
                        <li>Careers</li>
                    </ul>
                </div>

                {/* Account */}
                <div>
                    <h3 className="font-semibold mb-4">Account</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Sign In</li>
                        <li>View Cart</li>
                        <li>My Wishlist</li>
                        <li>Track My Order</li>
                        <li>Help Ticket</li>
                        <li>Shipping Details</li>
                        <li>Compare Products</li>
                    </ul>
                </div>

                {/* Corporate */}
                <div>
                    <h3 className="font-semibold mb-4">Corporate</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Become a Vendor</li>
                        <li>Affiliate Program</li>
                        <li>Farm Business</li>
                        <li>Farm Careers</li>
                        <li>Our Suppliers</li>
                        <li>Accessibility</li>
                        <li>Promotions</li>
                    </ul>
                </div>

                {/* Popular */}
                <div>
                    <h3 className="font-semibold mb-4">Popular</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Milk & Flavoured Milk</li>
                        <li>Butter and Margarine</li>
                        <li>Eggs Substitutes</li>
                        <li>Marmalades</li>
                        <li>Sour Cream and Dips</li>
                        <li>Tea & Kombucha</li>
                        <li>Cheese</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3 className="font-semibold mb-2">Install App</h3>
                        <p className="text-sm mb-4">From App Store or Google Play</p>
                        <div className="flex gap-4">
                            <img src={Download2} alt="Google Play" className="h-10" />
                            <img src={Download1} alt="App Store" className="h-10" />
                        </div>
                    </div>

                    {/* Install App & Payment */}

                    <div className=" space-y-2 pt-2">
                        <p className="w-full">Secured Payment Gateways</p>
                        <img src={Payment} alt="Payment Gateways" className="h-10" />
                    </div>
                </div>
            </div>

            

        </footer>
    );
};

export default Footer;
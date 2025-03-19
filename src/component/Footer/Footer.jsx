"use client";
import Image from "next/image";
import Link from "next/link";
import email from '@/app/assets/e.png'
import whatsapp from '@/app/assets/w.png'
import facebook from '@/app/assets/f.png'
import linkedin from '@/app/assets/l.png'
import instagram from '@/app/assets/i.png'
import twitter from '@/app/assets/t.png'
import pin from '@/app/assets/p.png'
import logo from '@/app/assets/logo.png'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Social media icons

const Footer = () => {
    return (
        <footer className=" text-white pt-12 mt-20  border-t   border-[#e1e4ed26]">
            <div className="  ">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 px-4 py-10">
                    {/* logo*/}
                    <div className="flex flex-col gap-4 lg:col-span-2 w-3/5">
                        <Image src={logo} alt="logo" width={120} ></Image>
                        <p>We are an IT Company. We help
                            businesses to bring ideas to life
                            easily and affordably.</p>
                    </div>
                    {/* Company Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about-us" className="hover:text-gray-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-gray-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund-policy" className="hover:text-gray-300">
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Learn More Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Learn More</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/combo-offer" className="hover:text-gray-300">
                                    Combo Offer
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-industries" className="hover:text-gray-300">
                                    Service Industries
                                </Link>
                            </li>
                            <li>
                                <Link href="/envelope-apps" className="hover:text-gray-300">
                                    Envelope Apps
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact-us" className="hover:text-gray-300">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-gray-300">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-conditions" className="hover:text-gray-300">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Get in Touch Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src={email} // Replace with your email icon path
                                    alt="Email"
                                    width={24}
                                    height={24}
                                />
                                <p>support@envebyte.com</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Image
                                    src={whatsapp}// Replace with your phone icon path
                                    alt="Phone"
                                    width={24}
                                    height={24}
                                />
                                <p>+1 (647) 777 2477</p>
                            </div>
                            <div className="mt-8 flex  gap-6">
                                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={facebook}// Replace with your phone icon path
                                        alt="facebook"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={linkedin}// Replace with your phone icon path
                                        alt="linkedin"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={instagram}// Replace with your phone icon path
                                        alt="instragram"
                                        width={24}
                                        height={24}
                                    />
                                </Link>

                                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={twitter}// Replace with your phone icon path
                                        alt="twitter"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={pin}// Replace with your phone icon path
                                        alt="pinterst"
                                        width={24}
                                        height={24}
                                    />
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}


                {/* Copyright Notice */}
                <div className=" text-center border-t    border-[#e1e4ed26] py-6">
                    <p>©2025 - ENVORYTE, All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
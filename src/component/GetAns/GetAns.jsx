"use client";
import "../HeroSection/HeroSection.css";
import img1 from '@/app/assets/answer1.png';
import img2 from '@/app/assets/answer2.png';
import img3 from '@/app/assets/answer3.png';
import Image from "next/image";
import Link from "next/link";
import Portfolio from "../Portfolio/Portfolio";

const GetAns = () => {
    return (
        <div className="pt-20 answer-bg   ">
            <div id="combo-sales" className="max-w-6xl mx-auto">
                <div className="text-center mb-10 flex flex-col gap-4">
                    <h3 className="text-sm md:text-base text-[#0C89FF] tracking-widest">
                        MORE DETAILS
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0A2C8C]">
                        Get Your Answers
                    </h2>
                </div>

                {/* Answer Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 ">
                    <div className="p-6 shadow bg-[#0A2C8C] text-white backdrop-blur-md">
                        <Image src={img1} alt="Why Choose Envobyte" width={300} height={200} className="  mx-auto" />
                        <h3 className="text-2xl md:text-3xl font-semibold mt-6">Why Choose Envobyte</h3>
                        <h4 className="text-sm md:text-base font-semibold mt-2 text-[#002AA3]">Experienced & trustworthy</h4>
                        <p className="text-sm mt-4">We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.</p>
                    </div>
                    <div className="p-6 shadow bg-white text-black backdrop-blur-md">
                        <Image src={img2} alt="What’s Your Benefit" width={300} height={200} className="  mx-auto" />
                        <h3 className="text-2xl md:text-3xl font-semibold mt-6">What’s Your Benefit</h3>
                        <h4 className="text-sm md:text-base font-semibold mt-2 text-[#002AA3]">No hassle with best price</h4>
                        <p className="text-sm mt-4">A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price.</p>
                    </div>
                    <div className="p-6 shadow bg-white text-black backdrop-blur-md">
                        <Image src={img3} alt="What is Combo Offer" width={300} height={200} className=" mx-auto" />
                        <h3 className="text-2xl md:text-3xl font-semibold mt-6">What is Combo Offer</h3>
                        <h4 className="text-sm md:text-base font-semibold mt-2 text-[#002AA3]">Get 9 services in one package</h4>
                        <p className="text-sm mt-4">You’re getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!</p>
                    </div>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-10">
                    <Link href=''>
                        <button className="px-6 md:px-12 py-3 text-white bg-[#FF693B] rounded-lg hover:bg-[#E6592E] transition">
                            See Pricing
                        </button>
                    </Link>
                </div>
            </div>

            {/* Portfolio Section */}
            <div className="pt-20">
                <Portfolio />
            </div>
        </div>
    );
};

export default GetAns;

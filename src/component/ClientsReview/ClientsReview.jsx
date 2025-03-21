"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import SectionTitle from "../shared/SectionTitle/SectionTitle";

const ClientsReview = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const [activeNav, setActiveNav] = useState("right");

  useEffect(() => {
    // Fetch JSON data
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));

    // Adjust cards per page based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerPage(3);
      else setCardsPerPage(6);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(reviews.length / cardsPerPage);

  // Handle navigation
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setActiveNav("right");
};
  const prevPage = () =>{
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setActiveNav("left");

  }
    

  // Slice reviews for pagination
  const visibleReviews = reviews.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
   <div className="bg-white">
     <div className="max-w-5xl mx-auto lg:pt-52 pt-20 lg:pb-30 pb-20 ">
      {/* Section Titles */}    
      <div>
        <SectionTitle title='Our Proud Clients' subTitle='  CLIENT REVIEWS'></SectionTitle>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-6 ">
        {visibleReviews.map((review) => (
           <motion.div          
          
           
           transition={{ duration: 0.2, ease: "easeOut" }}
          
           whileHover={{ scale: 1.05 }}
            key={review.id}
            className="p-5 border border-[#3333331d] rounded-lg shadow bg-white"
          >
            {/* Star Ratings */}
            <div className="flex gap-1 mb-3 ">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#4580FF]" fill="#4580FF" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-[#424242] mb-4">{review.review}</p>

            {/* Client Info */}
            <div className="flex items-center gap-4">
              {/* Client Image */}
              <img
                src={review.clientImage}
                alt={review.clientName}
                width={50}
                height={50}
                className="w-12 h-12 rounded-full border"
              />
              <div>
                <p className="font-semibold text-[#0A2C8C]">
                  {review.clientName}
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={review.companyLogo}
                    alt={review.company}
                    width={20}
                    height={20}
                  />
                  <span className="text-gray-500 text-sm">{review.company}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={prevPage}
         className={`px-3 py-2 cursor-pointer rounded hover:bg-[#FF693B] hover:text-white transition ${activeNav === "left" ? " bg-[#FF693B] text-white " : "border-[#0C89FF] border text-[#0C89FF] "}`}
                            
        >
         <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={nextPage}
          className={`px-3 py-2 cursor-pointer rounded hover:bg-[#FF693B] hover:text-white transition ${activeNav === "right" ? " bg-[#FF693B] text-white " : "border-[#0C89FF] border text-[#0C89FF] "}`}
                            
          
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
   </div>
  );
};

export default ClientsReview;

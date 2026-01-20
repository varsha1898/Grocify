import React from "react";
import Heading from "../Heading.jsx";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import { FaStar } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Varsha Patel",
      role: "Regular Customer",
      feedback:
        "Grocify has completely changed the way I shop for groceries. Fresh produce, quick delivery, and amazing service!",
      image: Customer1,
      rating: 5,
    },
    {
      name: "Rahul Sharma",
      role: "Organic Food Enthusiast",
      feedback:
        "I love the variety of organic options available. The quality is unmatched and I feel healthier already!",
      image: Customer2,
      rating: 4,
    },
    {
      name: "Sneha Kapoor",
      role: "Working Professional",
      feedback:
        "Ordering groceries online has never been this easy. Grocify saves me time and ensures I get the best products.",
      image: Customer3,
      rating: 5,
    },
    {
      name: "Ravi Katkar",
      role: "Regular Customer",
      feedback:
        "Ordering groceries online has never been this easy. Grocify saves me time and ensures I get the best products.",
      image: Customer4,
      rating: 5,
    },
    {
      name: "Nisha Pawar ",
      role: "Regular Customer",
      feedback:
        "Ordering groceries online has never been this easy. Grocify saves me time and ensures I get the best products.",
      image: Customer5,
      rating: 4,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-orange-100 via-white to-green-100 py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        {/* Heading */}
        <Heading title="What Our" subtitle="Customers Say" />

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center 
                              hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Decorative floating quote */}
                <span className="absolute top-4 left-6 text-6xl text-orange-200 opacity-30 group-hover:opacity-60 transition duration-300">
                  “
                </span>

                {/* Avatar */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-orange-500 mb-5 shadow-md group-hover:scale-110 transition-transform duration-300"
                />

                {/* Feedback */}
                <p className="italic text-gray-700 mb-6 leading-relaxed relative z-10">
                  "{t.feedback}"
                </p>

                {/* Name & Role */}
                <h4 className="text-lg font-bold text-zinc-800">{t.name}</h4>
                <span className="text-sm font-medium text-orange-600">
                  {t.role}
                </span>

                {/* Rating */}
                <div className="flex justify-center mt-3">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`text-lg ${
                        index < t.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Gradient underline accent */}
                <div className="mt-4 w-16 h-[3px] bg-amber-500 rounded-full"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

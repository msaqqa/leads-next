"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./styles.css";
import StarRating from "../starRating/starRating";

const testimonials = [
  {
    id: 1,
    title: "Great service",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
    name: "Sabine M",
    address: "42 Jahre alt, aus Berlin",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Great service",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
    name: "Sabine M",
    address: "42 Jahre alt, aus Berlin",
    rating: 3.4,
  },
  {
    id: 3,
    title: "Great service",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
    name: "Sabine M",
    address: "42 Jahre alt, aus Berlin",
    rating: 5,
  },
  {
    id: 4,
    title: "Great service",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
    name: "Sabine M",
    address: "42 Jahre alt, aus Berlin",
    rating: 4.1,
  },
];

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="testimonials relative bg-white pt-16">
      <div className="container text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold capitalize mb-8 lg:mb-16">
          What do the users say?
        </h2>
      </div>
      <Swiper
        className="testimonials-swiper container"
        modules={[Navigation, Scrollbar]}
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        loop={false}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3.2, spaceBetween: 20 },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        scrollbar={{ el: ".swiper-scrollbar", draggable: true }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card bg-neutral-100 rounded-2xl px-5 py-8">
              <h4 className="text-base font-semibold capitalize mb-4">
                {testimonial.title}
              </h4>
              <p className="text-base font-normal text-neutral-600 line-clamp-3 mb-4">
                {testimonial.desc}
              </p>
              <div className="ratings flex gap-x-2.5 mb-8">
                <StarRating ratings={testimonial.rating} />
                <p className="rating-value text-base font-semibold">
                  {testimonial.rating}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h6 className="text-sm font-medium mb-2">
                    {testimonial.name}
                  </h6>
                  <p className="text-xs font-normal text-gray-500">
                    {testimonial.address}
                  </p>
                </div>
                <img src="/images/svg/quote.svg" alt="quote icon" />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Counter */}
        <div className="text-center my-8">
          <span>{currentSlide}</span> / <span>{testimonials.length}</span>
        </div>
        {/* Navigation */}
        <div className="swiper-navigation">
          <div className="swiper-button-prev"></div>
          <div className="swiper-scrollbar"></div>
          <div className="swiper-button-next"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Testimonials;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Testimonial from "./Testimonials";
import "../styles/others.css";

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
        // when window width is >= 768px (tablet and up)
        768: {
          slidesPerView: 3,
        },
        // when window width is < 768px
        0: {
          slidesPerView: 1,
        },
      }}
      className="testimonial-swiper"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id} className="testimonial-slide">
          <Testimonial
            text={testimonial.text}
            author={testimonial.author}
            role={testimonial.role}
            image={testimonial.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;

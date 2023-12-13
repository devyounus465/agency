// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Title from "../../Shared/Title/Title";
import { useEffect, useState } from "react";
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState();

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="container py-16">
      <div>
        <Title heading={"Client Testimonials"}></Title>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          {testimonials?.map((test, i) => (
            <SwiperSlide key={i} className="p-6 ">
              <div className="flex flex-col items-center gap-8  p-6">
                <p className="text-center text-lg">{test.testimonial}</p>
                <div className="flex gap-5">
                  <img
                    width={50}
                    className="rounded-full"
                    src={test.image}
                    alt=""
                  />
                  <div>
                    <h4 className="font-bold text-lg">{test.name}</h4>
                    <h5>{test.occupation}</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

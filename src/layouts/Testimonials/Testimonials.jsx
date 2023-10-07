import SectionTitle from "../../components/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/navigation';
import useFetchTestimonials from "../../hooks/useFetchTestimonials";
import TestimonialsCard from "../../components/TestimonialsCard";
const Testimonials = () => {
    const testimonialTitle = 'Testimonials'
    const testimonialDescription = 'What Our Clients Say';
    const { testimonials } = useFetchTestimonials();
    // console.log(testimonials);
    return (

        <div>
            <SectionTitle title={testimonialTitle} description={testimonialDescription} />
            <div className="c-container testimonials">

                <Swiper
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="testimonials" >
                    {
                        testimonials?.map(testimonial => <SwiperSlide key={testimonial.id}><TestimonialsCard testimonial={testimonial} /></SwiperSlide>)
                    }
                    <div className='flex items-center gap-1 justify-end mt-10'>
                        <span className='swiper-button-prev p-2 text-2xl transition-all rounded-md bg-green-100'><BsArrowLeft className='' /></span>
                        <span className='swiper-button-next p-2 text-2xl transition-all rounded-md bg-green-100'><BsArrowRight className='' /></span>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
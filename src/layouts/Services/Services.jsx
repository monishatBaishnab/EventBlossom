// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/navigation';
import useFetchAll from '../../hooks/useFetchAll';
import ServicesCard from '../../components/ServicesCard';



const Services = () => {
    const {eventServices} = useFetchAll();
    return (
        <div className="c-container">
            <div className="flex justify-center items-center flex-col">
                <h5 className="text-lg px-2 rounded-md mb-2 bg-green-100 text-green-500 inline-block">Services</h5>
                <h2 className="text-2xl font-medium text-center">We bring you some exceptional services.</h2>
            </div>
            <div className="c-container">

                <Swiper
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    slidesPerView={1}
                    spaceBetween={5}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    }}
                    modules={[Navigation]}
                    className="services" >
                    
                    {
                        eventServices?.map(eventService => <SwiperSlide key={eventService.id}><ServicesCard eventService={eventService} /></SwiperSlide>)
                    }
                    
                </Swiper>
                <div className='flex items-center gap-1 justify-end mt-10'>
                    <span className='swiper-button-prev p-2 text-2xl transition-all rounded-md bg-green-100'><BsArrowLeft className='' /></span>
                    <span className='swiper-button-next p-2 text-2xl transition-all rounded-md bg-green-100'><BsArrowRight className='' /></span>
                </div>
            </div>
        </div>
    );
};

export default Services;
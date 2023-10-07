// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/navigation';
import ServicesCard from '../../components/ServicesCard';
import SectionTitle from '../../components/SectionTitle';
import useFetchEvents from '../../hooks/useFetchEvents';



const Services = () => {
    const {eventServices} = useFetchEvents();
    const serviceTitle = 'Services';
    const serviceDescription = 'We bring you some exceptional services.';
    return (
        <div className="c-container">
            <SectionTitle title={serviceTitle} description={serviceDescription} />
            <div className="c-container services">

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
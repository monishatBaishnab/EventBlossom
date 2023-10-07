import { SwiperSlide } from "swiper/react";

const TestimonialCard = () => {
    return (
        <SwiperSlide>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <span className="px-2 bg-green-500 text-white rounded-md mb-2">QUOTES</span>
                    <p className="text-xl text-[#2A3342] text-center mb-10">The event management team made my daughters birthday party truly magical! From the decorations to the entertainment, everything was perfect. Thank you for creating such wonderful memories.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-[100px] w-[100px] overflow-hidden rounded-full mb-4">
                        <img className="w-full h-full object-cover" src="https://i.ibb.co/h2SbwTQ/profile-2-min.jpg" alt="" />
                    </div>
                    <h4 className="text-xl font-medium text-green-500">Kamal Hossain</h4>
                    <p>Deputy Commissioner, Dhaka Division</p>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default TestimonialCard;
import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
    return (
        <div data-aos='fade' data-aos-duration='600' className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center z-50 bg-white/80">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    );
};

export default Loading;
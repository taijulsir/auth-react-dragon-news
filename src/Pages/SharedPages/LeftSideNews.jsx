import image1 from "../../assets/1.png"
import image2 from "../../assets/2.png"
import image3 from "../../assets/3.png"
import moment from 'moment';

import { FaRegCalendarCheck } from "react-icons/fa6";


const LeftSideNews = () => {
    return (
        <div className=" space-y-7">
            <div className="space-y-5">
                <img src={image1} alt="news" />
                <h1 className=" text-xl font-bold text-[#403F3F] ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className="flex gap-5 text-lg">
                    <p>Sports</p>
                    <p className="flex items-center justify-center">
                        <FaRegCalendarCheck className="mr-2 text-2xl"></FaRegCalendarCheck>
                        {moment().format(" MMM D, YYYY")}
                    </p>
                </div>
            </div>

            <div className="space-y-5">
                <img src={image2} alt="news" />
                <h1 className=" text-xl font-bold text-[#403F3F] ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className="flex gap-5 text-lg">
                    <p>Sports</p>
                    <p className="flex items-center justify-center">
                        <FaRegCalendarCheck className="mr-2 text-2xl"></FaRegCalendarCheck>
                        {moment().format(" MMM D, YYYY")}
                    </p>
                </div>
            </div>

            <div className="space-y-5">
                <img src={image3} alt="news" />
                <h1 className=" text-xl font-bold text-[#403F3F] ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className="flex gap-5 text-lg">
                    <p>Sports</p>
                    <p className="flex items-center justify-center">
                        <FaRegCalendarCheck className="mr-2 text-2xl"></FaRegCalendarCheck>
                        {moment().format(" MMM D, YYYY")}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default LeftSideNews;
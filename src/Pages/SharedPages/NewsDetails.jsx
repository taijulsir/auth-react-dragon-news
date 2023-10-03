import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import RightSideNav from "./RightSideNav";
import image1 from "../../assets/1.png"
import image2 from "../../assets/2.png"
import image3 from "../../assets/3.png"
import { FaRegCalendarCheck } from "react-icons/fa6";



const NewsDetails = () => {
    const allNews = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id)
    const news = allNews.find(aNews => parseInt(aNews._id) === idInt)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-3 px-4 mt-8 bg-[#FFF] rounded-md shadow-lg">
                    <h1 className='text-xl font-bold text-[#403F3F] pb-5 '>News Details  </h1>
                    <div className="space-y-7">
                        <img className='mb-8 lg:w-[928px] lg:h-[517px]' src={news.image_url} alt="" />
                        <h3 className="text-3xl font-bold "> {news.title} </h3>
                        <p className='text-[#706F6F] text-xl my-5'>
                            {news.details}
                        </p>
                        <Link to='/'>
                            <button className="bg-[#D72050] py-3 px-5 text-white font-semibold mt-5">Read All News IN this Category</button>
                        </Link>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-2xl font-semibold mb-6">Editor Inshots</h3>
                        <div className=" grid grid-cols-3">
                            <div className="space-y-5">
                                <img src={image1} alt="news" />
                                <h1 className=" text-xl font-bold text-[#403F3F] ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                                <div className="flex gap-5 text-lg">
                                    <p>Sports</p>
                                    <p className="flex items-center justify-center">
                                        <FaRegCalendarCheck className="mr-2 text-2xl"></FaRegCalendarCheck>
                                        {news.author.published_date}
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
                                        {news.author.published_date}
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
                                        {news.author.published_date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
/* eslint-disable react/prop-types */
import moment from 'moment';

import { FaShareNodes, FaBookmark, FaEye } from "react-icons/fa6";
import Rating from 'react-rating';





const News = ({ news }) => {
    const { title, rating, author, total_view, image_url, details } = news
    console.log(news)
    return (
        <div className='bg-[#FFF] border shadow-xl '>
            {/* author Section */}
            <div className="bg-[#F3F3F3] rounded-t-md px-5 py-5 flex justify-between items-center">
                <div className='flex items-center gap-4'>
                    <img className="h-[40px] rounded-full" src={author.img} alt="" />
                    <div>
                        <h3 className='text-lg text-[#403F3F] font-semibold'>{author.name}</h3>
                        <p>{moment().format("YYYY- M-D ")} </p>
                    </div>
                </div>

                <div className='text-xl flex gap-3  text-[#706F6F]'>
                    <FaBookmark></FaBookmark>
                    <FaShareNodes></FaShareNodes>
                </div>
            </div>

            {/* News Section */}
            <div className='px-5'>
                <h1 className='text-xl font-bold text-[#403F3F] pb-5'>{title}</h1>
                <img className='mb-8' src={image_url} alt="" />
                <p className='text-[#706F6F] mb-5'>{details}</p>
                <hr />
                <div className='flex justify-between my-5'>
                    <p>
                        <Rating
                        className=' text-yellow-600'
                        stop={5}
                        
                        emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
                        'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                        'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
                      fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
                        'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                        'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
                            initialRating={rating.number}
                        />
                    </p>
                    <div className='flex text-[#706F6F] font-medium '>
                        <FaEye className='text-xl mr-2 '></FaEye>
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
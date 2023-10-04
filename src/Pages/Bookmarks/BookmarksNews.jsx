/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaShareNodes, FaBookmark, FaEye } from "react-icons/fa6";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const BookmarksNews = ({ bookmark }) => {

    const { _id, title, rating, author, total_view, image_url, details } = bookmark;
    return (
        <div className='bg-[#FFF] border shadow-xl '>
            {/* author Section */}
            <div className="bg-[#F3F3F3] rounded-t-md px-5 py-5 flex justify-between items-center">
                <div className='flex items-center gap-4'>
                    <img className="h-[40px] rounded-full" src={author.img} alt="" />
                    <div>
                        <h3 className='text-lg text-[#403F3F] font-semibold'>{author.name}</h3>
                        <p>{author.published_date} </p>
                    </div>
                </div>
            </div>

            {/* News Section */}
            <div className='px-5'>
                <h1 className='text-xl font-bold text-[#403F3F] pb-5'>{title}</h1>
                <img className='mb-8' src={image_url} alt="" />
                <p className='text-[#706F6F] mb-5'>

                </p>
                {
                    details.length > 200 ? <p> {details.slice(0, 200)} <Link
                        to={`/news/${_id}`}
                        className=' text-red-700 font-semibold'>
                        Read More ...
                    </Link> </p>
                        : <p> {details} </p>
                }
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

export default BookmarksNews;
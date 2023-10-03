import { useEffect, useState } from "react";
import News from "./News";


const ShowNews = () => {
    const [showNews,setshowNews] = useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(response => response.json())
        .then(data => setshowNews(data))
    },[])
    return (
        <div className="px-3 mt-8">
            <h3 className="text-[#403F3F] font-semibold text-2xl mb-6 text-center"> Dragon News Home</h3>
            <div className="flex flex-col gap-5">
                {
                    showNews.map(news => <News key={news.id} news = {news}></News>)
                }
            </div>
        </div>
    );
};

export default ShowNews;
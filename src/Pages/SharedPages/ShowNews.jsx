import { useEffect, useState } from "react";
import News from "./News";


const ShowNews = () => {
    const [showNews,setshowNews] = useState([])
    const [newsLength,setNewsLength] = useState(8)
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
                    showNews.slice(0,newsLength).map(news => <News key={news._id} news = {news}></News>)
                }
            </div>

            <div className={newsLength === showNews.length && "hidden"} style={{display:"flex", justifyContent: "center", marginTop:20}}>
                <div className="flex items-center justify-center my-5">
                <button className="bg-[#403F3F] text-white font-bold btn" onClick={()=>setNewsLength(showNews.length)}>Show More</button>
                </div>
            </div>
        </div>
    );
};

export default ShowNews;
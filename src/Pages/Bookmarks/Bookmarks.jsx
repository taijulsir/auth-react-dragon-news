import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredNewsItem } from "../../LocalStorage/Localstorage";
import Navbar from "../SharedPages/Navbar";
import Header from "../SharedPages/Header";
import BookmarksNews from "./BookmarksNews";

const Bookmarks = () => {
    const news = useLoaderData();
    const [booksmarks,setBookmarks]  = useState([])
    useEffect(() => {
        const storedNewsIds = getStoredNewsItem();
        if(news.length>0) {
            const bookmarksNews = news.filter(aNews => storedNewsIds.includes(parseInt(aNews._id)))
            setBookmarks(bookmarksNews)
        }

        
    },[news])

   
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-xl text-center text-white my-6 w-1/4 mx-auto font-bold bg-[#1d073a]">Read Your BookMarks News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                    {
                        booksmarks.map(bookmark => <BookmarksNews key={bookmark._id} bookmark={bookmark}></BookmarksNews>)
                    }

            </div>
        </div>
    );
};

export default Bookmarks;
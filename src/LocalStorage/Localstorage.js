const getStoredNewsItem = () => {
    const newsItem = localStorage.getItem('newsItem');
    if(newsItem){
        return JSON.parse(newsItem);
    }
    return [];
}

const saveNewsItem = (news) => {
        const {_id} = news;
        const idInt = parseInt(_id)
        const newsItem = getStoredNewsItem();
        const exists = newsItem?.find(newsId => newsId == idInt);
        if(!exists){
            newsItem.push(idInt);
            localStorage.setItem('newsItem', JSON.stringify(newsItem));
        }
       
}

export {getStoredNewsItem, saveNewsItem}
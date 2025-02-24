import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";

const Newsboard = ({category}) => {

      const [articles,setArticles] = useState([]);

     useEffect(()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    fetch(url).then(response => response.json()).then(data=> setArticles(data.articles));
   
  },[category])

       const dummyNews = [
    {
      title: "Sample News 1",
      description: "This is a dummy news description.",
      urlToImage: "https://via.placeholder.com/150",
      url: "#",
    },
    {
      title: "Sample News 2",
      description: "Another dummy news description.",
      urlToImage: "https://via.placeholder.com/150",
      url: "#",
    },
  ];

  return (
    <div>
      <h2 className = "text-center">Latest <span className ="badge bg-danger">News</span></h2>
      {dummyNews.map((news,index)=>{
        return<NewsItem key = {index} title = {news.title} description = {news.description} src = {news.urlToImage} url = {news.url} />
      })}
    </div>
  )
}

export default Newsboard

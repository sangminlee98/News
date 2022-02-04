import React, { useEffect, useState } from 'react';
import './NewsList.scss';
import NewsItem from './NewsItem';
import axios from 'axios';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

export type Article = {
  title: string,
  description: string,
  url: string,
  urlToImage: string
}
type Props = { category: string };

const NewsList = ({category}: Props) => {
  const [articles, setArticles] = useState<Article[] | undefined>();
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_API_KEY}`);
        setArticles(response.data.articles);
      } catch(e) {
        console.log(e);
      };
      setLoading(false);
    };
    fetchData();
  },[category]);
  if(loading) {
  return (
    <div className='loading'>
      <div className='icon'><AiOutlineLoading3Quarters /></div>
    </div>
  )
  }
  if(!articles) {
    return null;
  }
  return (
    <div className='NewsListBlock'>
      {
        articles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))
      }
    </div>
  );
};

export default NewsList;
import React from 'react';
import './NewsList.scss';
import NewsItem from './NewsItem';

export type Article = {
  title: string,
  description: string,
  url: string,
  urlToImage: string
}

const sampleArticle: Article = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160'
}

const NewsList = () => {
  return (
    <div className='NewsListBlock'>
      <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/>
    </div>
  );
};

export default NewsList;
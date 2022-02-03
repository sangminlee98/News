import React from 'react';
import './NewsItem.scss';
import { Article } from './NewsList';

type Props = {
  article: Article
}

const NewsItem = ({article}: Props) => {
  const {title, description, url, urlToImage} = article;
  return (
    <div className='NewsItemBlock'>
      {urlToImage && (
        <div className='thumbnail'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <img src={urlToImage} alt="thumbnail"/>
          </a>
        </div>
      )}
      <div className='contents'>
        <h2>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
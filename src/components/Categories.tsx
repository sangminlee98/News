import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';
type Category = {
  name: string,
  text: string
}
const categories: Category[] = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비즈니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  },
]
const Categories = () => {
  const [select, setSelect] = useState('all');
  const onSelect = useCallback((category: string) => {
    setSelect(category)
  },[])
  return (
    <div className='CategoriesBlock'>
      {categories.map(item => 
        (<Link to={item.name === 'all' ? '/' : `/${item.name}`}>
          <div
            className={`Category ${item.name === select ? 'selected' : null}`} 
            key={item.name}
            onClick={() => onSelect(item.name)}>
              {item.text}
          </div>
        </Link>
        ))}
    </div>
  );
};

export default Categories;
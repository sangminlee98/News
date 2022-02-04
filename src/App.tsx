import { useCallback, useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category: string) => setCategory(category),[]);
  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList />
    </>
  );
}

export default App;

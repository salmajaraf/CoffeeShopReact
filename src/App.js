import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Special from './components/Special';
import Product from './components/products';
import Place from './components/Place';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [mealData, setMealData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');

  const getCoffeeData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setCoffeeData(json);
    } catch (error) {
      console.error('Error fetching coffee data:', error);
    }
  };

  const getMealData = async () => {
    try {
      const resp = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const json = await resp.json();
      setMealData(json.categories || []);
    } catch (error) {
      console.error('Error fetching meal data:', error);
    }
  };

  useEffect(() => {
    getCoffeeData();
    getMealData();
  }, []);

  // Combine coffee and meal data
  const combinedData = useMemo(() => [
    ...coffeeData.map(coffee => ({ ...coffee, category: 'Coffee' })),
    ...mealData.map(category => ({
      title: category.strCategory || 'Unknown Category',
      description: category.strCategoryDescription || '',
      image: category.strCategoryThumb || 'your_default_image_url_here',
      idCategory: category.idCategory || '',
      category: 'Meal',
    })),
  ], [coffeeData, mealData]);

  const filterByCategory = useCallback((category) => {
    return combinedData.filter((item) => item.category.toLowerCase().includes(category.toLowerCase()));
  }, [combinedData]);

  useEffect(() => {
    setFilteredData(filterByCategory(filterCategory));
  }, [filterCategory, filterByCategory]);

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Special />
      <div className="filter-buttons">
        <button className={filterCategory === '' ? 'active' : ''} onClick={() => handleFilter('')}>
          All
        </button>
        <button className={filterCategory === 'Coffee' ? 'active' : ''} onClick={() => handleFilter('Coffee')}>
          Coffees
        </button>
        <button className={filterCategory === 'Meal' ? 'active' : ''} onClick={() => handleFilter('Meal')}>
          Meals
        </button>
      </div>
      {/* Render the Product component and pass the filtered data as a prop */}
      <Product products={filteredData} />
      <Place/>
      <Blog/>
      </main>
      <Footer/>
     
    </>
  );
}

export default App; 
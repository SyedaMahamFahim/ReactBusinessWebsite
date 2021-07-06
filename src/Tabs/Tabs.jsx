import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import Content from './Content';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function Tabs() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);
    
    const filterItems = (category) => {
        if (category === 'all') {
          setMenuItems(items);
          return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
      };
      const showContent=(category)=>{
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
        console.log(menuItems)

      }
    
  return (
      <>
    <main>
    <Categories categories={categories} filterItems={filterItems} />
    <Content items={menuItems}/>
    <button onClick={showContent}>Show Content</button>
    </main>
    </>
  );
}

export default Tabs;
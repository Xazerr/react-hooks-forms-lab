import React, { useState } from 'react';

const ItemForm = ({ onItemFormSubmit }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && category) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),  
        name,
        category
      };
      onItemFormSubmit(newItem);
      setName(''); 
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"  
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"  
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Dessert">Dessert</option>
        <option value="Main Course">Main Course</option>
      </select>

      <button type="submit">Add to List</button>
    </form>
  );
};

export default ItemForm;





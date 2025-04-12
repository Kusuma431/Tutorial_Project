import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import {useNavigate} from 'react-router-dom'

const SearchBar = ({data}) => {

  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')

  const onSearchHandler = (e) =>{
    e.preventDefault()
    navigate('/course-list/' + input)

  }
  return (

      <form onSubmit={onSearchHandler} className="max-w-2xl w-full h-16 flex items-center bg-white border border-gray-300 rounded-lg px-4">
        <img src={assets.search_icon} alt="Search Icon" className="w-8 h-8 mx-3" />
        <input onChange={e => setInput(e.target.value)} value={input}
          type="text"placeholder="Search for courses"className="w-full h-full outline-none text-gray-700 text-lg px-4"
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
          Search
        </button>
      </form>
    
  );
};

export default SearchBar;

import React, { useState, useEffect } from "react";

const Autocomplete = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      setData(posts);
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="w-full max-w-xs mx-auto bg-white bg-opacity-10   backdrop-blur-md rounded drop-shadow-lg p-4 h-[300px]">
      <label
        htmlFor="autocomplete"
        className="block text-sm font-medium text-white"
      >
        Search
      </label>
      <input
        placeholder="Search for find..."
        list="posts"
        id="autocomplete"
        value={inputValue}
        onChange={handleChange}
        className="input-calendar mt-1 block w-full pl-3 pr-10 py-2 text-base border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm rounded-md shadow-sm"
      />
      <datalist id="posts">
        {data.map((post) => (
          <option key={post.id} value={post.title} />
        ))}
      </datalist>
    </div>
  );
};

export default Autocomplete;

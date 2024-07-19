import React from 'react';

const FilterMenu = ({ filter, setFilter }) => {
  return (
    <select value={filter} style={{width:"70px"}} onChange={(e) => setFilter(e.target.value)}>
      <option value="">All</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
  );
};

export default FilterMenu;

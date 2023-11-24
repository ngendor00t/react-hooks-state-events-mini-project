import React from "react";

function CategoryFilter() {
  return (
    <div className="categories">
      <h5>Category filters</h5>
       {categories.map(category => (
            <button key={category} className="" onClick={handleCategorySelected} >{category}</button>}
            ))
    </div>

  );
}

export default CategoryFilter;

import React, { useState, useEffect } from "react";
import "../assets/styles/components/categories.scss";

const Categories = ({ children, title }) => {
  return (
    <div className="categories">
      <h2 className="categories_title">{title}</h2>
      {children}
    </div>
  );
};

export default Categories;

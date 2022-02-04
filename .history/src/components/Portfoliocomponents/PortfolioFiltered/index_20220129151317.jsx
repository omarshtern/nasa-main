import React, { useEffect, useState } from "react";
import portfolioMenu from "../../../utils/portfolio";
import "./styles.scss";
const allCategories = [
  "all",
  ...new Set(portfolioMenu.map((v, i) => v.category)),
];
const MenuComponent = ({ items }) => {
  return (
    <>
      <div className="portfolio_filtered_portfolio-gallery">
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem;
          return (
            <div className="portfolio_filtered_portfolio-item" data-filter="phone">
              <div className="portfolio_filtered_item-inner">
                <img src={img} alt={title} className="portfolio_filtered_item-inner_img" />
                <h1>{title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const CategoryComponent = ({ categoires, filterItems }) => {
  return (
    <>
      <div className="portfolioFiltered_button_container">
        {categoires.map((category, index) => {
          return (
            <div
              className="portfolioFiltered_button"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default function PortfolioFiltered() {
  const [menuItem, setMenuItem] = useState(portfolioMenu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(portfolioMenu);

      return;
    }
    const newItem = portfolioMenu.filter((v) => v.category === category);
    setMenuItem(newItem);
  };

  return (
    <div className="portfolioFiltered container">
      <CategoryComponent categoires={categories} filterItems={filterItems} />
      <MenuComponent items={menuItem} />
    </div>
  );
}

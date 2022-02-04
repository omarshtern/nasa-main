import React from "react";
import { useParams } from "react-router-dom";
import CartForSinlgePortfolioPage from "../../components/Portfoliocomponents/CardForSinglePortfolioPage";
export default function SinglePortfolioPage({ portfolioMenu }) {
  const { id } = useParams();

  return (
    <div>
      {portfolioMenu
        .filter((v) => v.id == id && v.category == category)
        .map((v, i) => {
          const np = v.id + 1;

          console.log(np);
          return (
            <>
              <CartForSinlgePortfolioPage np={np} v={v} />
            </>
          );
        })}
    </div>
  );
}

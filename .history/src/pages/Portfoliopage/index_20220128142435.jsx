import React from "react";
import PortfolioGallery from "../../components/Portfoliocomponents/PortfolioGallery";
import Portfolioheader from "../../components/Portfoliocomponents/Portfolioheader";
import "./styles.scss";
export default function Portfoliopage() {
  return <div className="portfoliopage">
    <Portfolioheader />
    <PortfolioGallery />
  </div>;
}

import React from "react";
import { Link } from "react-router-dom";
import portfolioMenu from "../../../utils/portfolio";


export default function FixedNextProject({ np }) {
  return (
    <div className="FixedNextProject">
      <div className="fixedNextProject_text_block">
        <span>Next project</span>
        <Link to={`/portfolio/project/${np}`}>
          {portfolioMenu.map((v, i))}
        </Link>
      </div>
    </div>
  );
}

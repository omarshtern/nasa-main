import React from "react";
// import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";
import { Article } from "../..";
import { motion } from "framer-motion";
import { useScroll } from "../../../../utils/useScroll";

const Blog = () => {
  const [controls, element] = useScroll()
  return (
    <>
      <div  className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
          <motion.h1
          animate={controls}
          
          className="gradient__text">
            A lot is happening, <br /> We are helping people.
          </motion.h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article
              imgUrl={blog01}
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article
              imgUrl={blog02}
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog03}
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog04}
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog05}
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

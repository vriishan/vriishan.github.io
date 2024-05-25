import { useRef, useState } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import projects from "./projects";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>My Work</h1>
      <div className="grid-container">
        {projects.map((item, index) => {
          return (
              <PortfolioItem
                key={index}
                title={item.title}
                description={item.desc}
                imageUrl={item.img}
                type={item.type}
              />
          );
        }
        )}
      </div>
    </div>
  );
};

export default Portfolio;
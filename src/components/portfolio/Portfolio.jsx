import "./Portfolio.scss";
import projects from "./projects";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="header">
          <h1 className="sectionHeader white"><font className="numberedHeading">03.</font>Projects</h1>
      </div>
      <div className="grid-container">
        {projects.map((item, index) => {
          return (
              <PortfolioItem
                key={index}
                title={item.title}
                description={item.desc}
                text={item.text}
                imageUrl={item.img}
                type={item.type}
                techStack={item.techStack}
                links={item.links}
              />
          );
        }
        )}
      </div>
    </div>
  );
};

export default Portfolio;
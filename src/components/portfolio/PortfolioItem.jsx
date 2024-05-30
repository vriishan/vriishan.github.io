import SpringModal from "./modal/SpringModal";
import { useState, useEffect } from "react";

const PortfolioItem = ({ title, description, imageUrl, techStack, type }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const project = { title, description, imageUrl, techStack };
    return (
        <div className={`portfolio-item ${type === 'featured' ? 'featured ' : 'normal'}`} onClick={() => setIsOpen(true)}>
            <img src={imageUrl} alt={title} className="portfolio-item-img" />
            <h2 className="portfolio-item-title">{title}</h2>
            <p className="portfolio-item-description">{description}</p>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} project={project} />
            <div className="techStack">
                {techStack.map(tech => {
                    return (
                        <span className="technology">{tech}</span>
                    )
                })}
            </div>
        </div>
    );
};

export default PortfolioItem;
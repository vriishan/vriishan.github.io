import SpringModal from "./modal/SpringModal";
import { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

const PortfolioItem = ({ title, description, imageUrl, techStack, type, text, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleEnter = async() => {
        animate(".portfolio-item-img", 
            {
                rotate: 3.5,
                scale: 1.07
            },
            {
                duration: 0.25,
                type: "spring"
            } 
        )
    }

    const handleLeave = async() => {
        animate(".portfolio-item-img", 
            {
                rotate: 0,
                scale: 1
            },
            {
                duration: 0.25,
                type: "spring"
            } 
        )
    }

    const project = { title, description, imageUrl, techStack, text, links };
    return (
        <div className={`portfolio-item ${type === 'featured' ? 'featured ' : 'normal'}`} onClick={() => setIsOpen(true)}>
            <div className="itemImageContainer" ref={scope} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <img src={imageUrl} alt={title} className="portfolio-item-img" />
            </div>
            <div className="itemTextContainer">
                <h2 className="portfolio-item-title">{title}</h2>
                <p className="portfolio-item-description">{description}</p>
                <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} project={project} />
                <div className="techStack">
                    {techStack.map((tech, index) => {
                        return (
                            <span className="technology" key={index}>{tech}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;
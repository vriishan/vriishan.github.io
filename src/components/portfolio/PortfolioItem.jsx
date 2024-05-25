import SpringModal from "./modal/SpringModal";
import { useState, useEffect } from "react";
import HoverModal from "./hover-modal/HoverModal";

const PortfolioItem = ({ title, description, imageUrl, type }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
     }, [isOpen] );

    return (
        <div className={`portfolio-item ${type === 'featured' ? 'featured ' : 'normal'}`} onClick={() => setIsOpen(true)}>
            <img src={imageUrl} alt={title} className="portfolio-item-img" />
            <h2 className="portfolio-item-title">{title}</h2>
            <p className="portfolio-item-description">{description}</p>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default PortfolioItem;
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './SpringModal.scss'; 
import GithubLogo from '../../icons/socials/GithubLogo'
import CloseIcon from '../../icons/others/CloseIcon';

const SpringModal = ({ isOpen, setIsOpen, project }) => {
    return (
        <AnimatePresence>
            {isOpen && 
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                    className="modal-backdrop"
                >
                    <button className="closeModal" onClick={() => setIsOpen(false)}>
                        <CloseIcon />
                    </button>
                    <motion.div
                        initial={{ scale: 1, y: 100, opacity: 0}}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        transition={{ type: "ease" }}
                        exit={{ scale: 0, rotate: '0deg' }}
                        className="modal-content"
                        onClick = {(e) => { e.stopPropagation(); }}
                    >
                        <div className="imageContainer">
                            <img src={project.imageUrl} alt="" />
                        </div>
                        <div className="textContainer">
                            <h3 className="modal-header">{project.title}</h3>
                            <div className="techStack">
                                {project.techStack.map(tech => {
                                    return (
                                        <span className="technology">{tech}</span>
                                    )
                                })}
                            </div>
                            {project.text.map((content, index) => {
                                return (
                                    <p key={index}>{content}</p>
                                )
                            })}
                            <div className="modal-footer">
                                <div className="links">
                                    {project.links.map((item, index) => {
                                        return (
                                            <a href={item.link} key={index}>
                                                {item.text}
                                                <item.logo fill="var(--primary)" hover="var(--accent)" background="var(--card)"/>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default SpringModal;

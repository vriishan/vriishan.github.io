import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './SpringModal.scss'; 
import githubLogo from '/github.svg';
import closeButton from '/close.svg';

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
                        <img src={closeButton} alt="" />
                    </button>
                    <motion.div
                        initial={{ scale: 0, rotate: '12.5deg' }}
                        animate={{ scale: 1, rotate: '0deg' }}
                        exit={{ scale: 0, rotate: '0deg' }}
                        className="modal-content"
                        onClick = {(e) => { e.stopPropagation(); }}
                    >
                        {/* <FiAlertCircle className="modal-icon-background" /> */}
                        <div className="imageContainer">
                            <img src="/people.webp" alt="" />
                        </div>
                        <div className="textContainer">
                            <h3 className="modal-header">Project 1</h3>
                            <div className="techStack">
                                {project.techStack.map(tech => {
                                    return (
                                        <span className="technology">{tech}</span>
                                    )
                                })}
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam vitae, sapiente ducimus eveniet in velit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur quam nihil cupiditate rerum vel exercitationem maiores ullam dolores? Accusantium mollitia dolor iste hic magnam, quas officiis enim maiores sit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur quam nihil cupiditate rerum vel exercitationem maiores ullam dolores? Accusantium mollitia dolor iste hic magnam, quas officiis enim maiores sit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur quam nihil cupiditate rerum vel exercitationem maiores ullam dolores? Accusantium mollitia dolor iste hic magnam, quas officiis enim maiores sit.
                            </p>
                            <div className="modal-footer">
                                <div className="links">
                                    <a href="https://github.com">
                                        <img src={githubLogo} alt="" />
                                        Source Code
                                    </a>
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

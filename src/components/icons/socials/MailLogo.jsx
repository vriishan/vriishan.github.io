import React from 'react'
import { motion } from 'framer-motion'

const MailLogo = ({ hover, fill }) => {
    const hoverVariant = {
        hover: {
            fill: hover || "var(--accent)",
            scale: 1.05
        }
    }
    return (
        <motion.svg variants={hoverVariant} whileHover="hover" width="800px" height="800px" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M7 6H17.2C18.8802 6 19.7202 6 20.362 6.32698C20.9265 6.6146 21.3854 7.07354 21.673 7.63803C22 8.27976 22 9.11984 22 10.8V18H11M7 6C9.20914 6 11 7.79086 11 10V18M7 6C4.79086 6 3 7.79086 3 10V18H11M17 3H14V12M10 18V21H14V18M7 12H7.01" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </motion.svg>
    )
}

export default MailLogo
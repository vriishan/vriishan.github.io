import React from 'react'
import { motion } from 'framer-motion'

const YoutubeLogo = ({ fill, background, hover }) => {
    const hoverVariant = {
        hover: {
            fill: hover || "var(--accent)",
            scale: 1.05
        }
    }
    return (
        <div>
            <motion.svg variants={hoverVariant} whileHover="hover" width="48" height="48" viewBox="0 0 48 48" fill={fill} xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_17_47)">
                    <motion.path variants={hoverVariant} d="M47.044 12.3709C46.7726 11.3497 46.2378 10.4178 45.493 9.66822C44.7483 8.91869 43.8197 8.37791 42.8003 8.1C39.0476 7.09091 24.0476 7.09091 24.0476 7.09091C24.0476 7.09091 9.04761 7.09091 5.29488 8.1C4.27547 8.37791 3.34693 8.91869 2.60218 9.66822C1.85744 10.4178 1.32262 11.3497 1.05124 12.3709C0.0476075 16.14 0.0476074 24 0.0476074 24C0.0476074 24 0.0476075 31.86 1.05124 35.6291C1.32262 36.6503 1.85744 37.5822 2.60218 38.3318C3.34693 39.0813 4.27547 39.6221 5.29488 39.9C9.04761 40.9091 24.0476 40.9091 24.0476 40.9091C24.0476 40.9091 39.0476 40.9091 42.8003 39.9C43.8197 39.6221 44.7483 39.0813 45.493 38.3318C46.2378 37.5822 46.7726 36.6503 47.044 35.6291C48.0476 31.86 48.0476 24 48.0476 24C48.0476 24 48.0476 16.14 47.044 12.3709Z" fill={fill} />
                    <path d="M19.1385 31.1373V16.8628L31.684 24.0001L19.1385 31.1373Z" fill={background} />
                </g>
                <defs>
                    <clipPath id="clip0_17_47">
                        <rect width="48" height="48" fill="white" />
                    </clipPath>
                </defs>
            </motion.svg>

        </div>
    )
}

export default YoutubeLogo
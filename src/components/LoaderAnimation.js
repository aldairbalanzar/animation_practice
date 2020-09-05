import React from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const LoaderAnimation = ({handleLoading}) => {
    return (
        <motion.div 
        layoutId='header'
        style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <motion.div
                exit={{ opacity: 0 }}
            >
            <motion.h2 layoutId='logo' style={{ width: '100%' }} onClick={handleLoading}>Loader Component</motion.h2>
                <p style={{ width: '100%' }}>is loading...</p>

                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 100 }}
                    transition={{ flip: Infinity, duration: 0.7 }}
                    style={{ background: 'tomato', height: 6, width: 100, borderRadius: 6 }}
                > 
                </motion.div>
                <motion.div
                    initial={{ x: -130 }}
                    animate={{ x: 130 }}
                    transition={{ flip: Infinity, duration: 1 }}
                    style={{ background: 'plum', height: 5, width: 70, borderRadius: 6 }}
                > 
                </motion.div>
                <motion.div
                    initial={{ x: -85 }}
                    animate={{ x: 85 }}
                    transition={{ flip: Infinity, duration: 0.6 }}
                    style={{ background: 'mediumaquamarine', height: 8, width: 35, borderRadius: 6 }}
                > 
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default LoaderAnimation

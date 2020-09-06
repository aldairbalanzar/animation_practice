import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import LoaderAnimation from './LoaderAnimation';

const Loader = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLoading = () => {
        setIsLoading(!isLoading)
    };
    return (
        <div
        style={{  
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            background: 'lightgrey',
            color: 'charcoal',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column', }}>
            <AnimateSharedLayout>

                <motion.header layoutId='header' onClick={handleLoading}>
                    <motion.h1 layoutId='logo'>Loader Component</motion.h1>
                </motion.header>

                <AnimatePresence>
                    {isLoading &&
                        <LoaderAnimation handleLoading={handleLoading}/>
                    }
                </AnimatePresence>

            </AnimateSharedLayout>
        </div>

    )
}

export default Loader

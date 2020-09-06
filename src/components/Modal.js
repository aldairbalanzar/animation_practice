import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ handleModal }) => {
    return (
        <motion.div
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 20}}>
            <h1>Modal</h1>
            <button onClick={handleModal}> Close </button>
        </motion.div>
    )
}

export default Modal

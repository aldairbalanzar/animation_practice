import React, { useState } from 'react';
import Loader from './components/Loader';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const handleModal = () => {
    setIsDisplaying(!isDisplaying)
    console.log(isDisplaying)
  };

  return (
    <div className="App">
      <Loader />
      <button onClick={handleModal}> press for modal </button>
      <AnimatePresence>
        { isDisplaying &&
          <Modal isDisplaying={isDisplaying} handleModal={handleModal}/>
        }
      </AnimatePresence>
    </div>
  );
}

export default App;

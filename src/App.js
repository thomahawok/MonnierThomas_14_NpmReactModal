import React from 'react';
import './App.css';
import Modal from './lib/components/Modal';
import useModal from './lib/components/useModal';

function App() {
  const { isShowing, toggle } = useModal()
  return (
    <>
    <Modal isShowing={isShowing} hide={toggle} />
    </>
  );
}

export default App;
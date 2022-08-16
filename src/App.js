import './App.css';
import Modal from './components/Modal';
import useModal from './components/useModal';

function App() {
  const { isShowing, toggle } = useModal()
  return (


    <>
    <Modal isShowing={isShowing} hide={toggle} />
    </>
  );
}

export default App;
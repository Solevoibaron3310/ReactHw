import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button1 from './components/Button';
import Button2 from './components/Button2';
import ModalAdd from './components/ModalAdd/ModalAdd.jsx'
import Close from './components/ModalAdd/ModalAddClose/ModalAddClose.jsx'
import Title from './components/ModalAdd/ModalAddTitle/ModalAddTitle.jsx'
import Description from './components/ModalAdd/ModalAddDesc/ModalAddDesc.jsx';
import ButtonAdd from './components/ModalAdd/ModalAddButton/ModalAddButton.jsx';
import ModalDel from './components/ModalDel/ModalDel.jsx';
import Header from './components/ModalDel/ModalDelHeader/ModalDelHeader.jsx';
import Footer from './components/ModalDel/ModalDelFooter/ModalDelFooter.jsx';
import MainText from './components/ModalDel/ModalDelBody/ModalDelBody.jsx';

function App() {
 
  const [isFirstModalOpen, setFirstModalOpen] = useState(false);
  
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  const openFirstModal = () => {
    setFirstModalOpen(true);
  };

  const openSecondModal = () => {
    setSecondModalOpen(true);
  };

  const closeFirstModal = () => {
    setFirstModalOpen(false);
  };

  const closeSecondModal = () => {
    setSecondModalOpen(false);
  }

  const handleFirstClick = () => {
      setSecondModalOpen(false)
  };

  const handleSecondaryClick = () => {

    setSecondModalOpen(false)
    alert('You deleted product')
  };
  

  return (
    <>
      <Button1 onClick={openFirstModal}>OPEN FIRST MODAL</Button1>
      <Button2 onClick={openSecondModal}>OPEN SECOND MODAL</Button2>
      <ModalAdd isOpen={isFirstModalOpen}>
        <Close
        onClick={closeFirstModal}
        />
        <Title>Add Product “NAME”</Title>
        <Description>Description for you product</Description>
        <ButtonAdd onClick={closeFirstModal}>ADD TO FAVORITE</ButtonAdd>
      </ModalAdd>
      <ModalDel isOpen={isSecondModalOpen}>
        <Header>
        <Close onClick={closeSecondModal}/>
        </Header>
        <MainText
        Title='Product Delete!'
        Description='By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted.'
        />
        <Footer
        firstText="NO, CANCEL"
        secondaryText="YES, DELETE"
        firstClick={handleFirstClick}
        secondaryClick={handleSecondaryClick}
      />

      </ModalDel>
    </>
    
  )
}

export default App

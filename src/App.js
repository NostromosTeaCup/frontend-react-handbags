import React from 'react';
import Button from './components/Button.js';
import './App.css';

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
          <Button isDisabled={false} clickHandler={() => console.log("To the collection!")}>
              To the collection
          </Button>
          <Button isDisabled={false} clickHandler={() => console.log("Shop all bags!")}>
              Shop all bags
          </Button>
          <Button isDisabled={true} clickHandler={() => console.log("Pre-orders")}>
              pre-orders
          </Button>
      </nav>
      </>
  );
}

export default App;




import React from 'react';
import Button from './components/Button.js';
import Product from './components/Product';
import bag_one from './assets/bag_1.png';
import bag_two from './assets/bag_2.png';
import bag_three from './assets/bag_3.png';
import bag_four from './assets/bag_4.png';
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
          <main>
              <Product
                  label="Best seller"
                  img={bag_one}
                  title="The handy bag"
                  price={400}
                  />
              <Product
                  label="Best seller"
                  img={bag_two}
                  title="The stylish bag"
                  price={250}
                  />
              <Product
                  label="New collection"
                  img={bag_three}
                  title="The simple bag"
                  price={300}
              />
              <Product
                  label="New collection"
                  img={bag_four}
                  title="The trendy bag"
                  price={150}
              />
          </main>

      </>
  );
}

export default App;




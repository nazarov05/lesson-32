import { useState } from 'react';
import './App.css';
import data from './data'

function App() {

  const { products } = data;
  
  
  
return(

  <>
          {products.map((product) => {
             return (
               <div className='key' key={product.id}>
               <div><h2>{product.name}</h2></div>
                <div> <h2>{product.price}</h2></div>
                <div className='image'><img src={product.image}></img></div>
               </div>
             )
           })}
            

          
          
       
        
        </>
        )
}

export default App;


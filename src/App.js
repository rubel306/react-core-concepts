import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    {name: 'Photoshop', price: '$230'},
    {name: 'Illustartor', price: '$150'},
    {name: 'After Effect', price: '$450'},
  ]


  function PersonName(props){
    const personNameStyle = {
      backgroundColor:'gray', 
      margin: '10px',
      border: '2px solid red',
      padding: '15px'
    }
    return (
      <div style={personNameStyle}>
        <h2>{props.name}</h2>
        <h4>{props.price}</h4>
      </div>
    )
  }
  const myProducts = [
    {name: 'Apple', price:'$120'},
    {name: 'Mango', price:'$160'},
    {name: 'Orange', price:'$60'},
    {name: 'Pinaple', price:'$20'}
  ]
  function ProductsAll(props){
    const ProductsAllStyle = {
      padding: '20px',
      border:'2px solid yellow',
      backgroundColor: 'salmon',
      margin: '20px',
      width: '300px',
      float:'left'
    }


    return (
      <div style={ProductsAllStyle}>
          <h1>{props.products.name}</h1>
          <h3>{props.products.price}</h3>
      </div>
    )
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>First React Component </h2>
        <PersonName name={products[0].name} price= {products[0].price}></PersonName>
        <PersonName name={products[1].name} price= {products[1].price}></PersonName>
        <PersonName name={products[0].name} price= {products[0].price}></PersonName>
        <ProductsAll products= {myProducts[0]}></ProductsAll>
        <ProductsAll products= {myProducts[1]}></ProductsAll>
        <ProductsAll products= {myProducts[2]}></ProductsAll>
        <ProductsAll products= {myProducts[3]}></ProductsAll>
      </header>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import './ProductGist/ProductGist';
import ProductGist from './ProductGist/ProductGist';
import productInfo from './ProductInfo/ProductInfo';
import ProductInfo from './ProductInfo/ProductInfo';
import Reviews from './ProductGist/Reviews'
import ProductForm from './ProductForm/ProductForm';
class App extends Component {

  state = {
    products: [
      {id: 1, name: "Wooden Comb", price: 199, qoh: 300},
      {id: 2, name: "Flame Thrower", price: 3999, qoh: 50}
    ],
    reviews:{},
    selectedProduct:{},
    
  }
  updateProductList = (newProduct) => {
    const updatedProductList = [...this.state.products,newProduct];
    this.setState({products: updatedProductList});
  }
  componentDidMount(){ //only called once when the page is started
    axios.get("http://localhost:8080/api/products")//asynchronous....      axios return promise
    .then(response =>{this.setState({products:response.data})
    
  
  });
}

  productSelectionHandler = (product) => {
    //console.log(product);
    this.setState({selectedProduct: product});
  }
  reviewSelectionHandler=(review)=>
  {
    this.setState({selectedReview:review});
  }
render(){
  const productGists = this.state.products.map(aProduct => {
    return (
    <ProductGist key={aProduct.id} product={aProduct} 
      clickHandler={() => {this.productSelectionHandler(aProduct)}} />);
  });

  return (
    <div className="App">
      <div className="sidebar">
          <ProductForm updateHandler={this.updateProductList} />
          <div className="productlist">
              {productGists}
          </div>
      </div>
      <div className="detailedproductinfo">
          <ProductInfo product={this.state.selectedProduct} />
          
          <Reviews productId={this.state.selectedProduct.id} />
          
      </div>
    </div>
    );
  }
}

export default App;
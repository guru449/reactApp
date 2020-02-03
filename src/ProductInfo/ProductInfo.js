import React,{Component} from 'react';

class ProductInfo extends Component{
    render()
    {
       return ( <div className="productinfo">
           <img src={this.props.product.image} height="100" width="100" />
           <p className="productName">product  {this.props.product.id} {this.props.product.name} </p> 
      <p className="productPrice">Rs. {this.props.product.price}</p>
      <p className="productQuantity">Available qty: {this.props.product.qoh}</p>
      </div>);
    }
}
export default ProductInfo;
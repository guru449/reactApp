import React,{Component} from 'react';
import Axios from 'axios';



class Reviews extends Component{
    state=
    {
        reviews:null
        , currentProductId:null

    }
    componentDidUpdate()
    {
        const newProductId=this.props.productId;
        if(newProductId){
        if(this.state.currentProductId !== newProductId && newProductId !== null)
{
        const productId=this.props.productId;
    Axios.get("http://localhost:8080/api/products/" + productId +"/reviews").
    then(response=>{this.setState({reviews:response.data,currentProductId:newProductId});
});
    }}}

    render(){
        if(this.state.reviews !==null){
            const allReviews=this.state.reviews
        .map(aReview=>{return(<p key={aReview.productId}>{aReview.text}</p>);})
    return ( <div className="Reviews">
            {allReviews}
      </div>); 
}
return (<div className="Reviews"></div>)
    }

}

export default Reviews;
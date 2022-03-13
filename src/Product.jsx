import React, { Component } from 'react'



class Product extends Component{

    state = {
        name:'youssef',
        imgURL:"logo192.png"
    }
    render(){
        return(
        <div>
            <img src={this.state.imgURL} alt="" />
            <h1 className=''>{this.state.name}</h1>
        </div>
        );
    }
}
export default Product;

// return use always ()
// we use always className not class because class alerady reserve
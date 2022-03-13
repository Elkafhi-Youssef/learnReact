import React, { Component } from 'react'
import Product from './Product';

class Shopping extends Component{
    state = {
        product:[
            {id:1,name:"buger",count:1},
            {id:2,name:"buger1",count:3},
            {id:3,name:"buger2",count:5},
        ]
    }
    render(){
        return(
            <React.Fragment>
            <div>
                <h1>Shopping</h1>
                {this.state.product.map(product =>(
                    <Product key={product.id} product={product}/>
                        
                ))}
            </div>
            </React.Fragment>
        );
    }
}

export default Shopping;


// <React.Fragment> use like a wrpper without display in a DOM
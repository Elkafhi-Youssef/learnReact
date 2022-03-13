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
    handleDelete=(product)=>{
        //Clone 1
        //Edit 2
        // set state 3
        const newProducts = this.state.product.filter(p=>p.id!== product.id)
        this.setState({product:newProducts})
        
    }
    handleReset=()=>{
        //Clone
        let products = [...this.state.product]
        console.log(products);
        // Edite
        products = products.map(p=>{p.count=0
        return p})
        console.log(products);
        // Set state
        this.setState({product:products})
        
    }
    render(){
        return(
            <React.Fragment>
            <div>
                <h1>Shopping</h1>
                <button onClick={this.handleReset} className='btn btn-primary btn-sm'>reset</button>
                {this.state.product.map(product =>(
                    <Product onDelete={this.handleDelete} key={product.id} product={product}/>
                        
                ))}
            </div>
            </React.Fragment>
        );
    }
}

export default Shopping;


// <React.Fragment> use like a wrpper without display in a DOM
// raising event help to use function in another component 
import React, { Component } from 'react'



class Product extends Component{

    state = {
        name:'youssef',
        count:2,
        imgURL:"logo192.png",
        names: ['youssef','jamila','zaynab']
    }
    getclass(){
         return ( this.state.count<5?"text-primary":"text-danger"
    
             )    }
    render(){
        // const classes =this.state.count<5?"text-primary":"text-danger"
        return(
        <div>
            <img src={this.state.imgURL} alt="" />
            <h1  className={this.getclass()}>{this.state.name}</h1>
            <ul>
                {this.state.names.map(item=> ( 
                     <li key={item}>{item}</li>
                     ))}
            </ul>
        </div>
        );
    }
}
export default Product;

// return use always ()
// we use always className not class because class alerady reserve
// syntax of add style in tag :style={{color:"red"}}

// arrayName.map(currentvalue=>return)
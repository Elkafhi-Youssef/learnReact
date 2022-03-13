import React, { Component } from 'react'



class Product extends Component{

    state = {
        name:this.props.product.name,
        count:this.props.product.count,
        
        // names: ['youssef','jamila','zaynab']
    }
    getclass(){
         return ( this.state.count<5?"text-primary":"text-danger"
    
             )    }
    renderNames(){
        if(this.state.names.length===0){
            return <h2>No names </h2>
        }else{
            return(
                this.state.names.map(item=> ( 
                <li key={item}>{item}</li>))
            )
        }
    }
    handler=(val)=>{
      this.setState({count:this.state.count+val})
    }
    // 1.
    // increment = ()=>{
    //     this.handler(2)
    // }
    render(){
        // const classes =this.state.count<5?"text-primary":"text-danger"
       
        return(
        <div>
            <h1  className={this.getclass()}>{this.state.name} {this.state.count}</h1>
            {/* <ul>
               {this.renderNames()}
            </ul> */}
            <button onClick={()=>this.handler(2)} className='btn btn-primary btn-sm'>+</button>
            {/* you  don't  call a function just put reference   */}
        </div>
        );
    }
}
export default Product;

// return use always ()
// we use always className not class because class alerady reserve
// syntax of add style in tag :style={{color:"red"}}

// arrayName.map(currentvalue=>return)
// true && string return string
// false && string return false

// updating state 
//  === 
//this.state({namestate: value})
//  ===

// passing argument to an event handler 
// ===
//1. create a new function for calling a  function and give him a rapametres 
//2.this.namefunctionn.bind(this,2)
//3.()=>this.namefunctionn(argument))
//  ===
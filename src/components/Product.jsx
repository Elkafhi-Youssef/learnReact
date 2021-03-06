import React, { Component } from 'react'



class Product extends Component{

    // state = {
    //     name:this.props.product.name,
    //     count:this.props.product.count,
        
    //     // names: ['youssef','jamila','zaynab']
    // }
    getclass(){
         return ( this.props.product.count<5?"text-primary":"text-danger"
    
             )    }
    renderNames(){
        if(this.props.names.length===0){
            return <h2>No names </h2>
        }else{
            return(
                this.props.names.map(item=> ( 
                <li key={item}>{item}</li>))
            )
        }
    }
    handler=(val)=>{
      this.setState({count:this.props.count+val})
    }
    // 1.
    // increment = ()=>{
    //     this.handler(2)
    // }
    render(){
        // const classes =this.state.count<5?"text-primary":"text-danger"
       
        return(
            <div className='row'>

          <div className='col'>
           
            <span className= {this.getclass()}>{this.props.product.name} {this.props.product.count}</span>
            {/* <ul>
               {this.renderNames()}
            </ul> */}
            <button onClick={()=>this.props.onIncrement(this.props.product)} className='btn btn-primary btn-sm'>+</button>
            <button onClick={()=>this.props.onDelete(this.props.product)} className='btn btn-danger p-1 m-2'>remove</button>
            {/* you  don't  call a function just put reference   */}
        </div>
            <div className='text-yellow-400'>
                <h1>hi every one</h1>
            </div>
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

//--------> passing argument to an event handler 
// ===
//1. create a new function for calling a  function and give him a rapametres 
//2.this.namefunctionn.bind(this,2)
//3.()=>this.namefunctionn(argument))
//  ===
//------->Deep clone objects to maintain increment function
// here just we don't have any state so increment function not working 
// so what the solution ?
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
    handler=()=>{
      this.setState({count:this.state.count+1})
    }
    render(){
        // const classes =this.state.count<5?"text-primary":"text-danger"
        return(
        <div>
            <img src={this.state.imgURL} alt="" />
            <h1  className={this.getclass()}>{this.state.name} {this.state.count}</h1>
            <ul>
               {this.renderNames()}
            </ul>
            <button onClick={this.handler} className='btn btn-primary btn-sm'>+</button>
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
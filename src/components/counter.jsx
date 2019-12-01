import React, { Component } from 'react';  
class Counter extends Component {

    state={
          count:this.props.value,//this is how we initialize values from other components from where we have pased the data here.
          tags:['tag1','tag2','tag3']
    };

    styles={
      fontSize:30,
      fontWeight:'bold'
    };
    
    // constructor(){
    //    super();
    //    this.OnClickEventHandler = this.OnClickEventHandler.bind(this);

    // }
    //embeding xpresion
    //Object Destructuring
    render() {
        return (
        <div>
            {this.props.children}
            <span  style={{fontSize:30}}  className={this.getColourForclasses()}>{this.getCountFromState()}</span>
            <button onClick={product=>this.OnClickEventHandler(product)} style={this.styles} className="btn btn-secondary btn-sm">Increment</button>
            <ul>
               {
                   this.rendertags()
               }
            </ul>
            </div>
            );
    
    }
    
    OnClickEventHandler= product =>{
        console.log(product);
     this.setState({count:this.state.count+1}); 
    }
    getCountFromState(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count 
    }

    getColourForclasses(){
    let classes="badge m-2 badge-"
    classes+= this.state.count===0? "warning": "primary"
    return classes;
}

    rendertags(){

    if(this.state.tags.length ===0) return "Please create tags!!!"
    return  this.state.tags.map(tag=><li key={tag}>{tag}</li>)
}

}
 
export default Counter ;
import React, { Component } from 'react';  
class Counter extends Component {

    state={
          count:0,
          tags:['tag1','tag2','tag3']
    };

    styles={
      fontSize:30,
      fontWeight:'bold'
    };
    
    
    //embeding xpresiion
    //Object Destructuring
    render() { 
        return (
        <div>
            <span   style={{fontSize:30}}  className={this.getColourForclasses()}>{this.getCountFromState()}</span>
            <button style={this.styles} className="btn btn-secondary btn-sm">Increment</button>
            <ul>
               {this.state.tags
                .map(tag=><li key={tag}>{tag}</li>)
                }
            </ul>
            </div>
            );
    
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

}
 
export default Counter ;
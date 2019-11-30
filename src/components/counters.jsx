import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:4},
            {id:2,value:5},
            {id:3,value:6},
            {id:4,value:6}
            
          ]
     };
    render() { 
       
        return ( 
            <div>
            { this.state.counters.map(counter=> (<Counter Key={counter.id} value={counter.value} selected={true}>
                <h1>Title</h1>
                </Counter>))
        
             
        }
        
            </div>
         );
    }
}
export default Counters;

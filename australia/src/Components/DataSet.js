import React, {useState} from 'react';


function DataSet(props) {
    const [input, setInput] = useState(null)
    return (
    <div>
           <Form>
               <div id="dynamicInput">
                   {this.state.inputs.map(input => <FormInput key={input} />)}
               </div>
           </Form>
           <button onClick={ () => this.appendInput() }>
               CLICK ME TO ADD AN INPUT
           </button>
        </div>
  );
}

export default DataSet;
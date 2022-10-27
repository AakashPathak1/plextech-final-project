import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './modal.js';

  
class Intro extends React.Component {
  render() {
    return (
      <div className='chow'>
        Our Website will be here :)
        <Test name="Moffit Library" hours="Mon-Fri (8am- 10pm)" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book." />
        
      </div>
    );
  }
}


  
  // ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Intro />);
  
import React from 'react'
import '../styles/App.css';
const App = () => {

  // do not change the code inside the function clickA
  const clickA = () =>{
    console.log('Clicked button A')
  }
  return (
    <div id="main">
      <button id="button-a"onclick={this.onClick.button(this)} ref={(ref)=>{this.button=ref}}>click Iran

    </button>
    </div>
  )
}


export default App;

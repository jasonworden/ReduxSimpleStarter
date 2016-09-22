import React from 'react';
import ReactDom from 'react-dom';

const API_KEY = 'AIzaSyAkULVvoDtRA45aPYrUFj40knzLfymBp3Y';

//create component
const App = () => {
  return <div>Hiiiiii!</div>;
}

//put component's HTML in DOM
ReactDom.render(<App />, document.querySelector('.container'))

import React from 'react';


//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

const link = React.cloneElement("a", { href: "reactjs.org" }, "LINK");

console.log(link);
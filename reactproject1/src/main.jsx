import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div><h1>My App</h1></div>
  )
}
// const ReactElem =  {// this myapp gets coverted like this
//   type : 'a',
//   props:  {
//     href:'https://google.com',
//     target : '_blank'
//   },
//   children: 'Click me to visit google'
   
// }
const anotherelem =  (
    <a href="https://google.com" target='_blank'>Visit google</a>
)
const reactElem =  React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to vist goolgul'
)
createRoot(document.getElementById('root')).render(

  reactElem
 
)

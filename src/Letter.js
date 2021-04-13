import React from 'react'
import './App.css'

const Letter=({alphabet,action})=>{
    return(
        <div>{
           /*  alphabet.map(
                (letter,key) => 
                {
                    console.log(key+"=>"+letter)
                    return<button 
                    key={"letter_"+key}
                    onClick={()=>action(letter)}
                    >{letter}</button>
                }
            ) */
            
         
            }
             </div>
       )
    }

export default Letter
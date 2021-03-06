import React from 'react'
import './App.css'

const CurrentWord=({currentWord,usedLetter,win})=>{
    return(
        <div id="wrapper_new_word">
            {
            currentWord.split('').map(
                (letter, key) =>{
                  let status="finded"
                  //tester si l'index de lettre exite ou pas dans le mot courant
                  if(usedLetter.indexOf(letter) == -1){

                    if(win === -1){
                        status="lost"
                    }else{
                        status="not finded"
                    } 
                  }

                  
                    return <span key={"letter_" + key} className={status}>
                    {status =="finded" ? letter :
                    (win === -1 ? letter :"?" )
                }
                    
                    </span>
                    
                }
            )
            }
             </div>
       )
    }

export default CurrentWord
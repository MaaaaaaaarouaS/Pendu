import React,{Component} from 'react'
import './App.css';
import Keyboard from './Keyboard'
import CurrentWord from './CurrentWord';
import Heart from  './Heart';

class App extends Component{
  state = {
		wordCollection: ["programmation","react", "node", "api", "site", "code", "web"],
		currentWord: null,
		alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(''),
		usedLetter: [],
		win: 0, // 0 : neutral | -1 lost | 1 win
		attempt: 0, 
		maxAttempt: 9 ,//nombre max de tentative
    sentence:["Ensemble des activités qui permettent l'écriture des programmes informatiques","react","nodeok","api", "site", "code", "web"]
	}

componentDidMount(){
  window.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) { 
    this.initGame()
  }
})
this.initGame()
  }


 clickLetter=(letter) =>{
 
   //nombre de tentative :décrémenter
   //si la lettre fait parti du mot
   /* ->affichage de la lettre
      -> changement d'etat
      ->gagner ou pas gagner */

      if (this.state.usedLetter.indexOf(letter) === -1) {
        //populate user letter (for prevent multiple click on same letter)
        const usedLetter = [letter, ...this.state.usedLetter] 
        
        let attempt = this.state.attempt
        if (this.state.currentWord.indexOf(letter) === -1) {
           attempt = this.state.attempt + 1
        }
        //calcul win state
			  let win = 1
			  for (let i = 0; i < this.state.currentWord.length; i++) { 
				if (usedLetter.indexOf(this.state.currentWord[i]) === -1) { 
					win = 0
				}
			}

      if(attempt ===this.state.maxAttempt && win ===0){
        win= -1
      }

        this.setState({usedLetter,attempt,win})
      }
 } 
initGame=()=>{
  console.log("ici")
  this.setState({
  currentWord:this.pickNewWord(),
  usedLetter:[],
  win:0,
  attempt:0})
}


pickNewWord = () => { 

  const randomIndex = Math.floor(Math.random() * this.state.wordCollection.length)
  return this.state.wordCollection[randomIndex]
  
}

launchNewGame = () => { 

  this.setState({
    currentWord: this.pickNewWord(),
    usedLetter: [],
    win: 0,
    attempt: 0
  })
  
}


  render(){
    return(
      <div id="game">
      <h1>Jeu de Pendu</h1>
      {
        (this.state.currentWord !==null)  &&
        <Heart 
        attempt={this.state.attempt}
        maxAttempt={this.state.maxAttempt}
        />
      }
      {
        (this.state.currentWord !==null) && 
        <CurrentWord 
        currentWord={this.state.currentWord}
        usedLetter={this.state.usedLetter}
        win={this.state.win}
        />
      }
     
      {
					//KEYBOARD COMPONENT
					(this.state.win === 0 && this.state.currentWord !== null) &&
					<Keyboard
						alphabet={this.state.alphabet}
						usedLetter={this.state.usedLetter}
						action={this.clickLetter}
					/>
				}

        {
					//RESTART BUTTON
					(this.state.currentWord === null || this.state.win !== 0) &&
						<button id="play_new_game" onClick={() => this.launchNewGame()}>Nouvelle partie</button>
				}

      </div>
     
    )
      
    
    
  }
}

export default App;

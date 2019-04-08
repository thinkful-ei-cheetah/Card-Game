'use strict';

// Card: this class can instantiate an individual playing card. Cards should be in a facedown or faceup state. What other properties would a standard playing card need?

// Stack - this class represents different stacks of playing cards. Aim to instantiate a draw deck, an active play stack, and a discard pile. How might these stacks behave and be identified differently?

// Game - we’re not actually going to build a full game, but create the starting construct to play a game with our cards. An instance of Game should initialize by instantiating and holding onto a draw deck, discard pile, and action play stack. Create a method that plays a round of the game by moving the top of the active stack to the discard (if one exists) and drawing a new card to the active.

class Game{
  constructor(){
    this.drawPile = new Stack;
    this.activePile = new Stack;
    this.discardPile = new Stack;

  }
   playCard(){

     console.log(this.drawPile.deck.unshift())
    this.activePile.deck.unshift(this.drawPile.deck.shift());
    this.activePile.deck[0].flipFace();
  }

  discardCard(){
    this.discardPile.deck.unshift(this.activePile.deck.shift());
  }

  startGame(){
    this.drawPile.createDeck()
    this.activePile = new Stack;
    this.discardPile = new Stack;
  }

}

class Stack {
  constructor(){
    this.deck = [];

  }  
  createDeck(){
    for (let currentValue = 0; currentValue < StandardCard.VALUE.length; currentValue++){
      for (let currentSuit = 0; currentSuit < StandardCard.SUITS.length; currentSuit++){
        let card = new StandardCard(StandardCard.SUITS[currentSuit], StandardCard.VALUE[currentValue]);
        this.deck.push(card);
      }
    }
  }
}

class Card {
  constructor(){
    this.faceUp = false;

  }
  flipFace() {
    this.faceUp = !this.faceUp;
  }
}

class StandardCard extends Card{
  constructor(suit, value){
    super();
    this.suit = suit;
    this.value = value
  }
  
}

StandardCard.SUITS = [ 'spades', 'hearts', 'diamonds', 'clubs'];

StandardCard.VALUE = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

let x = new Stack;

let newGame = new Game;
newGame.startGame()
newGame.playCard();
newGame.playCard();
newGame.playCard();
newGame.playCard();
newGame.discardCard();

console.log(newGame)

// let a = []
// a.push(newGame.drawPile.deck[0]
// console.log(a)


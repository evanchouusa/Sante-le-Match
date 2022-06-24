import React,{ Component } from 'react';
import './RollDice.css';
import Die from './Die';
import character from "./assets/images/character.png";
import App from './App';
import {useState} from 'react';
import { Link } from '@react-navigation/native';

class RollDice extends Component{

// Face numbers passes as default props
static defaultProps = {
	sides : ['one', 'two', 'three',
			'four', 'five', 'six']
}

constructor(props){
	super(props)
	this.steps = 1;
    this.backStep = 0;
    this.randomNum = 0;
    this.backFrom = 'boardgame';
    
	// States
	this.state = {
	die1 : 'one',
	rolling: false,
    clickMe: false,
    rollback: false,
    finished: false,
    checkProps: false,
	}
	this.roll = this.roll.bind(this)
}
roll(){
	const {sides} = this.props;
    this.randomNum = Math.floor(Math.random() * sides.length);
    
    if (this.randomNum == this.props.backStep-1) {
        this.randomNum = Math.floor(Math.random() * sides.length);
    }
    
    this.backStep = this.randomNum + 1;
    
	this.setState({
	// Changing state upon click
	die1 : sides[this.randomNum],
	rolling: true,
    clickMe: true,
    checkProps: false,
	})
	
    this.steps += this.randomNum + 1;

    if (this.steps > 11) {
        this.backStep -= this.steps - 12;
        this.steps = 12;
    }
 
	// Start timer of one sec when rolling start
	setTimeout(() => {
	
	// Set rolling to false again when time over
	this.setState({rolling:false, clickMe: true, checkProps: false})
	},1000)
}

render(){
	const handleBtn = this.state.rolling ?
					'RollDice-rolling' : ''
	const {die1, rolling} = this.state
    
    if (this.state.checkProps && this.props.passStep != null) {
        if (this.props.backFrom=='question') {
            this.state.clickMe = false;
            if (this.steps > 11)
                this.state.finished = true;
        }
        else if (this.props.backFrom=='review') {
            this.steps -= this.props.backStep;
            this.backStep=0;
            this.state.clickMe = false;
        }
    }
    this.state.checkProps = true;
    
    var padding = 100 + 'px';
    
    const pos = [
        {step: 1, x: 160, y:240},
        {step: 2, x: 300, y:230},
        {step: 3, x: 450, y:240},
        {step: 4, x: 480, y:90},
        {step: 5, x: 460, y:-90},
        {step: 6, x: 590, y:-120},
        {step: 7, x: 730, y:-70},
        {step: 8, x: 720, y:100},
        {step: 9, x: 800, y:230},
        {step: 10, x: 970, y:220},
        {step: 11, x: 970, y:30},
        {step: 12, x: 970, y:-150} ];

    var left = pos
        .filter(position => position.step==this.steps)
        .map(filteredP => (filteredP.x)) +'px';
    var top = pos
        .filter(position => position.step==this.steps)
        .map(filteredP => (filteredP.y)) +'px';
    
    return(
	<div className='RollDice'>
		<div className='RollDice-container'>
		<Die face={die1} rolling={rolling}/>
		</div>
        
		<button className={handleBtn}
				disabled={this.state.rolling || this.state.clickMe || this.state.finished}
				onClick={this.roll}>
                {this.state.rolling ? 'Rolling' : 'Roll Dice!'}
		</button>
        
        <div style={{textAlign: 'center'}}>
            <br/>
            <h3>
                {this.state.clickMe ? "Tap on the character!" : ""}
                {this.state.finished ? "You finished Lesson 1!" : ""}
            </h3>
            <p>
                {this.state.finished ? "Please study Lesson 2" : ""}
            </p>
        </div>
        
        <div style={{padding, left, top, position: 'absolute'}}>
        {this.state.clickMe ? (<Link to={{ screen: 'Questions', params: {passStep: this.steps, backStep: this.backStep} }} > <img src={character} style={{width: 100, float: 'right'}}/> </Link>) : (<img src={character} style={{width: 100, float: 'right'}}/>)}
        </div>
	</div>
	)
}
}

export default RollDice


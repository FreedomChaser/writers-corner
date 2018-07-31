import React, {Component} from 'react'
import CharaInput from './CharaInput'

export default class CharaForm extends Component{
    constructor(){
        super()

        this.state = {
            chatacters: [
                {

                }
            ]
        }
        this.formFunc = this.formFunc.bind(this)
    }

    formFunc(input, question){
        let tempCharacter = Object.assign({}, this.state.chatacters)
        tempCharacter[question] = input
        this.setState({chatacters: tempCharacter})
    }
    
    render(){
        console.log(this.state)
        return(
            <div>
                <CharaInput question='Name' formFunc={this.formFunc}/>
                <CharaInput question='Age' formFunc={this.formFunc}/>
                <CharaInput question='Socioeconomic Status' formFunc={this.formFunc}/>
                <CharaInput question='Occupation' formFunc={this.formFunc}/>
                <CharaInput question='Talents/Skills' formFunc={this.formFunc}/>
                <CharaInput question='Relationship Ability' formFunc={this.formFunc}/>
            </div>
        )
    }
}
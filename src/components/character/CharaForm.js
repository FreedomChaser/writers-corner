import React, {Component} from 'react'
import CharaInput from './CharaInput'

export default class CharaForm extends Component{
    constructor(){
        super()

        this.state = {

        }
        this.formFunc = this.formFunc.bind(this)
    }

    formFunc(input, question){
        this.setState({question: input})
    }

    render(){
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
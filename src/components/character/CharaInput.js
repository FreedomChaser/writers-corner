import React, {Component} from "react";

export default class CharaInput extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.question}</h2>
        <input
          placeholder="Add info here"
          onChange={e =>
            this.props.formFunc(e.target.value, this.props.question)
          }
        />
      </div>
    );
  }
}
import React from 'react';

class Button extends React.Component {
  state = {};

  onClick = () => {
    this.props.handleClick(this.props.text);
  };

  render() {
    return (
      <div className="b3_button" onClick={this.onClick}>
        {this.props.text}
      </div>
    );
  }
}
export default Button;

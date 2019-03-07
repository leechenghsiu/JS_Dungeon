import React from 'react';

import Button from './Button';
import '../css/Boss3.css';
import Menu from '../../Menu';

class Boss3 extends React.Component {
  state = {
    text: '0',
    procedure: '0',
    reset: false
  };

  //防止編譯時爆錯
  eval(fn) {
    var Fn = Function;
    return new Fn('return ' + fn)();
  }

  handleClick = value => {
    //一開始遇到 0
    if (this.state.text === '0' && value !== '.') {
      this.setState({
        text: '',
        procedure: ''
      });
      this.setState(prevState => ({
        procedure: prevState.procedure + value,
        text: prevState.text + value
      }));
    } else {
      this.state.reset
        ? this.setState(prevState => ({
            procedure: prevState.procedure + value,
            text: value,
            reset: false
          }))
        : this.setState(prevState => ({
            procedure: prevState.procedure + value,
            text: prevState.text + value,
            reset: false
          }));
    }
  };

  //加減乘除
  handleOperate = value => {
    this.setState(prevState => ({
      procedure: prevState.procedure + value,
      text: prevState.text,
      reset: true
    }));
  };

  //等於
  handleEvaluate = () => {
    const result =
      Math.round(this.eval(this.state.procedure) * 100000000) / 100000000;
    this.setState({
      text: result,
      reset: true
    });
  };

  //歸零
  handleClear = () => {
    this.setState({
      text: '0',
      procedure: '0',
      reset: false
    });
  };

  //倒退
  handleDelete = () => {
    this.setState(prevState => ({
      procedure:
        prevState.procedure.length <= 1
          ? '0'
          : prevState.procedure.slice(0, -1),
      text: prevState.text.length <= 1 ? '0' : prevState.text.slice(0, -1)
    }));
  };

  render() {
    const renderNumber = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '00', '.'].map(dig => {
      return <Button key={dig} text={dig} handleClick={this.handleClick} />;
    });

    return (
      <div>
        <Menu />
        <div className="b3_wrapper">
          <div className="b3_calculator">
            <div className="b3_monitor">
              <div className="b3_procedure">{this.state.procedure}</div>
              <div className="b3_result">{this.state.text}</div>
            </div>
            <div className="b3_button-wrapper">{renderNumber}</div>
            <div className="b3_operate" onClick={() => this.handleOperate('/')}>
              ÷
            </div>
            <div className="b3_operate" onClick={() => this.handleOperate('*')}>
              ×
            </div>
            <div className="b3_operate" onClick={() => this.handleOperate('+')}>
              +
            </div>
            <div className="b3_operate" onClick={() => this.handleOperate('-')}>
              −
            </div>
            <div className="b3_delete" onClick={this.handleClear}>
              AC
            </div>
            <div className="b3_delete" onClick={this.handleDelete}>
              ⌫
            </div>
            <div className="b3_equal" text="=" onClick={this.handleEvaluate}>
              =
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boss3;

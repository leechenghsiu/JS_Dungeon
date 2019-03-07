import React from 'react';

import Card from './Card';
import Title from './Title';
import '../css/Boss1.css';
import Menu from '../../Menu';

class Boss1 extends React.Component {
  handleClick = () => {
    this.state.menu
      ? this.setState({
          menu: false
        })
      : this.setState({ menu: true });
  };

  render() {
    const renderCards = [1, 2, 3].map(row => {
      return (
        <div key={row}>
          {[1, 2, 3].map(col => {
            if (row === 1 && col === 1) {
              return <Title key={col} />;
            }
            return <Card key={col} row={row} col={col} />;
          })}
        </div>
      );
    });

    return (
      <div>
        <Menu menuHeight={1372} />
        <div className="b1_bg">{renderCards}</div>
        <div className="b1_footer">
          <p className="b1_footer-title">
            Copyright © 2019 HexSchool. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default Boss1;

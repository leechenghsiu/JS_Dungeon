import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

class Menu extends React.Component {
  state = { open: false };

  handleClick = () => {
    !this.state.open
      ? this.setState({
          open: true
        })
      : this.setState({
          open: false
        });
  };

  render() {
    const renderMenu = (
      <div
        className={['menu', !this.state.open && 'menu-close'].join(' ')}
        style={{ height: this.props.menuHeight }}
      >
        <div
          className={[
            'menu-wrapper',
            !this.state.open && 'menu-wrapper-close'
          ].join(' ')}
        >
          <ol className="list">
            <li className="list-item">
              <Link to="/1F_BOSS_9x9" className="link">
                9x9乘法表
              </Link>
            </li>
            <li className="list-item">
              <Link to="/2F_BOSS_CLOCK" className="link">
                時鐘
              </Link>
            </li>
            <li className="list-item">
              <Link to="/3F_BOSS_CALCULATOR" className="link">
                計算機
              </Link>
            </li>
          </ol>
        </div>
      </div>
    );

    return (
      <div>
        <div
          className="icon-btn"
          onClick={this.handleClick}
          style={{ backgroundColor: this.props.color }}
        >
          <div
            className={['icon-left', this.state.open && 'icon-left-open'].join(
              ' '
            )}
          />
          <div
            className={[
              'icon-right',
              this.state.open && 'icon-right-open'
            ].join(' ')}
          />
        </div>
        {renderMenu}
      </div>
    );
  }
}

export default Menu;

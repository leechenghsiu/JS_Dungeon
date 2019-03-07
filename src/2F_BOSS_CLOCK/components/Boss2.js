import React from 'react';
import styled from 'styled-components';

import '../css/Boss2.css';
import Menu from '../../Menu';

class Boss2 extends React.Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0
  };

  componentDidMount() {
    this.setState({
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds()
    });
    setInterval(this.update, 1000);
    // clearInterval();
  }

  update = () => {
    this.setState({
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds()
    });
  };

  render() {
    const Hour = styled.div`
      position: absolute;
      left: 50%;
      top: 400px;
      transform: translate(-4px, -4px);
      transform-origin: 4px 4px;
      transform: rotate(
        ${this.state.hour * 30 - 90 + this.state.minute / 2}deg
      );
    `;
    const Minute = styled.div`
      position: absolute;
      left: 50%;
      top: 305px;
      transform: translate(-4px, -92px);
      transform-origin: 4px 92px;
      transform: rotate(${this.state.minute * 6}deg);
    `;
    const Second = styled.div`
      position: absolute;
      left: 50%;
      top: 400px;
      transform: translate(-6px, 3px);
      transform-origin: 6px -3px;
      transform: rotate(${this.state.second * 6 + 180}deg);
    `;

    console.log(new Date());

    return (
      <div>
        <Menu color={'#AFBBC6'} />
        <div className="b2_wrapper">
          <div className="b2_box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="500"
              height="500"
              viewBox="0 0 500 500"
            >
              <defs>
                <style>
                  {`.a {
              fill: #3d5a45;
            }
      
            .b {
              fill: #293b29;
              stroke: #212f0b;
              stroke-width: 3px;
            }
      
            .c,
            .f {
              fill: #fff;
            }
      
            .c {
              font-size: 10px;
              font-family: HelveticaNeue, Helvetica Neue;
            }
      
            .d {
              fill: #ccc;
              stroke: #ff7600;
              stroke-linejoin: round;
            }
      
            .e {
              fill: #ff7600;
            }
      
            .g {
              filter: url(#a);
            }`}
                </style>
                <filter
                  id="a"
                  x="0"
                  y="0"
                  width="500"
                  height="500"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="25" result="b" />
                  <feFlood floodOpacity="0.302" />
                  <feComposite operator="in" in2="b" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g transform="translate(-390 -153)">
                <g className="g" transform="matrix(1, 0, 0, 1, 390, 153)">
                  <rect
                    className="a"
                    width="350"
                    height="350"
                    rx="72"
                    transform="translate(75 72)"
                  />
                </g>
                <path
                  className="b"
                  d="M155,0h0A155,155,0,0,1,310,155h0A155,155,0,0,1,155,310h0A155,155,0,0,1,0,155H0A155,155,0,0,1,155,0Z"
                  transform="translate(485 245)"
                />
                <text className="c" transform="translate(640 299.315)">
                  <tspan x="-5.56" y="0">
                    12
                  </tspan>
                </text>
                <text className="c" transform="translate(692.127 314.521)">
                  <tspan x="-2.78" y="0">
                    1
                  </tspan>
                </text>
                <text className="c" transform="translate(588.718 314.521)">
                  <tspan x="-5.56" y="0">
                    11
                  </tspan>
                </text>
                <text className="c" transform="translate(709.403 281.671)">
                  <tspan x="-5.56" y="0">
                    13
                  </tspan>
                </text>
                <text className="c" transform="translate(570.598 281.671)">
                  <tspan x="-5.56" y="0">
                    23
                  </tspan>
                </text>
                <text className="c" transform="translate(728.824 350.597)">
                  <tspan x="-2.78" y="0">
                    2
                  </tspan>
                </text>
                <text className="c" transform="translate(551.176 350.597)">
                  <tspan x="-5.56" y="0">
                    10
                  </tspan>
                </text>
                <text className="c" transform="translate(742.565 403.757)">
                  <tspan x="-2.78" y="0">
                    3
                  </tspan>
                </text>
                <text className="c" transform="translate(537.436 403.757)">
                  <tspan x="-2.78" y="0">
                    9
                  </tspan>
                </text>
                <text className="c" transform="translate(728.824 454.813)">
                  <tspan x="-2.78" y="0">
                    4
                  </tspan>
                </text>
                <text className="c" transform="translate(551.176 454.813)">
                  <tspan x="-2.78" y="0">
                    8
                  </tspan>
                </text>
                <text className="c" transform="translate(692.127 493.809)">
                  <tspan x="-2.78" y="0">
                    5
                  </tspan>
                </text>
                <text className="c" transform="translate(589.185 493.809)">
                  <tspan x="-2.78" y="0">
                    7
                  </tspan>
                </text>
                <text className="c" transform="translate(640 507.605)">
                  <tspan x="-2.78" y="0">
                    6
                  </tspan>
                </text>
                <text className="c" transform="translate(762.209 332.477)">
                  <tspan x="-5.56" y="0">
                    14
                  </tspan>
                </text>
                <text className="c" transform="translate(517.435 332.477)">
                  <tspan x="-5.56" y="0">
                    22
                  </tspan>
                </text>
                <text className="c" transform="translate(780.805 403.757)">
                  <tspan x="-5.56" y="0">
                    15
                  </tspan>
                </text>
                <text className="c" transform="translate(498.822 403.757)">
                  <tspan x="-5.56" y="0">
                    21
                  </tspan>
                </text>
                <text className="c" transform="translate(762.209 475.132)">
                  <tspan x="-5.56" y="0">
                    16
                  </tspan>
                </text>
                <text className="c" transform="translate(517.435 475.132)">
                  <tspan x="-5.56" y="0">
                    20
                  </tspan>
                </text>
                <text className="c" transform="translate(709.402 525.813)">
                  <tspan x="-5.56" y="0">
                    17
                  </tspan>
                </text>
                <text className="c" transform="translate(570.597 525.813)">
                  <tspan x="-5.56" y="0">
                    19
                  </tspan>
                </text>
                <text className="c" transform="translate(640 263.075)">
                  <tspan x="-5.56" y="0">
                    24
                  </tspan>
                </text>
                <text className="c" transform="translate(640 543.642)">
                  <tspan x="-5.56" y="0">
                    18
                  </tspan>
                </text>
                <line
                  className="d"
                  y2="24"
                  transform="translate(640 265.435)"
                />
                <line
                  className="d"
                  x1="12"
                  y2="20.785"
                  transform="translate(695.282 283.464)"
                />
                <line
                  className="d"
                  x1="20.785"
                  y2="12"
                  transform="translate(735.752 332.718)"
                />
                <line
                  className="d"
                  x1="24"
                  transform="translate(750.565 400)"
                />
                <line
                  className="d"
                  x1="20.785"
                  y1="12"
                  transform="translate(735.752 455.282)"
                />
                <line
                  className="d"
                  x1="12"
                  y1="20.785"
                  transform="translate(695.282 495.752)"
                />
                <line
                  className="d"
                  y1="24"
                  transform="translate(640 510.565)"
                />
                <line
                  className="d"
                  y1="20.785"
                  x2="12"
                  transform="translate(572.718 495.752)"
                />
                <line
                  className="d"
                  y1="12"
                  x2="20.785"
                  transform="translate(523.464 455.282)"
                />
                <line
                  className="d"
                  x2="24"
                  transform="translate(505.435 400)"
                />
                <line
                  className="d"
                  x2="20.785"
                  y2="12"
                  transform="translate(523.464 332.718)"
                />
                <line
                  className="d"
                  x2="12"
                  y2="20.785"
                  transform="translate(572.718 283.464)"
                />
                <path
                  className="e"
                  d="M852.375,191.945l.7,2.864,2.132,2.035-2.864.7-2.035,2.132-.7-2.864-2.132-2.035,2.864-.7Z"
                  transform="translate(-179.549 86)"
                />
                <path
                  className="e"
                  d="M909,224.711l-.828,2.828.828,2.828-2.828-.828-2.828.828.828-2.828-.828-2.828,2.828.828Z"
                  transform="translate(-179.549 86)"
                />
                <path
                  className="e"
                  d="M941.665,281.4l-2.132,2.035-.7,2.864-2.035-2.132-2.864-.7,2.132-2.035.7-2.864L938.8,280.7Z"
                  transform="translate(-179.549 86)"
                />
                <path
                  className="e"
                  d="M941.6,346.826l-2.864.7-2.035,2.132-.7-2.864-2.132-2.035,2.864-.7,2.035-2.132.7,2.864Z"
                  transform="translate(-179.549 86)"
                />
                <path
                  className="e"
                  d="M908.839,403.455l-2.828-.828-2.828.828.828-2.828-.828-2.828,2.828.828,2.828-.828-.828,2.828Z"
                  transform="translate(-179.549 86)"
                />
                <path
                  className="e"
                  d="M852.149,436.116l-2.035-2.132-2.864-.7,2.132-2.035.7-2.864,2.035,2.132,2.864.7-2.132,2.035Z"
                  transform="translate(-179.549 86)"
                />
                <path
                  className="e"
                  d="M786.723,436.055l-.7-2.864-2.132-2.035,2.864-.7,2.035-2.132.7,2.864,2.132,2.035-2.864.7Z"
                  transform="translate(-179.549 86)"
                />
                <path
                  className="e"
                  d="M730.094,403.29l.828-2.828-.828-2.828,2.828.828,2.828-.828-.828,2.828.828,2.828-2.828-.828Z"
                  transform="translate(-179.549 86)"
                />
                <path
                  className="e"
                  d="M697.433,346.6l2.132-2.035.7-2.864,2.035,2.132,2.864.7-2.132,2.035-.7,2.864L700.3,347.3Z"
                  transform="translate(-179.549 86)"
                />
                <path
                  className="e"
                  d="M697.494,281.175l2.864-.7,2.035-2.132.7,2.864,2.132,2.035-2.864.7-2.035,2.132-.7-2.864Z"
                  transform="translate(-179.549 86)"
                />
                <path
                  className="e"
                  d="M730.258,224.545l2.828.828,2.828-.828-.828,2.828.828,2.828-2.828-.828-2.828.828.828-2.828Z"
                  transform="translate(-179.549 86)"
                />
                <path
                  className="e"
                  d="M786.948,191.885l2.035,2.132,2.864.7-2.132,2.035-.7,2.864-2.035-2.132-2.864-.7,2.132-2.035Z"
                  transform="translate(-179.549 86)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(649.638 277.41)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(660.195 278.799)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(680.746 284.306)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(690.584 288.381)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(709.01 299.02)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(717.457 305.502)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(732.502 320.547)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(738.984 328.995)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(749.621 347.421)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(753.696 357.259)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(759.202 377.81)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(760.591 388.368)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(760.59 409.638)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(759.201 420.195)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(753.694 440.746)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(749.619 450.584)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(738.98 469.01)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(732.498 477.457)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(717.453 492.501)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(709.005 498.984)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(690.579 509.621)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(680.741 513.696)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(660.19 519.202)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(649.632 520.591)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(628.362 520.59)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(617.805 519.201)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(597.254 513.694)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(587.416 509.619)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(568.99 498.98)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(560.543 492.498)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(545.499 477.453)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(539.016 469.005)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(528.379 450.579)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(524.304 440.741)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(518.799 420.19)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(517.409 409.632)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(517.41 388.362)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(518.799 377.805)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(524.306 357.254)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(528.381 347.416)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(539.02 328.99)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(545.502 320.543)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(560.547 305.498)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(568.995 299.016)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(587.421 288.379)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(597.259 284.304)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(617.81 278.798)"
                />
                <circle
                  className="f"
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(628.368 277.409)"
                />
              </g>
            </svg>
            <Hour>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="8"
                viewBox="0 0 72 8"
              >
                <g transform="translate(-636 -396)">
                  <path
                    style={{ fill: '#fff' }}
                    d="M4,72a4,4,0,0,1-4-4V0H8V68A4,4,0,0,1,4,72ZM3,3V23H5V3Z"
                    transform="translate(708 396) rotate(90)"
                  />
                </g>
              </svg>
            </Hour>
            <Minute>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="96"
                viewBox="0 0 8 96"
              >
                <g transform="translate(-636 -396)">
                  <rect
                    style={{ fill: '#ff7600' }}
                    width="8"
                    height="96"
                    rx="4"
                    transform="translate(636 396)"
                  />
                  <circle
                    style={{ fill: '#fff' }}
                    cx="2"
                    cy="2"
                    r="2"
                    transform="translate(638 486)"
                  />
                  <circle
                    style={{ fill: '#ff7600' }}
                    cx="1"
                    cy="1"
                    r="1"
                    transform="translate(639 455)"
                  />
                  <path
                    style={{
                      fill: '#b1ff00',
                      stroke: '#fff',
                      strokeLinecap: 'round'
                    }}
                    d="M0,0V32"
                    transform="translate(640 456)"
                  />
                </g>
              </svg>
            </Minute>
            <Second>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13.251"
                height="126"
                viewBox="0 0 13.251 126"
              >
                <g transform="translate(646.618 400) rotate(180)">
                  <g
                    style={{ fill: '#293b29', stroke: '#b1ff00' }}
                    transform="translate(636 274)"
                  >
                    <circle style={{ stroke: 'none' }} cx="4" cy="4" r="4" />
                    <circle style={{ fill: 'none' }} cx="4" cy="4" r="3.5" />
                  </g>
                  <g
                    style={{ fill: '#b1ff00', stroke: '#b1ff00' }}
                    transform="translate(638 276)"
                  >
                    <circle style={{ stroke: 'none' }} cx="2" cy="2" r="2" />
                    <circle style={{ fill: 'none' }} cx="2" cy="2" r="1.5" />
                  </g>
                  <path
                    style={{ fill: 'none', stroke: '#b1ff00' }}
                    d="M0,3.61V50l6,8L-6,75l6,7v40"
                    transform="translate(640 278)"
                  />
                </g>
              </svg>
            </Second>
          </div>
        </div>
      </div>
    );
  }
}

export default Boss2;

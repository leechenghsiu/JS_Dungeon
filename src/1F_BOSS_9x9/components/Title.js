import React from 'react';

import '../css/Title.css';

const Title = () => {
  return (
    <div className="b1_wrapper">
      <span className="b1_x" style={{ left: 0, top: 3.5 }}>
        ×
      </span>
      <span className="b1_x" style={{ right: 0, top: 3.5 }}>
        ×
      </span>
      <span className="b1_x" style={{ left: 0, bottom: 6 }}>
        ×
      </span>
      <span className="b1_x" style={{ right: 0, bottom: 6 }}>
        ×
      </span>
      <div className="b1_box">
        <p className="b1_box-title">九九乘法表</p>
        <p className="b1_box-sub">MULTIPLICATION CHART</p>
      </div>
    </div>
  );
};

export default Title;

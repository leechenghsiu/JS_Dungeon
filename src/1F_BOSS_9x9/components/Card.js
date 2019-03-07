import React from 'react';

import '../css/Card.css';

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const Card = ({ row, col }) => {
  const i = row - 1,
    j = col - 1;

  const renderLeft = [1, 2, 3].map(num => {
    const result = `${arr[i][j]} × ${num} = ${arr[i][j] * num}`;
    return (
      <p key={num} className="b1_result">
        {result}
      </p>
    );
  });

  const renderRight = [4, 5, 6, 7, 8, 9].map(num => {
    const result = `${arr[i][j]} × ${num} = ${arr[i][j] * num}`;
    return (
      <p key={num} className="b1_result">
        {result}
      </p>
    );
  });

  return (
    <div className="b1_card">
      <div style={{ width: '50%', float: 'left', paddingLeft: 10 }}>
        <p className="b1_number">{arr[i][j]}</p>
        {renderLeft}
      </div>
      <div
        style={{
          width: '50%',
          float: 'right',
          marginTop: 58,
          paddingLeft: 20
        }}
      >
        {renderRight}
      </div>
    </div>
  );
};

export default Card;

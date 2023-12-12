import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  let name = '제주도의 오늘날씨는...';
  let [글제목, b] = useState(['성산의 날씨는', '비도오구', '비올땐 막걸리']);
  return (
    <div className="wrap">
      <header className="header">
        <p>요안도라 시즌2</p>
        <p>{name}</p>
        <p style={{ color: '#f00', fontSize: '26px' }}>비온다</p>
        <p>{글제목[0]}</p>
        <p>{글제목[1]}</p>
        <p>{글제목[2]}</p>
        <p>{글제목[3]}</p>
      </header>
      <div className="">
        <div></div>
      </div>
    </div>
  );
}

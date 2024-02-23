import React from 'react';

function Overlay({ show, text }) {
  return <div style={{ display: show ? 'flex' : 'none'}}>{text}</div>;
}

export default Overlay;
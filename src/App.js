import React from 'react';

function App() {
  const message = "It's a wrap";
  const element = <p>{message}</p>;
  return (
    <div>
      <h1>Hellor World</h1>
      <div>{element}</div>
    </div>
  );
}

export default App;

// App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Welcome to My React App!');
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div style={styles.container}>
      <h1>{message}</h1>
      <p>You clicked <strong>{count}</strong> times</p>
      <button onClick={() => setCount(count + 1)} style={styles.button}>
        Click Me
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial',
  },
  button: {
    padding: '11px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default App;

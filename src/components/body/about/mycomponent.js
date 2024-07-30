import React, { useState, useEffect } from 'react';
function MyComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage('Web Developer');
    }, 61000);

    // Clear the timeout if the component is unmounted or the timeout is no longer needed
    return () => clearTimeout(timeoutId);
  }, []);

  return <div>{message}</div>;
}
export default MyComponent;
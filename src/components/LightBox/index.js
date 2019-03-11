import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default props => {
  const [containerEl] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(containerEl);

    return () => {
      document.body.removeChild(containerEl);
    };
  }, []);
  return ReactDOM.createPortal(props.children, containerEl);
};

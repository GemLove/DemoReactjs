import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

class Ok extends React.Component {
  render() {
    return (
      <div className="game">
        <h1>Demo</h1>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

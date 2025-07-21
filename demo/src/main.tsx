import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { add } from '../../dist';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 style={{ color: 'black' }}>2 + 3 = {add(2, 3)}</h1>
  </StrictMode>,
);

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { DocumentationPage } from './pages/Documentation';
import './demo.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DocumentationPage />
  </StrictMode>,
);

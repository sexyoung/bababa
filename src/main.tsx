import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LogRocket from 'logrocket';
import ReactGA from 'react-ga4';

import './index.css'
import App from './App.tsx'

LogRocket.init('sexyoung/bababa');
ReactGA.initialize('G-4GESR72G51'); // 請替換成您的 GA4 測量 ID

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

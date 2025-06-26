import React from 'react';
import { createRoot } from 'react-dom/client';
// для клиентской маршрутизации
import { BrowserRouter } from 'react-router-dom';
// контекст смены темы
import { ThemeProvider } from '/src/utils/themeContext.jsx'
import App from './App';

const root = createRoot(
    document.getElementById('root')
);

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <ThemeProvider>
            <App/>
          </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);
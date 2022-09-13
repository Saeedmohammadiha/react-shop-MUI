import React, { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './components/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
const LandingPage = React.lazy(() => import('./LandingPage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<LandingPage style={{ margin: 0, padding: 0 }} />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

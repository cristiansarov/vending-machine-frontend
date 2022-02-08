import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSecurityStore } from './modules/security/security.store';
import { routes } from './routes';
import AuthenticatedRoute from './modules/security/components/AuthenticatedRoute/AuthenticatedRoute';

const App: React.VFC = () => {
  const [loaded, setLoaded] = useState(false);
  const storeCurrentUser = useSecurityStore((state) => state.storeCurrentUser);

  useEffect(() => {
    storeCurrentUser().finally(() => setLoaded(true));
  }, [storeCurrentUser]);

  if (!loaded) return null;
  return (
    <Router>
      <Routes>
        {routes.map(({ component: Component, authenticated, ...route }) => (
          <Route
            key={route.path}
            {...route}
            element={authenticated ? <AuthenticatedRoute {...authenticated}><Component/></AuthenticatedRoute> : <Component/>}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;

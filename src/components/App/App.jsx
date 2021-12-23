import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import Header from 'components/Header';
import Container from 'components/Container';
import Navigation from 'components/Navigation';
import Loader from 'components/Loader';

const Register = lazy(() => import(/* webpackChunkName: "Register" */ 'views/Register'));
const Contacts = lazy(() => import(/* webpackChunkName: "Contacts" */ 'views/Contacts'));
const Login = lazy(() => import(/* webpackChunkName: "Login" */ 'views/Login'));

const App = () => {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <Header>
            <Container>
              <Navigation />
            </Container>
          </Header>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;

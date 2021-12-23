import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Header from 'components/Header';
import Container from 'components/Container';
import Navigation from 'components/Navigation';

const Contacts = lazy(() => import(/* webpackChunkName: "Contacts" */ 'views/Contacts'));
const Login = lazy(() => import(/* webpackChunkName: "Login" */ 'views/Login'));
const Register = lazy(() => import(/* webpackChunkName: "Register" */ 'views/Register'));

const App = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Suspense fallback={<Container>Loading...</Container>}>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

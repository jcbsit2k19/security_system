import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import DashboardPage from './pages/dashboard';


function App() {
  return (
    <div className="font-montserrat bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<SigninPage />}
          />
          <Route
            path='/sign-up'
            element={<SignupPage />}
          />
          <Route
            path='/dashboard'
            element={<DashboardPage />}
          />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

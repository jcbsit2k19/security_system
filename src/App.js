import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import DashboardPage from './pages/dashboard';
import ProfilePage from './pages/profile';
import TurnstyleReportPage from './pages/reports/turnstyle_report';

import Layout from './components/layout/layout';



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
            element={<Layout><DashboardPage /></Layout>}
          />
          <Route
            path='/profiles'
            element={<Layout><ProfilePage /></Layout>}
          />
          <Route
            path='/turnstyle-report'
            element={<Layout><TurnstyleReportPage /></Layout>}
          />


        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

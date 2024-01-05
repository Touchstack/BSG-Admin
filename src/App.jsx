import { useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage';
import SignInForm from './pages/AuthPage/SignInForm';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser !== null) {
      try {
        navigate('/home');
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path='/' element={<SignInForm />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
}

export default App;

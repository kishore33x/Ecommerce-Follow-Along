import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage} from './routes.jsx'
import SignUpPage from './components/SignUpPage.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
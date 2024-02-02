import { Route, Routes } from 'react-router-dom';
import FrontPage from './pages/frontPage';
import Signin from './pages/signin';
import Signup from './pages/signup'
import WelcomeBack from './pages/welcomeBack/Welcome-Back';
import TeacherLogin from './pages/login/TeacherLogin'
import StudentLogin from './pages/login/StudentLogin'
import Dashboard from './pages/dashboard'


function App() {
  return (
    <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/welcome-back' element={<WelcomeBack />} />
        <Route path='/teacher-login' element={<TeacherLogin />} /> 
        <Route path='/student-login' element={<StudentLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        
    </Routes>
  );
}

export default App;

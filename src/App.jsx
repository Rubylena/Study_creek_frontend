import { Route, Routes } from 'react-router-dom';
import FrontPage from './pages/frontPage';
import Signin from './pages/signin';
import Signup from './pages/signup'
import WelcomeBack from './pages/welcomeBack/Welcome-Back';
import TeacherLogin from './pages/login/TeacherLogin'
import StudentLogin from './pages/login/StudentLogin'
import Dashboard from './pages/dashboard'
import Layout from './components/layout';
import AddCourse from './components/addCourse';
import CourseDetail from './pages/courseDetail';


function App() {
  return (
    <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/welcome-back' element={<WelcomeBack />} />
        <Route path='/teacher-login' element={<TeacherLogin />} /> 
        <Route path='/student-login' element={<StudentLogin />} />
        <Route element={<Layout/>}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route element={<AddCourse/>}>
                <Route path='/details' element={<CourseDetail/>}/>
            </Route>

        </Route>
        
        
    </Routes>
  );
}

export default App;

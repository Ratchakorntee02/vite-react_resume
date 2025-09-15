// import logo from './logo.svg';
// import './App.css';
import MyPicture from './รปจต.jpg';
import NavbarComponent from './component/navbar.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
import YourSelf from './component/yourself.jsx'
import WorKExp from './component/experience.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MySkill from './component/skill.jsx';
import Contact from './component/contact.jsx';
import Layout from './component/layout.jsx';
import Container from './component/container.jsx';
import Preface from './component/preface.jsx';

function App() {
  return ( 
      <Router>
        <Layout>
          <div className="text-center mt-4">
          <h1 className="font-story text-[black] text-center">My Resume</h1>
          <img src={MyPicture} className="mx-auto w-[150px] mb-[10px] mt-[10px] border border-[black] rounded-lg" alt="MyPicture"/>
            <NavbarComponent/>
              </div>
                <Container>
                  <Routes>
                    <Route index element={<Preface/>}/>
                    <Route path="tab1" element={<YourSelf/>}/>
                    <Route path="tab2" element={<WorKExp/>}/>
                    <Route path="tab3" element={<MySkill/>}/>
                    <Route path="tab4" element={<Contact/>}/>
                    <Route path="tab5" element={<Preface/>}/>
                  </Routes>
                </Container>
          </Layout>
        </Router>
  )
}

export default App;
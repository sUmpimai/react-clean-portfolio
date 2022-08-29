import React from 'react';
import Worklist from './pages/work/WorkList.js';
import Footer from './pages/Footer.js';
import Contact from './pages/Contact.js';
import Jumbotron from './component/jumbotron/Jumbotron.js';
import Navbar from './component/navbar/Navbar.js';

function App() {
  return (
    <>  
    <Navbar position={'fixed'}/>
    <Jumbotron/>
    <Worklist/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;

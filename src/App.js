import React from 'react';
import Header from './component/Header.js';
import Portfolio from './component/Portfolio.js';
import profilePhoto from './img/01_img.jpg';

function App() {
  return (
    <>
    <Header/>

    {/* section intro */}
    <div className='container'>
    <section className='intro'>
      <div className='row mb-5 mt-5'>
        <div className='col-8'>
          <h1>Hello<span className='dot'>.</span><br/> I am Jane Doe Lorem</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque</p>
        </div>
        <div className='col-4'>
          <img src={profilePhoto} alt="profile-pic" />
        </div>
      </div>
    </section>
    </div>
    <Portfolio/>

    {/* section contact - Contact component*/}
    <section id="contact" className='contact text-center bg-light mt-5 p-3'>
          <h2>I am John Doe Lorem</h2>
          <p>Like my work? You can contact me now!</p>
          <a href='contact'>Contact me</a>
          <ul className='social-bookmark'>
            <li>facebook</li>
            <li>instagram</li>
            <li>dribble</li>
            <li>twitter</li>
            <li>behance</li>
          </ul>
    </section>

    {/* sectio footer - footer component */}
    <div className='footer p-3'>
      <p>All © reserved</p>
    </div>
    </>

  );
}

export default App;

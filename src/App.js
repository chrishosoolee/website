import './App.css';
import {useState} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    
    <div className={darkMode ? "BackgroundDark" : "BackgroundLight"}>
      <header>
        <div className='Header'>
          <ul>
            <li>
              <a href="./about.html" target="_blank">Work</a>
            </li>
            <li>
              <a href="./work.html" target="_blank">Experience</a>
            </li>
            <li>
              <a href="./work.html" target="_blank">About</a>
            </li>
          </ul>
        </div>

      </header>
      
    <div id='content'>
      <main className='main-section'>
        <section id='landing'>
          <div>
            <h1>Hi, my name is</h1>
          </div>
          <div>
            <h2 className='big-header'>Chris Lee.</h2>
          </div>
          <div>
            <p>I'm a (mechanical engineer) (product manager) software developer, focused on building great digital products.</p>
          </div>
          <div>
            <ul className='socials'>
              <li>
                <a 
                href="https://www.linkedin.com/in/chris-hosoo-lee/" 
                className='fa fa-linkedin' 
                target="_blank">
                </a>
              </li>
              <li>
                <a href="mailto:chrishosoolee@gmail.com"
                className='fa fa-envelope'>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

    </div>
    
      
      <button onClick={() => setDarkMode(!darkMode)}>
        Change {darkMode ? "Light" : "Dark"} Color
      </button>
    </div>
    

    
  );
}
export default App;

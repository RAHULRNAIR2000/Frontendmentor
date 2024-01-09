import card from '../src/images/image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="card">
          <img src={require('../src/images/image-qr-code.png')} className="logo" alt="QR Code" />
          <p className = "para">
         improve your front end skills by building projects
         </p>
         <p className = "para1">
          Scan the QR vode to visit Frontend Mentor and take your coding skills to the next level
         </p>
        </div>       
       
      </header>
    </div>
  );
}

export default App;

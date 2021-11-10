import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList'
import Footer from './Footer';
import './Footer.css';
function App() {
  return (
    <div className="App">
      <Title />
      <img src={logo} />
      <POPOSList />
      <div className="FOOTER">
      <Footer />
      </div>
    </div>
  );
}

export default App;

import './style.css'
import './layout.css'
import HomePage from './pages/HomePage';
import Header from './compontents/header';
import Footer from './compontents/footer';

function App() {
  return (
    <div className="bg-[#FBFCFA] dark:bg-[#000000]">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;



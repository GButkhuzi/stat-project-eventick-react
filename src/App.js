import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Searchbox from './Components/Searchbox';
import Cardsection from './Components/Cardsection';
import Eventsection from './Components/Eventsection';
import Brandsection from './Components/Brandsection';
import Blogsection from './Components/Blogsection';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Header />
      <Searchbox />
      <Cardsection />
      <Eventsection />
      <Brandsection />
      <Blogsection />
      <Footer />
    </div>
  );
}

export default App;

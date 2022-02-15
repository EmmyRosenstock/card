import Header from '../../Components/Header/header';
import './home.css';
import CardInsight from '../../Components/cardInsight/Card'
import SearchArea from '../../Components/seacharea/SearchArea'

const Home = () => {
  return (
    <div className="App">
     <Header/>
     <CardInsight/>
     <SearchArea/>
    </div>
  );
}

export default Home;
import './App.css';
import requests from './Request';
import Banner from './components/Banner';
import Nav from './components/Nav';


import Row from './components/Row';



function App() {
  return (
    <div >
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      
    
        <Row isposter={true}
          title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row   title="Trending" fetchUrl={requests.fetchTrending}/>
        <Row   title=" top Rated Movies " fetchUrl={requests.fetchTopRated}/>
        <Row   title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row   title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row   title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row   title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>


    </div>
  );
}

export default App;






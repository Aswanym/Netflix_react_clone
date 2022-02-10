import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">
      {/* nav */}
      <Navbar />

      {/* banner */}
      <Banner />

      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOrginals} isLargeRow />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMDEY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTERIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

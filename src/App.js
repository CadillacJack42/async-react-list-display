
import './App.css';
import { useFetch } from './useFetch';
import ArtistList from './ArtistList';

function App() {
  const { artists, setArtists } = useFetch();
  console.log(artists);
  return (
    <div className="App">
      <ArtistList artists={artists}/>
    </div>
  );
}

export default App;

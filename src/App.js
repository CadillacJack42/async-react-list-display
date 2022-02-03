
import './App.css';
import { useFetch } from './useFetch';
import ArtistList from './ArtistList';
import CannaList from './CannaList';

function App() {
  const { artists, cannabis } = useFetch();
  return (
    <div className="App">
      <ArtistList artists={artists} />
      <CannaList cannabis={cannabis} />
    </div>
  );
}

export default App;

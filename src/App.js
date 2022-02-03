
import './App.css';
import { useFetch } from './useFetch';
import ArtistList from './ArtistList';
import CannaList from './CannaList';
import BooksList from './BooksList';

function App() {
  const { artists, cannabis, books } = useFetch();
  return (
    <div className="App">
      <ArtistList artists={artists} />
      <CannaList cannabis={cannabis} />
      <BooksList books={books} />
    </div>
  );
}

export default App;

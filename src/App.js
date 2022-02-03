
import './App.css';
import { useFetch } from './useFetch';
import ArtistList from './ArtistList';
import CannaList from './CannaList';
import BooksList from './BooksList';
import BeatlesList from './BeatlesList';

function App() {
  const { artists, cannabis, books, beatles } = useFetch();
  return (
    <div className="App">
      <h1>React Async List</h1>
      <ArtistList artists={artists} />
      <CannaList cannabis={cannabis} />
      <BooksList books={books} />
      <BeatlesList beatles={beatles} />
    </div>
  );
}

export default App;

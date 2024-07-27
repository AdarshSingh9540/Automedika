import 'regenerator-runtime/runtime'; // Add this line at the very top
import Bar from "./components/Bar"
import AppBar from './components/AppBar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
      <AppBar />
      {/* <SearchBar /> */}
      <Bar/>
    </>
  );
}

export default App;

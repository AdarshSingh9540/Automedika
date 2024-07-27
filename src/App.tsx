import 'regenerator-runtime/runtime'; // Add this line at the very top
import Bar from "./components/Bar"
import AppBar from './components/AppBar';

function App() {
  return (
    <>
      <AppBar />

      <Bar/>
    </>
  );
}

export default App;

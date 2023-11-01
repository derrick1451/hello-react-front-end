import { Routes, Route } from 'react-router-dom';
import Greetings from './components/greetings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  );
}
export default App;

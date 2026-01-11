import './App.css';
import Listing from '../components/Listing';
import type { Item } from '../components/Listing';
import etsyData from '../etsy.json';

function App() {
  return (
    <div className="container">
      <Listing items={etsyData as Item[]} />
    </div>
  );
}

export default App;

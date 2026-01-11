import './App.css';
import Listing from '../Listing/Listing';
import type { Item } from '../Listing/Listing';
import etsyData from '../../etsy.json';

function App() {
  return (
    <div className="container">
      <Listing items={etsyData as Item[]} />
    </div>
  );
}

export default App;

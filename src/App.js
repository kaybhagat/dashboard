import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import allItems from './allItems';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Pages/Dashboard';
import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2';


function App() {


  const [items, setItems] = useState(allItems);
  const [pinned, setPinned] = useState([]);

  useEffect(()=> {
    const newPinnedList = pinned.sort((a,b) => {
      return(
      a.page - b.page ||
      a.number-b.number
      )
    });
    setPinned(newPinnedList);

  }, [pinned]);


  const handlePinClick = (id, itemisPinned) => {
    if(itemisPinned){
      const newPinnedItem = items.filter(item => item.id === id)[0];
      const newPinnedList = [...pinned, newPinnedItem];
      setPinned(newPinnedList);
    }  else {
      const newPinnedList = pinned.filter(item => item.id !== id);
      setPinned(newPinnedList);
    }
    
  }



  return (
    <div className="App">
      <Router>
        <div >
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Dashboard items={pinned} handlePinClick={handlePinClick} />} />
            <Route path='/Page1' element={<Page1 items={items} handlePinClick={handlePinClick} />} />
            <Route path='/Page2' element={<Page2 items={items} handlePinClick={handlePinClick} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

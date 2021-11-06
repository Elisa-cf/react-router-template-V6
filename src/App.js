import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Contact from './components/Contact';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
     <header>
     <Header />
     </header>
     <Routes>
       <Route exact path='/' element={<Home />}/>
       <Route path='/users' element={<Users />}/>
       <Route path='/contact' element={<Contact />}/>
      {/* instead of /contact you could put /pizza, it doesn't matter. */}
     </Routes>
    </div>
  );
}

export default App;

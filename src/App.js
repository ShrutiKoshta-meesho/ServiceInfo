
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Service from './pages/Service';
import Team from './pages/Team';
import User from './pages/User';

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      {/* <Route path='/'element={<Sidebar/>}/> */}
      <Route path='/service'element={<Service/>}/>
      <Route path='/team'element={<Team/>}/>
      <Route path='/user'element={<User/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  );
};

export default App;

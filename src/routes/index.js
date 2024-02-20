import { Routes, Route} from 'react-router-dom'

import Home from '../pages/Home';
import Register from '../pages/Register';
import Admin from '../pages/Admin'

import Contacts from '../pages/Contacts';

import Private from './Private'

function RoutesApp(){
  return(
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/register' element={ <Register/> } />

      <Route path='/admin' element={ <Private> <Admin/> </Private> } />

      <Route path='/contacts' element={ <Contacts/> } />
    </Routes>
  )
}

export default RoutesApp;
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loarder from './components/Loarder/Loarder.comopnents';

function App() {
  return (
    <Fragment>
<Routes>
  <Route index element={<Loarder />} />
  <Route path='/contact' element={''}/>
  <Route />
  <Route />
</Routes>
    </Fragment>
  );
}

export default App;

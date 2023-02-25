import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loarder from './components/Loarder/Loarder.comopnents';
import Socials from './components/whatsapp/WhatsApp';

function App() {
  return (
    <Fragment>
<Routes>
  <Route index element={<Loarder />} />
  <Route path='/contacts' element={<Socials />}/>
</Routes>
    </Fragment>
  );
}

export default App;

import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loarder from './components/Loarder/Loarder.comopnents';
import More from './components/More/More.component';
import Socials from './components/whatsapp/WhatsApp';

function App() {
  return (
    <Fragment>
<Routes>
  <Route index element={<Loarder />} />
  <Route path='/contacts' element={<Socials />}/>
  <Route path='/more' element={<More />}/>
</Routes>
    </Fragment>
  );
}

export default App;

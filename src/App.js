import React, {Fragment} from 'react';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header'
function App() {
  return (
    <>
      <Header/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;

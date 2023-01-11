import { ButtonStart } from './components/ButtonStart';
import { Colors } from './components/Colors';
import Filter from './components/Filter';
import { JoinRoom } from'./components/JoinRoom';
import { Users } from './components/Users';
import { useState } from 'react';
import { GlobalStyle } from './styles/global';

function App() {
  const [filterVisible, setFilterVisible] = useState(false);

  function handleOpenFilter() {
    setFilterVisible(true);
  }

  function handleCloseFilter() {
    setFilterVisible(false);
  }

  return (
    <>
    <JoinRoom/>
    <Users OpenFilter={handleOpenFilter}/>
    <ButtonStart/>
    <Colors/>
    <Filter 
    isOpen={filterVisible}
    onRequestClose={handleCloseFilter}
    />
    <GlobalStyle/>
    </>
    );
};

export default App;
import React from 'react';
import IdSearch from './components/IdSearch';
import NameSearch from './components/NameSearch';

class App extends React.Component {

    render() {
        return (
<div>
  <IdSearch />
  <NameSearch />
  <h2>Reporting Poke Zone :</h2>
  <div id="reportingArea"></div>
</div>
        );
    }
}

export default App;
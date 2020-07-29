import React from 'react';

import MainSidebar from './components/MainSidebar'
import ContentForm from './components/ContentForm'

const App = () =>
  <div className="App">
    <div class="container-fluid">
      <div class="row">
        <MainSidebar />
        <ContentForm />
      </div>
    </div>
  </div>

export default App;

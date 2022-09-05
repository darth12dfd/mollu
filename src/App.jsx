import React, { PureComponent } from 'react';
import AppLayout from './components/AppLayout';
import Overview from './components/main/Overview';

class App extends PureComponent {
  render() {
    return (
      <AppLayout>
        <Overview />
      </AppLayout>
    );
  }
}

export default App;

import React, { PureComponent } from 'react';
import AppLayout from './components/AppLayout';
import MainPage from './components/main/MainPage';

class App extends PureComponent {
  render() {
    return (
      <AppLayout>
        <MainPage />
      </AppLayout>
    );
  }
}

export default App;

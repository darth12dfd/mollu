import React, { PureComponent } from 'react';
import Overview from './Overview';
import TransactionList from './TransactionList';

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Overview />
        <TransactionList />
      </React.Fragment>
    );
  }
}

export default MainPage;

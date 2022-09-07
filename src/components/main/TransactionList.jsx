import React, { PureComponent } from 'react';

import Heading from '../../ui/Heading';
import Card from '../../ui/Card';

import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionTable from './TransactionTable';

import Api from '../../Api';

class TransactionList extends PureComponent {
  state = {
    transactions: [],
  };

  componentDidMount() {
    Api.get('http://localhost:4000/transactions', { params: { school: '게헨나' } }).then(
      (response) => this.setState({ transactions: response.data }),
    );
  }

  render() {
    const { transactions } = this.state;
    return (
      <div>
        <Heading level={3}>학생 인명부</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilter />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
      </div>
    );
  }
}

export default TransactionList;

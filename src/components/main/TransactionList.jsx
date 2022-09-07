import React, { PureComponent } from 'react';

import Heading from '../../ui/Heading';
import Card from '../../ui/Card';

import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionTable from './TransactionTable';

class TransactionList extends PureComponent {
  state = {
    transactions: [
      {
        id: 1,
        name: '소라사키 히나',
        school: '게헨나',
        age: 17,
        grade: 3,
      },
    ],
  };

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

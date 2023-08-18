import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';

const SelectedCoinsTable = () => {
  const coins = useSelector(state => state.coins.selected)
  console.log(333, coins);
  const keys = Object.keys(coins[0])
  const values = Object.values(coins[0])
  const columns = [
    {
      key: '1',
      title: 'Info',
      dataIndex:''  ,

    },
    {
      key: '2',
      title: 'DataCoin',
      dataIndex: '',
    },
    // {
    //   key: '3',
    //   title: 'vwap24Hr',
    //   dataIndex: 'vwap24Hr',
    // },


  ];

  return <Table columns={columns} dataSource={coins} />;

};
export default SelectedCoinsTable;
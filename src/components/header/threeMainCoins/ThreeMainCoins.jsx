import React from 'react';
import { Table } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const columns = [
  {
    dataIndex: 'symbol',
  },
  {
    dataIndex: 'supply',
  },
];


const ThreeMainCoins = () => {
  const coins = useSelector(state => state.coins.coins.data)
  // const coins3 = coins.filter((i, index) => i[index] < 3)
  // console.log(2,coins3);
  console.log(1,coins);



  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };


  return <Table
    // rowSelection={rowSelection}
    
    columns={columns}
    dataSource={coins}
    size='small'
    bordered
    title={() => 'Популярные монеты:'}
  />;
};
export default ThreeMainCoins;
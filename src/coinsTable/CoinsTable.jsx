import React from 'react';
import { Table } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
   },
  {    
    title: 'Name',
    dataIndex: 'name',
    render: name=>{
      return <a>{name}</a>
    },
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
  },
  {
    title: 'Supply',
    dataIndex: 'supply',
    sorter: (a,b) => a.supply - b.supply
    
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const CoinsTable = () => {
const coins = useSelector(state=>state.coins.coins.data)
console.log(2,coins);

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
  
  return <Table rowSelection={rowSelection} columns={columns} dataSource={coins} />;
};
console.log(123,data);
export default CoinsTable;
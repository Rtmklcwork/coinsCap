import React from 'react';
import { Table } from 'antd';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSelectedCoin } from '../slices/coinsSlice';


const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
  },
  {
    dataIndex: 'symbol',
  },

  {
    title: 'Name',
    dataIndex: 'name',
    render: name => {
      return <a>{name}</a>
    },
  },
  {
    title: 'vwap24Hr',
    dataIndex: 'vwap24Hr',
  },
  {
    title: 'Change(24Hr)',
    dataIndex: 'changePercent24Hr',
  },
  {
    title: 'Market Cup',
    dataIndex: 'marketCapUsd',
  },
  {
    title: 'Price',
    dataIndex: 'priceUsd',
    sorter: (a, b) => a.supply - b.supply

  },
  {
    title: 'Buy Coin',
    dataIndex: 'BuyCoin',
    render: () => <button>+</button>

  },
];


const CoinsTable = () => {
  const coins = useSelector(state => state.coins.coins.data)
  const dispatch = useDispatch()
  console.log(1, coins);
  const navigate = useNavigate()

  return <Table onRow={(_,rowIndex) => {
    return {
      onClick: () => {
        const selectedCoin = coins.filter(i => (i.rank-1) == rowIndex)
        navigate('/selected')
        dispatch(getSelectedCoin(selectedCoin))

      }
    }
  }} columns={columns} dataSource={coins} />;
 
};
export default CoinsTable;
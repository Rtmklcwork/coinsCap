import React, { useState } from 'react';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSelectedCoin } from '../../slices/coinsSlice';
import ModalWindow from '../../modalWindow/ModalWindow';



const CoinsTable = () => {

  const [modalActive, setModalActive] = useState(false)

  const coins = useSelector(state => state.coins.coins.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const columns = [
    {
      key: '1',
      title: 'Rank',
      dataIndex: 'rank',
    },
    {
      key: '2',
      dataIndex: 'symbol',
      title: 'ID'
    },

    {
      key: '3',
      title: 'Name',
      dataIndex: 'name',
      render: name => {
        return <a onClick={() => {
          const selectedCoin = coins.find((i) => i.name === name)
          navigate('/selected')
          dispatch(getSelectedCoin(selectedCoin))
        }}>{name}</a>
      },
    },
    {
      key: '4',
      title: 'vwap24Hr',
      dataIndex: 'vwap24Hr',
    },
    {
      key: '5',
      title: 'Change(24Hr)',
      dataIndex: 'changePercent24Hr',
    },
    {
      key: '6',
      title: 'Market Cup',
      dataIndex: 'marketCapUsd',
    },
    {
      key: '7',
      title: 'Price',
      dataIndex: 'priceUsd',
      sorter: (a, b) => a.supply - b.supply

    },
    {
      key: '8',
      title: 'Buy Coin',
      dataIndex: 'BuyCoin',
      render: () =>
        <button
          style={{
            backgroundColor: 'white',
            border: '0.5px solid #1677ff',
            color: '#1677ff'
          }}
          onClick={() => {
            setModalActive(true)
          }}>
          +
        </button>

    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={coins}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => { dispatch(getSelectedCoin(record)) }, // click row
            onDoubleClick: (event) => { }, // double click row
            onContextMenu: (event) => { }, // right button click row
            onMouseEnter: (event) => { }, // mouse enter row
            onMouseLeave: (event) => { }, // mouse leave row
          };
        }}
      />;
      <ModalWindow active={modalActive} setActive={setModalActive} />

    </>
  )
};
export default CoinsTable;

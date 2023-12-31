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
      dataIndex: 'symbol',
    },

    {
      key: '2',
      title: 'Name',
      dataIndex: 'name',
      render: name => {
        return <a onClick={() => {
          const selectedCoin = coins.find((i) => i.name === name)
          console.log(selectedCoin, 111);
          navigate('/selected')
          dispatch(getSelectedCoin(selectedCoin))
        }}>{name}</a>
      },
    },
    {
      key: '3',
      title: 'vwap24Hr',
      dataIndex: 'vwap24Hr',
    },
    {
      key: '4',
      title: 'Change(24Hr)',
      dataIndex: 'changePercent24Hr',
    },
    {
      key: '5',
      title: 'Market Cup',
      dataIndex: 'marketCapUsd',
    },
    {
      key: '6',
      title: 'Price',
      dataIndex: 'priceUsd',
      sorter: (a, b) => a.supply - b.supply

    },
    {
      key: '7',
      title: 'Buy Coin',
      dataIndex: 'BuyCoin',
      render: () => <button onClick={() => {
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

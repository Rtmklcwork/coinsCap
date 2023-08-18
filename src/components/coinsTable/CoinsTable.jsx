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
  console.log(1, coins);
  const navigate = useNavigate()
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
        return <a onClick={() => {
          const selectedCoin = coins.filter((i) => i.name === name)
          navigate('/selected')
          dispatch(getSelectedCoin(selectedCoin))
        }}>{name}</a>
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
      render: () => <button onClick={() => setModalActive(true)}>+</button>

    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={coins} />;
      <ModalWindow active={modalActive} setActive={setModalActive} />

    </>
  )
};
export default CoinsTable;

// onRow={(record, rowIndex) => {
//   return {
//     onDoubleClick: () => {
//       const selectedCoin = coins.filter((i, index) => index === rowIndex)
//       navigate('/selected')
//       dispatch(getSelectedCoin(selectedCoin))

//     }
//   }
// }}


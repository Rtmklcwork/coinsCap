import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';

const SelectedCoinsTable = () => {
  const coins = useSelector(state => state.coins.selected)


  const columns = [
    {
      title: 'Информация',
      dataIndex: 'info',
      key: 'info'
    },
    {
      title: 'Данные о валюте',
      dataIndex: 'dataСurrency',
      key: 'dataСurrency'
    }
  ]


  const infoTitle = ['Цена',
    'Доступное предложение для торговли',
    'Общее количество доступных активов',
    'Объем торгов за последние 24 часа',
    'Изменение стоимости в процентах за 24 часа',
    'Средняя цена по объему за 24 часа',
    'Сайт']

  const data2 = Object.values(coins).filter((i, index) => index === 4 || index === 8 || index === 5 || index === 7 || index === 10 || index === 9 || index === 11).map((item, index) => ({ // тут делаешь массив объектов
    key: index,
    info: infoTitle[index],
    dataСurrency: item
  }))




  return <Table columns={columns} dataSource={data2} />;

};
export default SelectedCoinsTable;

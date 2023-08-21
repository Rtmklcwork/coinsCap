import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';

const SelectedCoinsTable = () => {
  const coins = useSelector(state => state.coins.selected)
  console.log(333, coins);

  const columns = [ // это по дефолту ты сам создаешь. Структура таблицы;
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

  const response = { // в таком виде у тебя данные
    changePercent24Hr: '-2.3432450653016692',
    explorer: 'https://xrpcharts.ripple.com/#/graph/',
    id: 'xrp',
    marketCapUsd: '26458206037.5454690891050560',
    maxSupply: '100000000000.0000000000000000',
    name: 'XRP',
    priceUsd: '0.5827281593738654',
    rank: '5',
    supply: '45404028640.0000000000000000',
    symbol: 'XRP',
    volumeUsd24Hr: '608715166.0155417302948480',
    vwap24Hr: '0.5886543998978036'
  }


  const infoTitle = ['Цена',
    'Доступное предложение для торговли',
    'Общее количество доступных активов',
    'Объем торгов за последние 24 часа',
    'Изменение стоимости в процентах за 24 часа',
    'Средняя цена по объему за 24 часа',
    'Сайт']

  const data2 = Object.values(coins[0]).filter((i, index) => index == 4 || index == 8 || index == 5 || index == 7 || index == 10 || index == 9 || index == 11).map((item, index) => ({ // тут делаешь массив объектов 
    key: index,
    info: infoTitle[index],
    dataСurrency: item
  }))


  console.log(data2); // посмотреть 

  return <Table columns={columns} dataSource={data2} />;

};
export default SelectedCoinsTable;
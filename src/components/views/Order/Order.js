import React from 'react';
import styles from './Order.module.scss';
import Paper from '@material-ui/core/Paper';
const demoContent = [
  {id: '1', tableNo: 1, status: 'READY', menu: 'pizza drinks', drinks: 'drink', price: '30PLN'},
  {id: '2', tableNo: 3, status: 'IN DELIVERY', menu: 'pizza drinks', drinks: 'drink', price: '30PLN'},
  {id: '3', tableNo: 6, status: 'ORDERED', menu: 'pizza drinks pizza drinks pizza drinks', drinks: 'drink', price: '30PLN'},
  {id: '4', tableNo: 2, status: 'ORDERED', menu: 'pizza drinks pizza drinks', drinks: 'drink', price: '30PLN'},
  {id: '5', tableNo: 4, status: 'ORDERED', menu: 'pizza drinks', drinks: 'drink', price: '30PLN'},
  {id: '6', tableNo: 5, status: 'ORDERED', menu: 'pizza drinks', drinks: 'drink', price: '30PLN'},
  {id: 'new', tableNo: '', status: '', menu: '', drinks: '', price: ''},
];


const Order = (value) => {
  const id = value.match.params.id;
  
  const content = () => {
    const info = [];
    demoContent.map(row => {
      if (row.id === id){
        info.push(
          <div key={id}>
            <p>Id: {row.id}</p>
            <p>Table no: {row.tableNo}</p>
            <p>Status: {row.status}</p>
            <p>Menu: {row.menu}</p>
            <p>Drinks: {row.drinks}</p>
            <p>Price: {row.price}</p>
          </div>
        );
      }
    });
    return info;
  };
  
  return (
    <Paper className={styles.component}>
      <h3 className={styles.title}>
        Order
      </h3>
      <div>
        {content()}
      </div>
    </Paper>
  );
};
export default Order;
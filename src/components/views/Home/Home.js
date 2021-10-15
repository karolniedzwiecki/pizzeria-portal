import React from 'react';
import styles from './Home.module.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const demoStatistic = [
  {id: 1, table: 1, status: 'free table'},
  {id: 2, table: 2, status: 'ordered'},
  {id: 3, table: 1, status: 'thinking'},
  {id: 4, table: 5, status: 'prepared'},
  {id: 5, table: 3, status: 'delivered'},
  {id: 6, table: 6, status: 'paid'},
  {id: 7, table: 0, status: 'ordered online'},
  {id: 8, table: 0, status: 'in delivery'},
  {id: 9, table: 0, status: 'done'},
  {id: 10, table: 0, status: 'done'},
];

const demoBooking = [
  {id: 1, status: 'booked', eventName: 'birthday'},
  {id: 2, status: 'booked', eventName: ''},
  {id: 3, status: 'event', eventName: 'pizza time'},
  {id: 4, status: 'booked', eventName: ''},
  {id: 5, status: 'event', eventName: 'happy hours'},
  {id: 6, status: 'booked', eventName: ''},
];

const orderingStatus = {
  free: [],
  ordered: [],
  thinking: [],
  prepared: [],
  delivered: [],
  paid: [],
};

const deliveryStatus = {
  orderedOnline: [],
  inDelivery: [],
  done: [],
};

const bookingStatus = {
  booked: [],
};

const eventStatus = {
  events: [],
};

const statistic = () => {
  demoStatistic.map(row => {
    if (row.status === 'free table'){
      orderingStatus.free.push(row.table);
    } else if (row.status === 'ordered'){
      orderingStatus.ordered.push(row.table);
    } else if (row.status === 'thinking'){
      orderingStatus.thinking.push(row.table);
    } else if (row.status === 'prepared'){
      orderingStatus.prepared.push(row.table);
    } else if (row.status === 'delivered'){
      orderingStatus.delivered.push(row.table);
    } else if (row.status === 'paid'){
      orderingStatus.paid.push(row.table);
    } else if (row.status === 'ordered online'){
      deliveryStatus.orderedOnline.push(row.table);
    } else if (row.status === 'in delivery'){
      deliveryStatus.inDelivery.push(row.table);
    } else if (row.status === 'done'){
      deliveryStatus.done.push(row.table);
    }
  });
};
statistic();

const booking = () => {
  demoBooking.map(row => {
    if (row.status === 'booked'){
      bookingStatus.booked.push(row.table);
    } else if (row.status === 'event'){
      eventStatus.events.push(row.table);
    } 
  });
};
booking();


const elemCells = (element) => {
  const cells = [];
  for(let item in element){
    cells.push(<TableCell key={item}>{element[item].length}</TableCell>);
  }
  return(cells);
};


const Home = () => {
    
  return (
    <div className={styles.component}>
      <Paper className={styles.component}>
        <h2 className={styles.title}>
          Statistic - show number of orders today
        </h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Free table</TableCell>
              <TableCell>Ordered</TableCell>
              <TableCell>Thinking</TableCell>
              <TableCell>Prepared</TableCell>
              <TableCell>Delivered</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Ordered online</TableCell>
              <TableCell>In delivery</TableCell>
              <TableCell>Done</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>At restaurant</TableCell>
              {elemCells(orderingStatus)}
            </TableRow>
            <TableRow>
              <TableCell>Delivery</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              {elemCells(deliveryStatus)}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <Paper className={styles.component}>
        <h2 className={styles.title}>
          Booking and Events
        </h2>
        <Table className={styles.booking}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Number of occasions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Booked</TableCell>
              {elemCells(bookingStatus)}
            </TableRow>
            <TableRow>
              <TableCell>Events</TableCell>
              {elemCells(eventStatus)}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Home;
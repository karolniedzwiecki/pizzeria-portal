import React from 'react';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import styles from './Tables.module.scss';

const demoContent = [
  {id: 1, time:12.5, status: 'booking', eventName: 'birthday'},
  {id: 2, time:15.5, status: 'booking', eventName: ''},
  {id: 3, time:16.0, status: 'events', eventName: 'pizza time'},
  {id: 4, time:22.5, status: 'booking', eventName: ''},
  {id: 5, time:18.5, status: 'events', eventName: 'happy hours'},
  {id: 6, time:22.0, status: 'booking', eventName: ''},
];


const Tables = () => {

  const numberToHour = (number) => {
    return (Math.floor(number) % 24) + ':' + (number % 1 * 60 + '').padStart(2, '0');
  };

  const hour = () => {
    const item = [];
    for(let i = 12.0; i <= 24.0; i+=0.5)
    {
      item.push(<TableRow key={i}>
        <TableCell>{numberToHour(i)}</TableCell>
        {demoContent.map(row => (
          i === row.time ? (
            <TableCell key={row.id}>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/${row.status}/${row.id}`}>
                {`${row.eventName} ${row.status} `}
              </Button>
            </TableCell>
          ) :
            (<TableCell key={row.id} />)
        ),)}
      </TableRow>);
    }
    return(item);
  };

  return (
    <Paper className={styles.component}>
      <div>
        <Grid container justify="space-around">
          <form className={styles.container} noValidate>
            <TextField
              id="date"
              label="Select date"
              type="date"
              defaultValue="2020-06-10"
              className={styles.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="time"
              label="Select time"
              type="time"
              defaultValue="10:30"
              // min="10:00"
              // max="22:00"
              // step=1800
              className={styles.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            {demoContent.map(row => (
              <TableCell key={row.id}>
                Table no {row.id}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {hour()}
        </TableBody>
      </Table>
      <Grid container justify="space-around">
        <div className={styles.newButtons}>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>NEW BOOKING </Button>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>NEW EVENT </Button>
        </div>
      </Grid>
    </Paper>
  );
};

export default Tables;
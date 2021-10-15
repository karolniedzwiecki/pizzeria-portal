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
  {id: 1, status: 'booking', eventName: 'birthday'},
  {id: 2, status: 'booking', eventName: ''},
  {id: 3, status: 'events', eventName: 'pizza time'},
  {id: 4, status: 'booking', eventName: ''},
  {id: 5, status: 'events', eventName: 'happy hours'},
  {id: 6, status: 'booking', eventName: ''},
];


const Tables = () => {

    const hour = (time) => {
        const item = [];
        for(let i = time; i < 10; i++) 
        {
          item.push(<TableRow key={i}>
            <TableCell>{i}</TableCell>
            {demoContent.map(row => (
              i === row.id ? (
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
            {hour(1)}
          </TableBody>
        </Table>
      </Paper>
    );
};

export default Tables;
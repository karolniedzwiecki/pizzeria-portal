import React from 'react';
//import { Link } from 'react-router-dom';
import styles from './Events.module.scss';

import Paper from '@material-ui/core/Paper';

const demoContent = [
  {id: '1', status: 'booking', hour: '10:30', eventName: 'birthday'},
  {id: '2', status: 'booking', hour: '10:30', eventName: ''},
  {id: '3', status: 'events', hour: '10:30', eventName: 'pizza time'},
  {id: '4', status: 'booking', hour: '10:30', eventName: ''},
  {id: '5', status: 'events', hour: '10:30', eventName: 'happy hours'},
  {id: '6', status: 'booking', hour: '10:30', eventName: ''},
  {id: 'new', status: '', hour: '', eventName: ''},
];

const Events = (value) => {

    const id = value.match.params.id;

    const content = () => {
      const info = [];
      demoContent.map(row => {
        if (row.id === id){
          info.push(
            <div key={id}>
              <p>Id: {row.id}</p>
              <p>Hour: {row.hour}</p>
              <p>Status: {row.status}</p>
              <p>Event name: {row.eventName}</p>
            </div>
          );
        }
      });
      return info;
    };
    return (
        <Paper className={styles.component}>
        <h3 className={styles.title}>
          Informations
        </h3>
        <div>
          {content()}
        </div>
      </Paper>
    );
};

export default Events;
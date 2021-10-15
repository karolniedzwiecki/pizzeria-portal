import React from 'react';
import styles from './Kitchen.module.scss';

import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const demoContent = [
  {id: 1, tableNo: 1, status: 'READY', menu: 'pizza drinks', drinks: 'drink'},
  {id: 2, tableNo: 3, status: 'IN DELIVERY', menu: 'pizza drinks', drinks: 'drink'},
  {id: 3, tableNo: 6, status: 'ORDERED', menu: 'pizza drinks pizza drinks pizza drinks', drinks: 'drink'},
  {id: 4, tableNo: 2, status: 'ORDERED', menu: 'pizza drinks pizza drinks', drinks: 'drink'},
  {id: 5, tableNo: 4, status: 'ORDERED', menu: 'pizza drinks', drinks: 'drink'},
  {id: 6, tableNo: 5, status: 'ORDERED', menu: 'pizza drinks', drinks: 'drink'},
];

const Kitchen = () => {

    const GreenCheckbox = withStyles({
        root: {
          color: green[400],
          '&$checked': {
            color: green[600],
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);

    return (
        <div className={styles.component}>
            <Grid container justify="space-around">
                {demoContent.map(item => (
                <div key={item.id} className={styles.paper}>
                    <Paper className={styles.component}>
                    <p>Table: <b>{item.tableNo}</b></p>
                    <p>Status: <b>{item.status}</b></p>
                    <p>Menu:</p>
                    <div className={styles.menu}>
                        <p><b>{item.menu}</b></p>
                        <p><b>{item.drinks}</b></p>
                    </div>
                    <FormControlLabel
                        control={<GreenCheckbox name='{item.id}' />}
                        label="Done"
                    />
                    </Paper>
                </div>
                ))}
            </Grid>
        </div>
    );
};

export default Kitchen;
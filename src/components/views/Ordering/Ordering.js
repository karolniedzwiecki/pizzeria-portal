import React from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './Ordering.scss';

const Ordering = () => {

    let { id } = useParams();

    return (
        <div className={styles.component}>
            <h2>Ordering view</h2>
            <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`}>Order 1 {id}</Link>
            <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New order</Link>
        </div>
    );
};

export default Ordering;
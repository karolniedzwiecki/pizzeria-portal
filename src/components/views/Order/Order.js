import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Order.scss';

const Order = () => {

    let { id } = useParams();

    return (
        <div className={styles.component}>
            <Link to={`${process.env.PUBLIC_URL}/ordering`}>Ordering view</Link>
            <h2>Order view 1 {id}</h2>
        </div>
    );
};

export default Order;
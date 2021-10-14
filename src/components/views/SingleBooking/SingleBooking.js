import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './SingleBooking.module.scss';

const SingleBooking = () => {

    let { id } = useParams();

    return (
        <div className={styles.component}>
            <Link to={`${process.env.PUBLIC_URL}/tables/booking`}>Booking</Link>
            <h2>SingleBooking view {id}</h2>
        </div>
    );
};

export default SingleBooking;
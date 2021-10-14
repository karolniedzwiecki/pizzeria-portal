import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Booking.module.scss';

const Booking = () => {
    return (
        <div className={styles.component}>
            <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
                <h2>New booking</h2>
            </Link>
            <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>
                <h2>Single Booking</h2>
            </Link>
        </div>
    );
};

export default Booking;
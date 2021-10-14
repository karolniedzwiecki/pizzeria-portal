import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Events.module.scss';

const Events = () => {
    return (
        <div className={styles.component}>
            <h2>Events view</h2>
            <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New event</Link>
            <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Single Event</Link>
        </div>
    );
};

export default Events;
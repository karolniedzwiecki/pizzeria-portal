import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './SingleEvent.module.scss';

const SingleEvent = () => {

    let { id } = useParams();

    return (
        <div className={styles.component}>
            <Link to={`${process.env.PUBLIC_URL}/tables/events`}>Events</Link>
            <h2>SingleEvent view {id}</h2>
        </div>
    );
};

export default SingleEvent;
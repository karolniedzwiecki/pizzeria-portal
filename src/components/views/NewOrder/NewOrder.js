import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewOrder.module.scss';

const NewOrder = () => {
    return (
        <div className={styles.component}>
            <Link to={`${process.env.PUBLIC_URL}/ordering`}>Ordering view</Link>
            <h2>NewOrder view</h2>
        </div>
    );
};

export default NewOrder;
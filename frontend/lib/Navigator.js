import React from 'react';
import styles from './visbol.module.css';

function Navigator(props) {
    return (
        <div className={styles.navigator}>
            <p className={styles.navigatortitle}>VisBOL Navigator</p>
            <div className={styles.sizeadjustment}>
                <p className={styles.instruction}>Zoom</p>
                <input 
                type='range'
                min='0.5'
                max='7'
                step='0.5'
                value={props.size}
                onChange={e => {
                    props.setSize(e.target.value);
                }}
                />
            </div>
        </div>
    )
}

export default Navigator;
import React from 'react';
import styles from './visbol.module.css';

function Navigator(props) {
    return (
        <div className={styles.navigator}>
            <div className={styles.titlecontainer}>VisBOL</div>
            <div className={styles.controlcontainer}>
                <div className={styles.sizeadjustment}>
                    <div className={styles.instruction}>Zoom</div>
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

                <div className={styles.truncatelabelscontainer}>
                    <input type='checkbox' checked={props.truncate} onChange={() => props.setTruncate(!props.truncate)} className={styles.truncatecheckbox} />
                    <span className={styles.labelinstruction}>Truncate Labels</span>
                </div>
            </div>
        </div>
    )
}

export default Navigator;
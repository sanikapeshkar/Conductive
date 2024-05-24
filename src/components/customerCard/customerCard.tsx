import styles from './customercard.module.scss'


export default function CustomerCard(){
    return(
        <div className={styles.CustomerCard}>
            <h3>Customer Name</h3>
            <h2>Board Name</h2>
            <div className={styles.BtnContainer}>
            <button className="">Edit</button>
            <button>Delete</button>
            <button>View</button>
            </div>

        </div>
    )
}
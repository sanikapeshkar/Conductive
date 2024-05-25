import styles from './customercard.module.scss'


export default function CustomerCard({name,category}:CustomerProps){
    return(
        <div className={styles.CustomerCard}>
            <h3>{name}nsmns</h3>
            <h2>{category}</h2>
            <div className={styles.BtnContainer}>
            <button className="">Edit</button>
            <button>Delete</button>
            <button>View</button>
            </div>

        </div>
    )
}
import styles from './customers.module.scss'

export default function Customers(){

    return (<div className={styles.customers}>
        <CustomerCard/>
    </div>)
}
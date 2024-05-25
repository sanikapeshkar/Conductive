import CustomerCard from '../customerCard/customerCard'
import styles from './customers.module.scss'

export default function Customers(){

    return (<div className={styles.Customers}>
        <CustomerCard name="Customername" category="Board Name"/>
        <CustomerCard name="Customername" category="Board Name"/>
        <CustomerCard name="Customername" category="Board Name"/>
    </div>)
}

import CustomerCard from '../../customer/customerCard/customerCard'
import styles from './employee.module.scss'


export default function Employee(){
return <div className={styles.Employee}>
<CustomerCard name="employee name" category="Supervisor"/>
<CustomerCard name="employee name" category="Supervisor"/>
<CustomerCard name="employee name" category="Supervisor"/>
</div>

}
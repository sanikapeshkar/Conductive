import Customers from '../../components/CustomersList/customers';
import CustomerCard from '../../components/customerCard/customerCard';
import styles from './customer.module.scss'


function Customer(){

return<div className={styles.Customer}>
    <Customers/>
</div>


}

export default Customer;

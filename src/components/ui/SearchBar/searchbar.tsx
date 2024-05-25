import styles from './searchbar.module.scss'

import { FaSearch} from "react-icons/fa";
export default function SearchBar(){
    return(
        <form className={styles.SearchBar}>
            <input placeholder='searchhh'/>
            <FaSearch/>
        </form>
    )
}
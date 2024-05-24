import styles from './sidebar.module.scss'
interface SidebarProps{
    handleTab:(tab:string)=>void
}

export const Sidebar=({handleTab}:SidebarProps)=>{


    return(
        <div className={styles.SidebarMain}>
            <h2>Role</h2>

            <ul className={styles.MenuList}>
                <li onClick={()=>handleTab('board')}>Boards</li>
                <li onClick={()=>handleTab('customer')}>Customers</li>
                <li onClick={()=>handleTab('employee')}>Employees</li>
                <li onClick={()=>handleTab('tickets')}>Tickets</li>
                <li onClick={()=>handleTab('reports')}>Reports</li>
            </ul>
        </div>
    )
}
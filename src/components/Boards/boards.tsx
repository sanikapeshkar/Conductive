
import BoardCard from '../BoardCard/boardCard'
import styles from './boards.module.scss'

export default function Boards(){
    return <div className={styles.BoardList}>
    <BoardCard />
    <BoardCard />
    <BoardCard />
  </div>
}
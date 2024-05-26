import { useState } from 'react';
import DropDown from '../DropDown/dropdown';
import SearchBar from '../SearchBar/searchbar';
import styles from './topbar.module.scss';
import Popup from '../Popup/popup';
import CreateBoard from '../../createboard/createBoard';


interface TopBarProps{
    options:string[]

}
export default function TopBar({options}:TopBarProps){
    const [open, setopen] = useState(false);
    return <div className={styles.TopBar}>
    <SearchBar /> <DropDown options={options} />
    <button onClick={() => setopen(true)}>Create</button>
    {open && (
      <Popup isOpen={open} onClose={() => setopen(false)}>
        <CreateBoard />
      </Popup>
    )}
  </div>

}
import styles from './popup.module.scss'

const Popup = ({ isOpen, onClose, children }:PopupProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.Popup}>
      <div className={styles.PopupInner}>
        {children}
        <button className={styles.CloseBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};


export default Popup;
import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { SIDEBARDATA, SidebarProps } from "./sidebardata";

export const Sidebar = ({ handleTab, role }: SidebarProps) => {
  const [tab, settabs] = useState<string[]>([]);

  useEffect(() => {
    const roleEach = SIDEBARDATA.find((f) => f.role === role);
    if (roleEach) {
      settabs(roleEach.tabs);
    }
  }, [role]);
  return (
    <div className={styles.SidebarMain}>
      <ul className={styles.MenuList}>
        <h2>{role} </h2>

        {tab.map((t) => (
          <li onClick={() => handleTab(t)}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

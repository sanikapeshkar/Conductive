import { useState } from "react";
import styles from "./dropdown.module.scss";
import { DropDownProps } from "./dropdown.types";


export default function DropDown({ options }: DropDownProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <form className={styles.DropDownForm}>
      <select className={styles.DropDownSelect}>
        {filteredOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
}

import React from "react";
import s from "./ContactList.module.css";

export default function ContactList({ listName, onDeleteContact }) {
  return (
    <>
      <ul>
        {listName.map(({ name, id, number }) => (
          <li className={s.contactItem} key={id}>
            {name}:{number}
            <button
              className={s.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

import React from "react";
import styles from './phoneBook.module.css'

export function PhoneBook({ contacts, handleDelete }) {
  return (
    <ul className={styles.contactsList}>
      {contacts.map((contact) => (
        <li className={styles.constacsItem} key={contact.id}>
          <h4 className={styles.contactName}>Name: {contact.name}</h4>
          <p className={styles.contactNumber}>Number: {contact.number}</p>
          <button type="button" name="deleteNum" className={styles.contactBtn} onClick={() => handleDelete(contact.id)}> Delete contact</button>
        </li>
        
      ))}
    </ul>
  );
}
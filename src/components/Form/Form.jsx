import styles from './Form.module.css'

export function createForm(handleChange, handleSubmit, name, number) {
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor=""
        className={styles.formLabel} >
          <p className={styles.formLabelText}>Name</p>
          <input
          className={styles.formInput}
            type="text"
            name="name"
            value={name} 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={handleChange}
          />
        </label>
  
        <label htmlFor=""
        className={styles.formLabel}>
          <p  className={styles.formLabelText}>Number</p>
          <input
          className={styles.formInput}
            type="text"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Create" className={styles.formBtn} />
      </form>
    );
  }
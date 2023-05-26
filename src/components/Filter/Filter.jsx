import styles from './Filter.module.css'

export function FilterLabel({ handleFilter }) {
    const handleChange = (evt) => {
      handleFilter(evt.target.value);
    };
  
    return (
      <label htmlFor="" className={styles.filterLabel}>
        <p className={styles.filterText}>Filter for name</p>
        <input type="text" name="filter" className={styles.filterInput} onChange={handleChange} />
      </label>
    );
  }
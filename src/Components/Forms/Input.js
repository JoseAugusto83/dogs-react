import React from 'react'
import styles from './Input.module.css'

const Input = ({label, type, name, value, onChange, error, onBlur}) => {
  return (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>{label} </label>
        <input name={name} onChange={onChange} value={value} id={name} className={styles.input} type={type} onBlur={onBlur} />
        {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
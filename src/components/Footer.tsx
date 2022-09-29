import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Esse app foi criado utilizando React + Typescript</p>
      
      <p><span>Todo List</span>@2022</p>
      </footer>
  )
}

export default Footer
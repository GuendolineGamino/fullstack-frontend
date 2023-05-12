import React from 'react'
import styles from "./PageDescription.module.css"
import { useRouter } from 'next/router'

export default function PageDescription({pagetitle, description}) {
  const router = useRouter();
  return (
    <div className={styles.PageDescription} >
        <h1>{pagetitle}</h1>
        <div className={styles.Divider}></div>
        <span>{description}</span>
    </div>
  )
}

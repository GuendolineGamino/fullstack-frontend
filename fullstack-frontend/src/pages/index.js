import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'



const inter = Inter({ subsets: ['latin'] })

export default function Home({name, summary}) {
  const router = useRouter();
  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>{name}</h1>
      <div className={styles.Summary}>{summary}</div>
      <Button variant="contained" size="large" onClick={() => router.push("/projects")}>Projects</Button>
    </section>
  );
}

export async function getStaticProps()
{
  return{
    props:{
      name: "Guen Gamino",
      summary: "test"
    }
  }
}

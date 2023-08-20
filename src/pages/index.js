import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import BookCover from '@/components/BookCover'
import Border from '@/components/BookCoverBorder'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Augusto's Pokedex</title>
        <meta name="Augusto's Pekedex" content="my pokedex version using the pokeAPI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <BookCover> 
          <Border style={{bottom:0}}/>
        </BookCover>
      </main>
    </>
  )
}

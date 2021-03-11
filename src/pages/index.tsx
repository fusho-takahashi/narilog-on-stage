import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Song, SpecialSong } from '../../data/songs'
import { getPerformedCount, getSortedStages } from '../../lib/stageLogs'

interface HomePageProps {
  allStages: { id: number; date: string }[]
  performedCountSummary: { song: Song; count: number }[]
}

const Home = (props: HomePageProps) => {
  return (
    <>
      <Head>
        <title>narilog on stage</title>
      </Head>
      <h1>narilog on stage</h1>
      <p>since 2021-02-14</p>
      <section>
        <h2>Summary</h2>
        <ul>
          {props.performedCountSummary.map(({ song, count }) => (
            <li key={song}>
              <span>{count}回:</span>
              <span> {song}</span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>List of stages</h2>
        <ul>
          {props.allStages.map(({ id, date }) => (
            <li key={id}>
              <Link href={`/stages/${id}`}>
                <a>{date}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allStages: {
    id: string
    date: string
  }[] = getSortedStages()
  const performedCountSummary: {
    song: Song | SpecialSong
    count: number
  }[] = getPerformedCount()
  return {
    props: {
      allStages,
      performedCountSummary,
    },
  }
}

export default Home

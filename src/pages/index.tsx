import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Song } from '../../data/songs'
import { getPerformedCount, getSortedStages } from '../../lib/stageLogs'
import AppHeader from '../components/app-header'

const Home = ({
  allStages,
  performedCountSummary,
}: {
  allStages: { id: number; date: string; section: number }[]
  performedCountSummary: { song: Song; count: number }[]
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>narilog on stage</title>
      </Head>
      <AppHeader />
      <section>
        <h2>Summary</h2>
        <ul>
          {performedCountSummary.map(({ song, count }) => (
            <li key={song}>
              <span>{count}回:</span>
              <span> {song}</span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Stages</h2>
        <ul>
          {allStages.map(({ id, date, section }) => (
            <li key={id}>
              <Link href={`/stages/${id}`}>
                <a>
                  {date} {section}部
                </a>
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
    section: number
  }[] = getSortedStages()
  const performedCountSummary: {
    song: Song
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

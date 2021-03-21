import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { EventLog } from '../../../data/log'
import { getAllEventIds, getEventData } from '../../../lib/stageLogs'

interface StageDataProps {
  eventData: EventLog
}

const StageData = (props: StageDataProps) => {
  return (
    <>
      <Head>
        <title>{props.eventData.date + ' ' + props.eventData.name}</title>
      </Head>
      <h1>{props.eventData.date + ' ' + props.eventData.name}</h1>
      <main>
        <ul>
          {props.eventData.songs.map((song) => (
            <li key={song}>{song}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllEventIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<StageDataProps> = async ({
  params,
}: {
  params: { id: string }
}) => {
  const eventData = getEventData(params.id)
  return {
    props: {
      eventData,
    },
  }
}

export default StageData

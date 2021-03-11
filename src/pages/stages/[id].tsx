import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { IrregularStageLog, RegularStageLog } from '../../../data/log'
import { getAllStageIds, getStageData } from '../../../lib/stageLogs'

interface StageDataProps {
  stageData: RegularStageLog | IrregularStageLog
}

const StageData = (props: StageDataProps) => {
  return (
    <>
      <Head>
        <title>{props.stageData.date}</title>
      </Head>
      <h1>{props.stageData.date}</h1>
      <main>
        <ul>
          {props.stageData.songs.map((song) => (
            <li key={song}>{song}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllStageIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { id: string }
}) => {
  const stageData = getStageData(params.id)
  return {
    props: {
      stageData,
    },
  }
}

export default StageData

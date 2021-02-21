import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { StageLog } from '../../../data/log';
import { getAllStageIds, getStageData } from '../../../lib/stageLogs';

export default function StageData({ stageData }: { stageData: StageLog }): JSX.Element {
  return (
    <>
      <Head>{`${stageData.date}-${stageData.section}`}</Head>
      <h1>
        {stageData.date} {stageData.section}部
      </h1>
      <main>
        <ul>
          {stageData.songs.map((song) => (
            <li key={song}>{song}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllStageIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: { params: { id: string } }) => {
  const stageData = getStageData(params.id);
  return {
    props: {
      stageData,
    },
  };
};

import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getSortedStages } from '../../lib/stageLogs';

export default function Home({
  allStages,
}: {
  allStages: { id: number; date: string; section: number }[];
}): JSX.Element {
  return (
    <>
      <Head>
        <title>narilog on stage</title>
      </Head>
      <header>narilog on stage</header>
      <ul>
        {allStages.map(({ id, date, section }) => (
          <li key={date}>
            <Link href={`/stages/${id.toString()}`}>
              <a>
                {date} {section}部
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allStages: { id: number; date: string; section: number }[] = getSortedStages();
  return {
    props: {
      allStages,
    },
  };
};

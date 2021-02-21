import { songs } from './songs';

export interface StageLog {
  id: number;
  date: string;
  section: number;
  place: string;
  songs: songs[];
}

export const stageLogs: StageLog[] = [
  {
    id: 0,
    date: '2020-02-14',
    section: 2,
    place: '秋葉原アイドルステージ',
    songs: ['チョコレートパフェ', 'キス距離', 'ねこカブリーナ', '赤いマフラー', 'さくらシンデレラ'],
  },
  {
    id: 1,
    date: '2020-02-15',
    section: 1,
    place: '秋葉原アイドルステージ',
    songs: ['PROTOSTAR', 'White Magic Love', '夏恋クレシェンド', 'ねこカブリーナ', '名前のない花'],
  },
  {
    id: 2,
    date: '2020-02-17',
    section: 1,
    place: '秋葉原アイドルステージ',
    songs: ['さくらシンデレラ', 'ねこカブリーナ', '粉雪ノスタルジア', '戦国桜絵巻'],
  },
  {
    id: 3,
    date: '2020-02-19',
    section: 1,
    place: '秋葉原アイドルステージ',
    songs: [
      'ぐるぐるワンワン',
      'デラスキ',
      '新Marvelous rain',
      'ほしがりガール',
      'きらめきダイアリー',
      '粉雪ノスタルジア',
    ],
  },
  {
    id: 4,
    date: '2020-02-20',
    section: 1,
    place: '秋葉原アイドルステージ',
    songs: [
      'ハロウィンモンスター',
      'さくらシンデレラ',
      '夏恋クレシェンド',
      'PROTOSTAR',
      '粉雪ノスタルジア',
      '未来プロローグ',
      '名前のない花',
    ],
  },
];

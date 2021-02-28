import { Song, SpecialSong } from './songs'

export interface StageLog {
  id: string
  date: string
  section: number
  place: string
  songs: (Song | SpecialSong)[]
}

export const stageLogs: StageLog[] = [
  {
    id: '2021-02-14-2',
    date: '2021-02-14',
    section: 2,
    place: '秋葉原アイドルステージ',
    songs: [
      'チョコレートパフェ',
      'キス距離',
      'ねこカブリーナ',
      '赤いマフラー',
      'さくらシンデレラ',
    ],
  },
  {
    id: '2021-02-15-1',
    date: '2021-02-15',
    section: 1,
    place: '秋葉原アイドルステージ',
    songs: [
      'PROTOSTAR',
      'White Magic Love',
      '夏恋クレシェンド',
      'ねこカブリーナ',
      '名前のない花',
    ],
  },
  {
    id: '2021-02-17-1',
    date: '2021-02-17',
    section: 1,
    place: '秋葉原アイドルステージ',
    songs: [
      'さくらシンデレラ',
      'ねこカブリーナ',
      '粉雪ノスタルジア',
      '戦国桜絵巻',
    ],
  },
  {
    id: '2021-02-19-1',
    date: '2021-02-19',
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
    id: '2021-02-20-1',
    date: '2021-02-20',
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
  {
    id: '2021-02-21-2',
    date: '2021-02-21',
    section: 2,
    place: '秋葉原アイドルステージ',
    songs: [
      'キス距離',
      'チョコレートパフェ',
      'ねこカブリーナ',
      'ほしがりガール',
    ],
  },
  {
    id: '2021-02-22-1',
    date: '2021-02-22',
    section: 1,
    place: '秋葉原アイドルステージ',
    songs: [
      'デラスキ',
      '夏恋クレシェンド',
      'White Magic Love',
      'ほしがりガール',
      '僕らのユートピア',
      'チョコレートパフェ',
    ],
  },
  {
    id: '2021-02-23-1',
    date: '2021-02-23',
    section: 1,
    place: '新宿アイドルステージ',
    songs: [
      'PROTOSTAR',
      'ほしがりガール',
      'White Magic Love',
      '夏恋クレシェンド',
      '未来プロローグ',
    ],
  },
  {
    id: '2021-02-26-1',
    date: '2021-02-26',
    section: 1,
    place: '新宿アイドルステージ',
    songs: [
      'White Magic Love',
      '粉雪ノスタルジア',
      'ヒロイン（back number楽曲）',
      'チョコレートパフェ',
      'さくらシンデレラ',
    ],
  },
  {
    id: '2021-02-27-1',
    date: '2021-02-27',
    section: 1,
    place: '新宿アイドルステージ',
    songs: [
      'さくらシンデレラ',
      'デラスキ',
      'ピンキーリングに花飾り',
      'ぐるぐるワンワン',
      'チョコレートパフェ',
    ],
  },
  {
    id: '2021-02-28-1',
    date: '2021-02-28',
    section: 1,
    place: '秋葉原アイドルステージ',
    songs: [
      'キス距離',
      'ねこカブリーナ',
      'ほしがりガール',
      'チョコレートパフェ',
      '僕らのユートピア',
      '赤いマフラー',
    ],
  },
]

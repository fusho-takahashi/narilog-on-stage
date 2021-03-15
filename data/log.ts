import { Song, SpecialSong } from './songs'

interface StageLog {
  id: string
  date: string
  regular: boolean
  place: string
  songs: (Song | SpecialSong)[]
}

export interface RegularStageLog extends StageLog {
  regular: true
  section: number
  place: '秋葉原アイドルステージ' | '新宿アイドルステージ'
}

export interface IrregularStageLog extends StageLog {
  regular: false
  live: string
}

export const stageLogs: (RegularStageLog | IrregularStageLog)[] = [
  {
    id: '2021-02-14-2',
    date: '2021-02-14',
    regular: true,
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
    regular: true,
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
    regular: true,
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
    regular: true,
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
    regular: true,
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
    regular: true,
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
    regular: true,
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
    regular: true,
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
    regular: true,
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
    regular: true,
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
    regular: true,
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
  {
    id: '2021-03-01-Spring-Typhoon-Festival',
    date: '2021-03-01',
    regular: false,
    live: 'Sprint Typhoon Festival',
    place: 'TSUTAYA O-EAST',
    songs: ['大好きよ 〜ハマコイ〜', 'ねこカブリーナ', 'ほしがりガール'],
  },
  {
    id: '2021-03-03-CINDERELLA-STORY',
    date: '2021-03-03',
    regular: false,
    live: 'CINDERELLA-STORY',
    place: '新宿アイドルステージ',
    songs: [
      'チョコレートパフェ',
      'ほしがりガール',
      'キス距離',
      '未来プロローグ',
    ],
  },
  {
    id: '2021-03-05-1',
    date: '2021-03-05',
    regular: true,
    section: 1,
    place: '新宿アイドルステージ',
    songs: [
      'キス距離',
      'White Magic Love',
      'PROTOSTAR',
      'ねこカブリーナ',
      '未来プロローグ',
    ],
  },
  {
    id: '2021-03-06-1',
    date: '2021-03-06',
    regular: true,
    section: 1,
    place: '秋葉原アイドルステージ',
    songs: [
      'PROTOSTAR',
      '粉雪ノスタルジア',
      'ねこカブリーナ',
      '夏恋クレシェンド',
    ],
  },
  {
    id: '2021-03-07-2',
    date: '2021-03-07',
    regular: true,
    section: 2,
    place: '秋葉原アイドルステージ',
    songs: [
      '名前のない花',
      '僕らのユートピア',
      '夏恋クレシェンド',
      'チョコレートパフェ',
      'キス距離',
    ],
  },
  {
    id: '2021-03-09-1',
    date: '2021-03-09',
    regular: true,
    section: 1,
    place: '新宿アイドルステージ',
    songs: [
      'きらめきダイアリー',
      'PROTOSTAR',
      '千年桜',
      '名前のない花',
      'ほしがりガール',
      'ねこカブリーナ',
    ],
  },
  {
    id: '2021-03-10-1',
    date: '2021-03-10',
    regular: true,
    section: 1,
    place: '秋葉原アイドルステージ',
    songs: [
      '赤いマフラー',
      'キス距離',
      'ねこカブリーナ',
      '名前のない花',
      '夏恋クレシェンド',
    ],
  },
  {
    id: '2021-03-12-1',
    date: '2021-03-12',
    regular: true,
    section: 1,
    place: '秋葉原アイドルステージ',
    songs: [
      'キス距離',
      'ほしがりガール',
      '夏恋クレシェンド',
      'ねこカブリーナ',
      '大好きよ 〜ハマコイ〜',
      '赤いマフラー',
    ],
  },
  {
    id: '2021-03-13-2',
    date: '2021-03-13',
    regular: true,
    section: 2,
    place: '秋葉原アイドルステージ',
    songs: [
      '未来プロローグ',
      'ぐるぐるワンワン',
      'ほしがりガール',
      'White Magic Love',
      '赤いマフラー',
    ],
  },
  {
    id: '2021-03-14-2',
    date: '2021-03-14',
    regular: true,
    section: 2,
    place: '秋葉原アイドルステージ',
    songs: [
      'White Magic Love',
      'キス距離',
      '名前のない花',
      '夏恋クレシェンド',
      'さくらシンデレラ',
      '赤いマフラー',
    ],
  },
]

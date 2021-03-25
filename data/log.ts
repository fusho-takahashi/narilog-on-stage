import { Song, SpecialSong } from './songs'

export interface EventLog {
  id: string
  date: string
  type: Event
  name: string
  place: string
  songs?: (Song | SpecialSong)[]
}

type Event =
  | '劇場公演'
  | '外部ライブ'
  | 'リリースイベント'
  | 'ファンミーティング'
  | 'トークポート'

export const stageLogs: EventLog[] = [
  {
    id: '2021-02-14-2',
    date: '2021-02-14',
    type: '劇場公演',
    name: '劇場LIVE【2部】',
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
    type: '劇場公演',
    name: '劇場LIVE【1部】〜西野蓮お誕生日〜',
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
    type: '劇場公演',
    name: '劇場LIVE【1部】',
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
    type: '劇場公演',
    name: '無観客生LIVE配信【1部】',
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
    id: '2021-02-20-birthday-live',
    date: '2021-02-20',
    type: '劇場公演',
    name: '西野蓮ミニ生誕祭',
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
    type: '劇場公演',
    name: '劇場LIVE【2部】',
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
    type: '劇場公演',
    name: '無観客生LIVE配信【1部】',
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
    type: '劇場公演',
    name: '劇場LIVE【1部】',
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
    type: '劇場公演',
    name: '無観客生LIVE配信【1部】',
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
    type: '劇場公演',
    name: '劇場LIVE【1部】',
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
    type: '劇場公演',
    name: '劇場LIVE【1部】',
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
    type: '外部ライブ',
    name: 'Sprint Typhoon Festival',
    place: 'TSUTAYA O-EAST',
    songs: ['大好きよ 〜ハマコイ〜', 'ねこカブリーナ', 'ほしがりガール'],
  },
  {
    id: '2021-03-03-CINDERELLA-STORY',
    date: '2021-03-03',
    type: '外部ライブ',
    name: 'CINDERELLA-STORY',
    place: '新宿アイドルステージ',
    songs: [
      'チョコレートパフェ',
      'ほしがりガール',
      'キス距離',
      '未来プロローグ',
    ],
  },
  {
    id: '2021-03-05-SHOWROOM',
    date: '2021-03-05',
    type: '劇場公演',
    name: 'SHOWROOM配信',
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
    type: '劇場公演',
    name: '劇場LIVE【1部】',
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
    type: '劇場公演',
    name: '劇場LIVE【2部】',
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
    type: '劇場公演',
    name: 'さくらシンデレラの日 ～ いつもありがとう。サンキュー公演 ～',
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
    type: '劇場公演',
    name: '劇場LIVE【1部】',
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
    type: '劇場公演',
    name: '劇場LIVE【1部】',
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
    id: '2021-03-13-release-event',
    date: '2021-03-13',
    type: 'リリースイベント',
    name: '12th シングル リリースイベント',
    place: '秋葉原アイドルステージ',
    songs: ['PROTOSTAR'],
  },
  {
    id: '2021-03-13-2',
    date: '2021-03-13',
    type: '劇場公演',
    name: '劇場LIVE【2部】',
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
    id: '2021-03-14-release-event',
    date: '2021-03-14',
    type: 'リリースイベント',
    name: '12th シングル リリースイベント',
    place: '秋葉原アイドルステージ',
    songs: ['僕らのユートピア'],
  },
  {
    id: '2021-03-14-1',
    date: '2021-03-14',
    type: '劇場公演',
    name: '劇場LIVE【1部】',
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
  {
    id: '2021-03-17-release-event',
    date: '2021-03-17',
    type: 'リリースイベント',
    name: '12th シングル リリースイベント',
    place: '秋葉原アイドルステージ',
    songs: ['ねこカブリーナ'],
  },
  {
    id: '2021-03-17-newcomer',
    date: '2021-03-17',
    type: '劇場公演',
    name: 'ご新規様優待ミニLIVE',
    place: '秋葉原アイドルステージ',
    songs: ['さくらシンデレラ', '戦国桜絵巻', '夏恋クレシェンド'],
  },
  {
    id: '2021-03-19-release-event',
    date: '2021-03-19',
    type: 'リリースイベント',
    name: '12th シングル リリースイベント',
    place: '秋葉原アイドルステージ',
    songs: ['デラスキ'],
  },
  {
    id: '2021-03-19-newcomer',
    date: '2021-03-19',
    type: '劇場公演',
    name: 'ご新規様優待ミニLIVE',
    place: '秋葉原アイドルステージ',
    songs: ['赤いマフラー', 'ほしがりガール', 'ねこカブリーナ'],
  },
  {
    id: '2021-03-20-release-event',
    date: '2021-03-20',
    type: 'リリースイベント',
    name: '12th シングル リリースイベント',
    place: '秋葉原アイドルステージ',
    songs: ['ほしがりガール'],
  },
  {
    id: '2021-03-20-newcomer',
    date: '2021-03-20',
    type: '劇場公演',
    name: 'ご新規様優待ミニLIVE',
    place: '秋葉原アイドルステージ',
    songs: [
      'チョコレートパフェ',
      'キス距離',
      '大好きよ 〜ハマコイ〜',
      '赤いマフラー',
    ],
  },
  {
    id: '2021-03-21-release-event',
    date: '2021-03-21',
    type: 'リリースイベント',
    name: '12th シングル リリースイベント',
    place: '秋葉原アイドルステージ',
    songs: ['新Marvelous rain', '赤いマフラー'],
  },
  {
    id: '2021-03-22-Spring-Typhoon-Festival',
    date: '2021-03-22',
    type: '外部ライブ',
    name: 'Sprint Typhoon Festival',
    place: '新宿ReNY',
    songs: ['ねこカブリーナ', '夏恋クレシェンド', '大好きよ 〜ハマコイ〜'],
  },
  {
    id: '2021-03-22-SHOWROOM',
    date: '2021-03-22',
    type: '劇場公演',
    name: 'SHOWROOM配信',
    place: '新宿アイドルステージ',
    songs: [
      'キス距離',
      'PROTOSTAR',
      '名前のない花',
      'ねこカブリーナ',
      'ほしがりガール',
    ],
  },
  {
    id: '2021-03-24-release-event',
    date: '2021-03-24',
    type: 'リリースイベント',
    name: '12th シングル リリースイベント',
    place: '秋葉原アイドルステージ',
    songs: ['夏恋クレシェンド'],
  },
]

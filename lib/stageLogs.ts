import { IrregularStageLog, RegularStageLog, stageLogs } from '../data/log'
import { Song, SpecialSong } from '../data/songs'

export function getSortedStages(): {
  id: string
  date: string
}[] {
  return stageLogs.map((log) => ({
    id: log.id,
    date: log.date,
  }))
}

export function getAllStageIds(): { params: { id: string } }[] {
  return stageLogs.map((log) => ({ params: { id: log.id.toString() } }))
}

export function getStageData(id: string): RegularStageLog | IrregularStageLog {
  const data = stageLogs.find((log) => log.id === id)
  if (data !== undefined) {
    return data
  }
}

export function getPerformedCount(): {
  song: Song | SpecialSong
  count: number
}[] {
  const performedCount: { song: Song | SpecialSong; count: number }[] = []

  stageLogs.forEach((log) => {
    log.songs.forEach((song) => {
      const index = performedCount.findIndex(
        (performed) => performed.song === song
      )
      if (index === -1) {
        performedCount.push({ song: song, count: 1 })
      } else {
        performedCount[index] = {
          song: song,
          count: performedCount[index].count + 1,
        }
      }
    })
  })

  performedCount.sort((a, b) => {
    if (a.count < b.count) {
      return 1
    } else {
      return -1
    }
  })

  return performedCount
}

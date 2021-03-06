import { EventLog, stageLogs } from '../data/log'
import { Song, SpecialSong } from '../data/songs'

export function getSortedStages(): {
  id: string
  date: string
  name: string
}[] {
  return stageLogs.map((log) => ({
    id: log.id,
    date: log.date,
    name: log.name,
  }))
}

export function getAllEventIds(): { params: { id: string } }[] {
  return stageLogs.map((log) => ({ params: { id: log.id } }))
}

export function getEventData(id: string): EventLog {
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

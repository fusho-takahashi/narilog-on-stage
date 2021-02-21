import { StageLog, stageLogs } from '../data/log';
import { Song } from '../data/songs';

export function getSortedStages(): { id: number; date: string; section: number }[] {
  return stageLogs.map((log) => ({ id: log.id, date: log.date, section: log.section }));
}

export function getAllStageIds(): { params: { id: string } }[] {
  return stageLogs.map((log) => ({ params: { id: log.id.toString() } }));
}

export function getStageData(id: number): StageLog {
  const data = stageLogs.find((log) => log.id === id);
  if (data !== undefined) {
    return data;
  }
}

export function getPerformedCount(): { song: Song; count: number }[] {
  const performedCount: { song: Song; count: number }[] = [];

  stageLogs.forEach((log) => {
    log.songs.forEach((song) => {
      const index = performedCount.findIndex((performed) => performed.song === song);
      if (index === -1) {
        performedCount.push({ song: song, count: 1 });
      } else {
        performedCount[index] = { song: song, count: performedCount[index].count + 1 };
      }
    });
  });

  performedCount.sort((a, b) => {
    if (a.count < b.count) {
      return 1;
    } else {
      return -1;
    }
  });

  return performedCount;
}

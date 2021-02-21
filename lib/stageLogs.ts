import { StageLog, stageLogs } from '../data/log';

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

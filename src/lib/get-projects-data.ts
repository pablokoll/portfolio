import type { ProjectDetail } from './types';
import localData from '../data/projects.json';

export function getProjectsData(): ProjectDetail[] {
  return localData as ProjectDetail[];
}

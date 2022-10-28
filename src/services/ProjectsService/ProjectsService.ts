import { Project } from '@/interfaces/Project';

export interface ProjectsService {
    getAllProjects(): Promise<Project[]>;
}

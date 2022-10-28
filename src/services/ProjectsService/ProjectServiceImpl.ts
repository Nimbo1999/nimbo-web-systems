import { ProjectsAdapter } from '@/adapters/Projects.adapter';
import { CollectionDocumentDB } from '@/firebase/firestore/CollectionDocumentDB';
import { Project } from '@/interfaces/Project';
import { ProjectsService } from './ProjectsService';

export class ProjectsServiceImpl implements ProjectsService {
    constructor(private readonly firestoreService: CollectionDocumentDB) {}

    async getAllProjects(): Promise<Project[]> {
        const docs = await this.firestoreService.getDocuments('projects');
        const projects: Project[] = ProjectsAdapter.documentsDataToProjectList(docs.docChanges());
        return projects;
    }
}

import { DocumentChange, DocumentData } from 'firebase/firestore';

import { Project } from '@/interfaces/Project';
import { Constants } from '@/constants/constants';

export class ProjectsAdapter {
    static documentsDataToProjectList(docChanges: DocumentChange<DocumentData>[]): Project[] {
        return docChanges.map(ProjectsAdapter.documentDataToProject);
    }

    private static documentDataToProject({ doc }: DocumentChange<DocumentData>): Project {
        const data = doc.data();
        return {
            id: doc.id,
            description: data.description,
            image: !!data.image ? data.image : Constants.BlankImagePlaceholder,
            name: data.name,
            date: data.date,
            repository: {
                url: data.repository.url,
                provider: data.repository.provider,
            },
        };
    }
}

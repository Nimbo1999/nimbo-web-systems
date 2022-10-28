import { CollectionReference, DocumentData, QuerySnapshot } from 'firebase/firestore';

export type Collection = 'projects';

export interface CollectionDocumentDB {
    getCollection(collection: Collection): CollectionReference<DocumentData>;
    getDocuments(collection: Collection): Promise<QuerySnapshot<DocumentData>>;
}

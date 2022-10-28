import { FirebaseApp } from 'firebase/app';
import {
    Firestore,
    getFirestore,
    collection,
    CollectionReference,
    DocumentData,
    getDocs,
} from 'firebase/firestore';
import { Collection, CollectionDocumentDB } from './CollectionDocumentDB';

export class FirestoreService implements CollectionDocumentDB {
    private firestore: Firestore;

    constructor(app: FirebaseApp) {
        this.firestore = getFirestore(app);
    }

    getCollection(collectionName: Collection): CollectionReference<DocumentData> {
        return collection(this.firestore, collectionName);
    }

    async getDocuments(collectionName: Collection) {
        return await getDocs(this.getCollection(collectionName));
    }
}

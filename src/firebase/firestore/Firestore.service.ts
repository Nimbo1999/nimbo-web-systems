import { FirebaseApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { CollectionDocumentDB } from './CollectionDocumentDB';

export class FirestoreService implements CollectionDocumentDB {
    private firestore: Firestore;

    constructor(private readonly app: FirebaseApp) {
        this.firestore = getFirestore(app);
    }

    getCollection<T>(): Promise<T> {
        return new Promise((resolve) => {
            resolve('Hey!' as T);
        });
    }

    setCollection<T>(): Promise<T> {
        throw new Error('Method not implemented Yet!');
    }
}

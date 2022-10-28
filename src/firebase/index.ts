import { isSupported } from 'firebase/analytics';
import { firebaseApp } from './firebase';
import { FirebaseAnalytics } from './analytics/FirebaseAnalytics.service';
import { FirestoreService } from './firestore/Firestore.service';

const firestoreService = new FirestoreService(firebaseApp);

function getAnalyticsService() {
    if (isSupported()) return new FirebaseAnalytics(firebaseApp);
    return null;
}

export { firestoreService, getAnalyticsService };

import { FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics } from 'firebase/analytics';

import { Analytics as AppAnalytics } from './Analytics';

export class FirebaseAnalytics implements AppAnalytics {
    private analytics: Analytics;

    constructor(private readonly app: FirebaseApp) {
        this.analytics = getAnalytics(app);
    }

    log(): void {
        throw new Error('Method not implemented.');
    }
}

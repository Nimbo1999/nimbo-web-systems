import { HttpMethods } from './HttpMethods';

export class PortfolioHttpService implements HttpMethods {
    private baseUrl: string;

    constructor() {
        this.baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;
    }

    async get<R>(contextUrl: string): Promise<R> {
        const response = await this.requestTo(contextUrl, { method: 'GET' });
        return await response.json();
    }

    post<R, B>(contextUrl: string, body: B): Promise<R> {
        throw new Error('Method not implemented.');
    }

    patch<R, B>(contextUrl: string, body: B): Promise<R> {
        throw new Error('Method not implemented.');
    }

    delete<R>(contextUrl: string): Promise<R> {
        throw new Error('Method not implemented.');
    }

    private async requestTo(url: string, options: RequestInit) {
        return await fetch(this.baseUrl + url, options);
    }
}

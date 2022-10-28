export interface HttpMethods {
    get<R>(url: string): Promise<R>;
    post<R, B>(url: string, body: B): Promise<R>;
    patch<R, B>(url: string, body: B): Promise<R>;
    delete<R>(url: string): Promise<R>;
}

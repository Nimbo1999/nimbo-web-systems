export interface CollectionDocumentDB {
    getCollection<T>(): Promise<T>;
    setCollection<T>(): Promise<T>;
}

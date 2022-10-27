type RepositoryProvider = 'github' | 'bitbucket' | 'gitlab';

export interface Repository {
    url: string;
    provider: RepositoryProvider;
}

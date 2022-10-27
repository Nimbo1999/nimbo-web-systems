import { Repository } from './Repository';

export interface Project {
    id: string;
    name: string;
    description: string;
    image: string;
    repository: Repository;
}

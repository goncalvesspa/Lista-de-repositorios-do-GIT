export interface Gitlist {

    login: string;
    full_name: string;
    order: number;
    owner: Owner;
    id: number;
}

 export interface Owner {
    login: string;
    id: number;
} 
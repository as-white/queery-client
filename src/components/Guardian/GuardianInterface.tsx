export interface Result {
    id: number;
    firstname: string;
    lastname: string;
    photourl: string;
    citylocation: string;
    statelocation: string;
    zipcode: number;
    street: string;
    bio: string;
    age: number;
    experience: number;
    preferredage: number;
    distancewilling: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}

export interface CaretakerResponse {
    results: Result[];
}
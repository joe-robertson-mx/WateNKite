export interface Workout {
    _id?: string;
    name: string;
    date: string;
}

export interface Set {
    _id?: string;
    type: string;
    reps: number;
    weight: number;
    parent: string;
}

export interface MongoResponse {
    acknolwedged: boolean;
    insertedId: string;
}
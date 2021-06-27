export interface Post {
    id?: number;
    name: string;
    gender: string;
    orientation: string;
    age: number;
    email: string;
    city: string;
    country: string;
    area: string;
    budget: number;
    allergies: string[];
    needs: string[];
    likes: string[];
    allies: boolean;
    alreadyrenting: boolean;
    maxroomies: number;
    petfriendly: boolean;
    kidsfriendly: boolean;
}

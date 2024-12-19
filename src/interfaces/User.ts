
import { Dog } from "./Dog";

export interface User{
    userId: number,
    username: string, 
    password: string, 
    role: "USER" | "ADMIN", 
    likedDogs: Dog[];
}
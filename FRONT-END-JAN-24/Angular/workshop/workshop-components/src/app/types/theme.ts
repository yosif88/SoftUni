export interface Theme {
    
        "subscribers": string[];
        "posts": string[];
        "_id": string;
        "themeName":string;
        "userId": User;
        "created_at": string;
        "updatedAt": string;
        "__v": number
    
}

export interface User{
    "themes":string[];
    "posts":string[];
    "_id": string;
    "tel": string;
    "email": string;
    "username": string;
    "password": string;
    "created_at": string;
    "updatedAt": string;
    "__v": number;
}
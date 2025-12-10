

export interface Project{
    name:string,
    description:string,
    _id:string
}

 export interface User {
    username: string,
    email: string,
    password: string
}

export interface Task{
    title:string,
    description:string,
    _id:string
}
export type ActionButtonProps = {
  onClick: () => void;
  label: string;
  color?: "green" | "red" | "blue" | "gray";
};

export interface AuthContextType {
    isAuthenticated: boolean
    user: User | null
    register: (data: any) => Promise<void>;
    login:(email: string, password: string) => Promise<void>
    logout: () => void

}

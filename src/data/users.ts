interface User {
    name: string;
    email: string;
    password: string;
  }
  
  const users: User[] = [];
  
  export const isRegistered = async (email: string): Promise<boolean> => {
    return users.some(user => user.email === email);
  };
  
  export const registerUser = async (user: User): Promise<void> => {
    users.push(user);
  };
  
  export const getUsers = async (): Promise<User[]> => {
    return users;
  };
  
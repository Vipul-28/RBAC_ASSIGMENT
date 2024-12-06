import axios from 'axios';

const usersUrl = 'http://localhost:3002/users';

// Define the User type based on your data structure
export interface User {
  id?: string;
  name: string;
  email: string;
  avatar: string;
  roleId: string;
  status: string;
  createdAt: string;
}

// Fetch users or a single user
export const getUsers = async (id?: string): Promise<User | User[] | undefined> => {
  try {
    const response = await axios.get<User | User[]>(`${usersUrl}/${id || ''}`);
    return response.data;
  } catch (error) {
    console.error('Error while calling getUsers API', error);
    return undefined; // Handle gracefully by returning undefined
  }
};

// Add a new user
export const addUsers = async (user: User): Promise<User | undefined> => {
  try {
    const response = await axios.post<User>(usersUrl, user);
    console.log("Hello this is the data : ",response)
    return response.data;
  } catch (error) {
    console.error('Error while calling addUser API', error);
    return undefined;
  }
};

// Delete a user by ID
export const deleteUsers = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${usersUrl}/${id}`);
  } catch (error) {
    console.error('Error while calling deleteUser API', error);
  }
};

// Edit an existing user
export const editUsers =  async (id: string, user:User): Promise<User | undefined> =>  {
  try {
    
    const response = await axios.put<User>(`${usersUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error while calling editUser API', error);
    return undefined;
  }
};

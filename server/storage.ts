import type { InsertUser, User } from "@shared/schema";

export interface IStorage {
  // Add your storage methods here as needed
  getUsers(): Promise<User[]>;
  createUser(user: InsertUser): Promise<User>;
}

class MemStorage implements IStorage {
  private users: User[] = [];
  private nextId = 1;

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  async createUser(user: InsertUser): Promise<User> {
    const newUser: User = {
      ...user,
      id: this.nextId++,
    };
    this.users.push(newUser);
    return newUser;
  }
}

export const storage: IStorage = new MemStorage();

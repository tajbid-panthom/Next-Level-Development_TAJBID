export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string; // Consider using Date type if you'll perform date operations
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low"; // Using a union type for specific values
  assignedTo: string | null; // Assuming assignTo can be a user ID or null if not assigned
}
export interface IUser {
  id: string;
  name: string;
}

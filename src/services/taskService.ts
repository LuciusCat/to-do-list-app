import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

export const getTasks = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createTask = async (task: any) => {
  const { data } = await axios.post(API_URL, task);
  return data;
};

export const updateTask = async (task: any) => {
  const { data } = await axios.put(`${API_URL}/${task.id}`, task);
  return data;
};

export const deleteTask = async (id: number) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};

export const completeTask = async (task: any) => {
  const { data } = await axios.patch(`${API_URL}/${task.id}`, {
    completed: !task.completed,
  });
  return data;
};

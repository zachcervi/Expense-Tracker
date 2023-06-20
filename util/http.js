import axios from "axios";
import { FIREBASE_ROOT } from "../constants/variables";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    `${FIREBASE_ROOT}/expenses.json`,
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(`${FIREBASE_ROOT}/expenses.json`);

  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(`${FIREBASE_ROOT}/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(`${FIREBASE_ROOT}/expenses/${id}.json`);
}

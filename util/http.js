import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://financeapp-7b28e-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
}

import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-04-16"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.91,
    date: new Date("2025-03-25"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.5,
    date: new Date("2025-04-17"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.87,
    date: new Date("2025-03-16"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2025-04-04"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-04-16"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.91,
    date: new Date("2025-03-25"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 5.5,
    date: new Date("2025-04-17"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 14.87,
    date: new Date("2025-03-16"),
  },
  {
    id: "e0",
    description: "Another book",
    amount: 18.59,
    date: new Date("2025-04-04"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
        return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;

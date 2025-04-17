import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
});
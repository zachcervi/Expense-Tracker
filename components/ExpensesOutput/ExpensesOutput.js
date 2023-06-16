import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Pizza",
    amount: 35.92,
    date: new Date("06-11-2023"),
  },
  {
    id: "e2",
    description: "Headphones",
    amount: 49.99,
    date: new Date("06-12-2023"),
  },
  {
    id: "e3",
    description: "iPad Pro",
    amount: 799.99,
    date: new Date("06-13-2023"),
  },
  {
    id: "e4",
    description: "United Airlines",
    amount: 342.29,
    date: new Date("06-14-2023"),
  },
];

function ExpenseOutput({ expenses, periodName }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpenseOutput;

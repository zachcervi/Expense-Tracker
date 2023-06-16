import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Pizza",
    amount: 35.92,
    date: new Date("2022-12-19"),
  },
  {
    id: "e2",
    description: "Headphones",
    amount: 49.99,
    date: new Date("2023-06-13"),
  },
  {
    id: "e3",
    description: "iPad Pro",
    amount: 799.99,
    date: new Date("2023-06-14"),
  },
  {
    id: "e4",
    description: "United Airlines",
    amount: 342.29,
    date: new Date("2023-06-15"),
  },
];

function ExpenseOutput({ expenses, periodName }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});

export default ExpenseOutput;

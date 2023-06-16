import { Text } from "react-native";
import ExpenseOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpenses() {
  return <ExpenseOutput periodName="Last 7 Days" />;
}

export default RecentExpenses;

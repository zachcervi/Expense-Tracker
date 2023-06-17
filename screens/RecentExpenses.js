import { useContext } from "react";
import ExpenseOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expensesContext = useContext(ExpenseContext);
  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return <ExpenseOutput expenses={recentExpenses} periodName="Last 7 Days" />;
}

export default RecentExpenses;

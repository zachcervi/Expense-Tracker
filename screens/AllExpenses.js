import { useContext } from "react";
import ExpenseOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";

function AllExpenses() {
  const expensesContext = useContext(ExpenseContext);
  return (
    <ExpenseOutput expenses={expensesContext.expenses} periodName="Total" />
  );
}

export default AllExpenses;

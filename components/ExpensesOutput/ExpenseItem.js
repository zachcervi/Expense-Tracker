import { Pressable, View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, description, date, amount }) {
  const navigation = useNavigation();
  function expensePressedHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  return (
    <Pressable
      onPress={expensePressedHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 12,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  amountContainer: {
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: 4,
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default ExpenseItem;

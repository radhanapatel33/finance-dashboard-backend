import Record from "../models/Record.js";

// SUMMARY API
export const getSummary = async (req, res) => {
  try {
    const records = await Record.find();

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach((r) => {
      if (r.type === "income") totalIncome += r.amount;
      else totalExpense += r.amount;
    });

    const netBalance = totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      netBalance
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
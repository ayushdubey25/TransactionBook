const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionCtrl");

const router = express.Router();

//routes
//add transaction POST
router.post("/add-transaction", addTransaction);

//edit transaction
router.post("/edit-transaction", editTransaction);

//delete transaction
router.post("/delete-transaction", deleteTransaction);

//get transaction
router.post("/get-transacion", getAllTransaction);

module.exports = router;

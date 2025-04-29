const express = require('express');
const { addExpense, getExpenses, updateExpense, deleteExpense } = require('../controllers/expenseController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, addExpense)
  .get(protect, getExpenses);

router.route('/:id')
  .put(protect, updateExpense)
  .delete(protect, deleteExpense);

module.exports = router;

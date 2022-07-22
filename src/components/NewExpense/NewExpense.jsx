import React from 'react';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

function NewExpense({ addExpenseHandler }) {
    const [showForm, setIsOpen] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        addExpenseHandler(expenseData)
    }

    const formHandler = () => {
        setIsOpen((oldValue) => { return !oldValue })
    }

    return <div className='new-expense'>
        {showForm
            ? <ExpenseForm onCancel={formHandler} onSaveExpenseData={saveExpenseDataHandler} />
            : <button onClick={formHandler}>Add New Expense</button>}

    </div>
}

export default NewExpense;
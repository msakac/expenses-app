import React from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

function NewExpense({addExpenseHandler}) {

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(expenseData)
        addExpenseHandler(expenseData)
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;
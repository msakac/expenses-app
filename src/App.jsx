import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenseList = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]; 

  const [expenses, setExpenses] = useState(expenseList);

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    setExpenses((oldExpenses)=>{
      return [...oldExpenses, expense];
    })
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Lets start'),
  //   React.createElement(Expenses, {expenses: expenses})
  // );

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;

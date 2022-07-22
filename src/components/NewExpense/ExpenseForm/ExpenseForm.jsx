import { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     date: '',
    //     amount: ''
    // });

    const titleChangeHandler = (e) => {
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: e.target.value
        //     }
        // })
        setTitle(e.target.value)
    };

    const dateChangeHandler = (e) => {
        setDate(e.target.value)
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         date: e.target.value
        //     }
        // })
    };

    const amountChangeHandler = e => {
        setAmount(e.target.value)
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         amount: e.target.value
        //     }
        // })
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };

        console.log(expenseData);
        setTitle('');
        setDate('');
        setAmount('');
    };


    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={title} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;
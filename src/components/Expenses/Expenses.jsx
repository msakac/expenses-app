import { useState } from 'react';
import Card from '../Card/Card'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import './Expenses.css'
import ExpensesChart from './ExpensesChart/ExpensesChart';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList'

function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    };

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter filteredYear={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;
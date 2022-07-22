import { useState } from 'react';
import Card from '../Card/Card'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

function Expenses({ expenses }) {
    const [filteredExpenses, setFilteredExpenses] = useState(expenses);
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterByYear = (selectedYear) => {
        setFilteredYear(selectedYear)
        const filterArray = expenses.filter((expense) => {
            const year = new Date(expense.date).getFullYear();
            if (year == filteredYear) {
                return expense;
            }
        })
        setFilteredExpenses(filterArray)
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterByYear} />
                {
                    filteredExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)
                }
            </Card>
        </div>
    )
}

export default Expenses;
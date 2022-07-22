import { useState } from 'react';
import Card from '../Card/Card'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState('2020')

        const filterChangeHandler = (selectedYear) =>{
            setFilteredYear(selectedYear)
        };

        const filterArray = expenses.filter((expense) => {
            return expense.date.getFullYear().toString() === filteredYear;
        });


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter filteredYear={filteredYear} onChangeFilter={filterChangeHandler} />
                {
                    filterArray.map(expense => <ExpenseItem key={expense.id} expense={expense} />)
                }
            </Card>
        </div>
    )
}

export default Expenses;
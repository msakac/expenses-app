import { useState } from 'react';
import Card from '../Card/Card'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

function Expenses({ expenses }) {
    const [filteredExpenses, setFilteredExpenses] = useState(expenses);

    const filterByYear = (filter) =>{
        const filterArray = expenses.filter((expense) => {
            const year = new Date(expense.date).getFullYear();
            if(year == filter){
                return expense;
            }
        })
        setFilteredExpenses(filterArray)
        
    }
    
    return (
        <div>
            <ExpensesFilter filterByYear={filterByYear}/>
            <Card className='expenses'>
                {
                    filteredExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)
                }
            </Card>
        </div>
    )
}

export default Expenses;
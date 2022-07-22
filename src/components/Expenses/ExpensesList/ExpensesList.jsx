import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css'

function ExpensesList({ expenses }) {

    if (expenses.length === 0) {
        return <p>No expenses found!</p>;
    }

    return <ul className='expenses-list'>
        {expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}
    </ul>
}

export default ExpensesList;
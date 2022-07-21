import Card from '../Card/Card'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import './Expenses.css'

function Expenses({ expenses }) {
    console.log(expenses)
    return (
        <Card className='expenses'>
            {
                expenses.map(expense => <ExpenseItem expense={expense} />)
            }
        </Card>
    )
}

export default Expenses;
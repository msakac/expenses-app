import Card from '../../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem({ expense }) {

    const [title, setTitle] = useState(expense.title);

    const clickHandler = () => {
        console.log('Clickeed')
        setTitle('helou')
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={expense.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${expense.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
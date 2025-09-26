'use client';
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    quantity: number;
}

export const QuantitySelector = ({quantity}: Props) => {
    
    const [count, setCount] = useState(quantity);

    const onQuantityChange = (value: number) => {
        if(value < 1) return;
        if(value > 5) return;
        setCount(value);
    }


    return (
    <div>
        <h3 className='flex items-center gap-2'>
            <button onClick={() => onQuantityChange(count - 1)}>
                <IoRemoveCircleOutline size={30}/>
            </button>
            <span className="mx-3 px-5 bg-gray-100 text-center rounded">{count}</span>
            <button onClick={() => onQuantityChange(count + 1)}>
                <IoAddCircleOutline size={30}/>
            </button>
        </h3>
    </div>
  )
}

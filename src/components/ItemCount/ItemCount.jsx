import {useState} from 'react'

export const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(0)

    function add(){
      if(count < stock){
      setCount(count + 1)
    }
    }

    function substract(){
      if (count > 0){
      setCount(count - 1)
    }
    }

    function reset(){
      setCount(0)
    }

  return (
        <div className='counter-box'>
            <h3 className='my-2'>Counter</h3>
            <p>Stock: {stock}</p>
            <p>Cantidad: {count}</p>

            <div>
                <button className='btn btn-outline-danger btn-m' onClick={substract}> - </button>
                <button className='btn btn-outline-primary btn-m' onClick={add}> + </button>
                <button className='btn btn-outline-warning btn-m' onClick={reset}> Reset</button>
            </div>
            <div>
              <button className='btn btn-primary btn-m' onClick={() => onAdd(count)}>Confirmar</button>
            </div>
        </div>
  )
}

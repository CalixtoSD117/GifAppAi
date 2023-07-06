import { useState } from 'react'

const Buscador = ({onNewCategory}) => {

    const [inputvalue, setinputvalue] = useState([''])

    const onInputChange = ({target}) => {
        setinputvalue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputvalue.trim().length <= 1) return;
        onNewCategory(inputvalue.trim())
        setinputvalue('')
    }

  return (
    <form onSubmit={onSubmit}>
        <input
        className='p-1 rounded-md' 
        type="text"
        placeholder='Buscar Gifs'
        value={inputvalue}
        onChange={onInputChange}
        />
    </form>
  )
}

export default Buscador
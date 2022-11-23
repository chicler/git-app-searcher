import React, { useState } from 'react'

export const GiphyApp = () => {
  const [categories, setcategories] = useState(['Iron-man', 'Hawkeye']);
  const InputAdd = () => {
    return(
      <>
        <input id='hero' type="text" placeholder='Agrege nombre'/>
      </>
    )
  }
  const handleAdd = () => {
    setcategories(cats => [...cats, {}]);
    }
  return (
    <div>
      <h2 className='bg-black sm:bg-red-600'>GiphyApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <form>
      <InputAdd />
      </form>
      <ol>{
        categories.map(category => {
          return <li key={category}>{category}</li>
        })
      }</ol>
    </div>
  )
}

//Me quede en el video 8 de GifExpertApp

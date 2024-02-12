import React, { useState } from 'react'

function App() {
  const [data, setdata] = useState([])
  const [task, setTask] = useState('')
  const [desc, setdesc] = useState('')

  let addHandler = (e) => {
    e.preventDefault()
    setdata([...data, { task, desc }])
    setTask('')
    setdesc('')
  }

  let deleteHandler = (i) => {
    let copyData = [...data]
    copyData.splice(i, 1)
    setdata(copyData)
  }

  let renderTask;
  if (data.length > 0) {
    renderTask = data.map((e, idx) => {
      return <div key={idx} className='space-y-4 mt-5'>
        <p className='bg-gray-200 p-2'><strong>Todo : </strong>{e.task}</p>
        <p className='bg-gray-200 p-2'><strong>Desc : </strong>{e.desc}</p>
        <button onClick={(i) => deleteHandler()} className='bg-black py-2 text-white px-3 rounded-md'>Remove</button>
      </div>
    })
  } else {
    renderTask = <p className='text-2xl'>No task available</p>
  }


  return (
    <>
      <h1 className='text-4xl bg-black text-white text-center py-4 font-bold'>My Todo List</h1>
      <div className='w-fit mx-auto'>
        <form className='space-x-6 mt-10'>
          <input value={task} onChange={(e) => setTask(e.target.value)} required className='px-2 py-2 w-64 outline-none border rounded-md border-black' type="text" placeholder='Enter Todo' />
          <input value={desc} onChange={(e) => setdesc(e.target.value)} required className='px-2 py-2 w-64 outline-none border rounded-md border-black' type="text" placeholder='Enter Description' />
          <button onClick={addHandler} className='bg-black py-2 text-white px-3 rounded-md'>Add Task</button>
        </form>
        <div className='space-y-4 mt-4'>
          <h2>{renderTask}</h2>
        </div>
      </div>
    </>
  )
}

export default App


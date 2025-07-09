import './App.css'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import Loading from "./assets/spinning-dots.svg"
import { Suspense, useState } from 'react'
import createTodoQueryOptions from './queryOptions/createTodoQueryOptions'
import Card from './components/Card'


function App() {
  // const [on, setOn] = useState(true)
  // useQuery takes an object as argument, the object needs two propoerties to work properly (queryKey and queryFn)
  // const [id, setId] = useState(1)
  // const {data, isPending, refetch, error} = useQuery({
  //   queryKey: ['todos', id], // Used for fetching and caching data, must be unique
  //   // queryFn: getTodos,
  //   queryFn: () => getTodos(id),
  //   enabled: on, // Condition
  // })

  const { data } = useSuspenseQuery(createTodoQueryOptions())

  // Super easy to do error fetching
  // if (error) {
  //   alert("Something went wrong!")
  // }

  return (
    <>
      {/* <div>{ isPending ? <img src={Loading} alt='loading...'/> : JSON.stringify(data?.slice(0, 10))}</div> */}
      {/* <button onClick={() => refetch()}>Refresh</button> */}
      {/* <button onClick={() => setId((prev) => prev + 1)}>Increment ID</button> */}

      {/* <div>
        {data[0]?.title}
      </div> */}

      <Suspense>
        <Card/>
      </Suspense>
    </>
  )
}



// const getTodos = async (id: number) => {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)

//   return await response.json()
// }


export default App

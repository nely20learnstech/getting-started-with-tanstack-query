import { useQueries } from "@tanstack/react-query"
import createTodoQueryOptions from "../queryOptions/createTodoQueryOptions"
import createUsersQueryOptions from "../queryOptions/createUsersQueryOptions"
import createPostQueryOptions from "../queryOptions/createPostQueryOptions"

export default function Card() {
    const [{data}, result2, result3] = useQueries({
        queries: [
            createTodoQueryOptions(),
            createUsersQueryOptions(),
            createPostQueryOptions()
        ],
    })

    return(
        <div className="p-4 border-blur-500 border-2">
            <h1 className="text-blue-500 text-5xl mb-2">CARD</h1>
            {JSON.stringify(data?.slice(0, 10))}
        </div>
    )
}



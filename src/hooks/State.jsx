import { useState } from "react"
const State = () => {
    const [count, setCount] = useState(0)
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    return (
        <div>
            <h3>UseState Examples</h3>


            <h3>Count: {count} </h3>
            <button onClick={() => setCount(count + 1)}>Increment</button><br></br>
            <button onClick={() => setLike(like + 1)}>👍{like}</button><br></br>
        <button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button>
        </div>
    )
}

export default State
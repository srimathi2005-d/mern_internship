const Child = ({send}) => {
  return (
    <div>
        <button onClick={()=>send("hello from child")}>send data</button>
    </div>
  )
}

export default Child
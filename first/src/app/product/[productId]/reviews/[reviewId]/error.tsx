"use client"


const error = ({error,reset}:{
    error:Error,
    reset:()=>void
}) => {
  return (
    <>{error.message}
    <button onClick={reset}>Click Me</button>
    </>
  )
}

export default error
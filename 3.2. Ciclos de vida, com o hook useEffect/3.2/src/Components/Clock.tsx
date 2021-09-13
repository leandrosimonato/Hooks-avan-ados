import { useEffect, useState } from "react"

function Clock () {
  const [time, setTime] = useState<Date>()

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
  }, 1000)
  }, [])
  

  return <div>
    agora:{ new Date().toLocaleTimeString() }
  </div>
}


export default Clock
import { useState } from "react"

function Person() {
  const [person, setPerson] = useState<string>('Leandro')

  setTimeout(() => {
    setPerson('Ana Carolina ')
  }, 2000);

  return <div>
    <h1>
      Perfil
    </h1>
    <p>Este é o perfil de { person }</p>
  </div>
}



export default Person
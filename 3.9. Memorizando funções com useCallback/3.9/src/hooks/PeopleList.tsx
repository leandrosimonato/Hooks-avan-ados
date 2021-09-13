import usePeople from "./usePeople";

export default function PeopleList() {
  const { people, addPerson } = usePeople()

  return <>
    <ul>
      { people.map(person => <li key={person}>{ person }</li>)}
    </ul>
    <button onClick={() => addPerson('Antonella')}>
      adicionar pessoa
    </button>
  </>
}


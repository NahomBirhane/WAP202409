import { useState } from "react"

type Student = {
  firstname: string;
  lastname: string;
  age: number;
}

export default function App() {

  const [student, setStudent] = useState<Student>({firstname: 'Default', lastname:'Default', age: 0});

  const handleClick = () => {

    setStudent({firstname: 'John', lastname: 'Smith', age: 10}); //shallow
  }

  const {firstname, lastname, age} = student;

  return (
    <div>
      <p>{firstname}, {lastname}, {age}</p>
      <button onClick={handleClick}>Update Student</button>
    </div>
  )
}
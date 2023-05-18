import React, {useState} from 'react'

const Test = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("Text Changed: Hello World!")}>Change Text</button>
    </div>
  )
}

export default Test
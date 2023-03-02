import React, { useEffect, useRef, useState } from 'react'

const Render = () => {
    const [name, setName] = useState('');
    const count = useRef(1);
    const nameRef = useRef();

    useEffect(() => {
        count.current = count.current + 1;
        console.log(count.current);
        nameRef.current = name;
    });
    console.log('render');
  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <h1>My name is {name} and no. of renders {count.current} and previous name is {nameRef.current}</h1>
    </div>
  )
}

export default Render
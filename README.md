# Dado el siguiente componente Counter, crea varios test para él
```javaScript
import React, { useState } from 'react'; 
 function Counter() {
  const [count, setCount] = useState(0); 
 const handleClick = () => {
    setCount(count + 1);
  }; 
 return (
    <div>
      <p>Contador: {count}</p>
 <button onClick={handleClick}>Incrementar</button> 
 </div>
  );
} 
 export default Counter;
 ```
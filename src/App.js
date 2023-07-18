import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

function App(){
  const[tarefas, setTarefas] = useState([]);

  const[input, setInput] = useState('');

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas]);

  function adicionar(){
      setTarefas([...tarefas, input]);
      setInput('');
  }

  const totalTarefas = useMemo(()=> tarefas.length, [tarefas])

  return(
      <div class="card">
          <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
          <button type="button" onClick={adicionar}>Adicionar</button>
       <ul>
          {tarefas.map(tarefa => (
              <li key={tarefa}>{tarefa}</li>
          ))}
      </ul>

      <br/>

      <strong>Você tem {totalTarefas} tarefas!</strong>
      
      </div>

  );
}

export default App;
import React, {useState} from "react";
function App() {
  const [name, setName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newname = event.target.value.toUpperCase();
    setName(newname);
  }
  
  return (
    <>
    <div>
    <h1>
      React Form
    </h1>

    <form action="">
      
    <fieldset>
      <legend>DADOS PESSOAIS</legend>
      
      <label>Nome 
        <input 
        type="text" 
        id="Nome"
        value={name}
        onChange={handleNameChange} 
        maxLength={40}
         />
      </label>

        <label >Email
        <input type="Email" id="Email" maxLength={50}/>
        </label>

        <label htmlFor="">CPF</label>
        <input type="text" id="CPF" maxLength={11}/>
        
      </fieldset>

    <fieldset>
      <legend>DADOS DE ENDEREÇO</legend>

      <label htmlFor="">Endereço</label>
      <input type="text" name="" id="" />

    </fieldset>
  
    </form>
    </div>
    </>
  );
}

export default App;

import React, { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="my-8 flex flex-col space-y-4 p-6 bg-white rounded-md shadow">
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      {console.log(title)}
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      {console.log(description)}
      <button
        onClick={() => onAddTaskSubmit(title, description)}
        className="hover:cursor-pointer bg-purple-400  text-white px-4 py-2 rounded-md space-2 hover:bg-purple-700"
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTasks;

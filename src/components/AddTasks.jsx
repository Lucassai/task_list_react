function AddTasks(onAddTask) {
  return (
    <div className="my-8 flex flex-col space-y-4 p-6 bg-white rounded-md shadow">
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        type="text"
        placeholder="Digite o titulo da tarefa"
        autoFocus
      />
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        type="text"
        placeholder="Digite a descrição da tarefa"
      />
      <button className="hover:cursor-pointer bg-purple-400  text-white px-4 py-2 rounded-md space-2 hover:bg-purple-700">
        Adicionar
      </button>
    </div>
  );
}
export default AddTasks;

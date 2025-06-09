function AddTasks() {
  return (
    <div className="flex flex-col space-y-4 p-6 bg-slate-300 rounded-md shadow">
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        type="text"
        placeholder="Digite o titulo da tarefa"
      />
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        type="text"
        placeholder="Digite a descrição da tarefa"
      />
      <button className="bg-slate-500 m text-white px-4 py-2 rounded-md space-2 hover:bg-slate-700">
        Adicionar
      </button>
    </div>
  );
}
export default AddTasks;

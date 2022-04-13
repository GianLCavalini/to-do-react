import { useState } from "react";

export function Input(props) {
  const [form, setForm] = useState({
    task: "",
    when: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  function handleConfirm() {
    props.catchNewTask(form);
    props.setTaskList([...props.taskList, form]);
    setForm({
      task: "",
      when: "",
    });
  }

  return (
    <>
      <label>Coloque sua tarefa: </label>
      <input
        name="task"
        onChange={handleChange}
        value={form.task}
        placeholder="Lavar roupa"
      />
      <label>Prazo: </label>
      <input
        name="when"
        onChange={handleChange}
        value={form.when}
        placeholder="... até sabado"
      />
      <button onClick={handleConfirm}>Confirmar</button>
    </>
  );
}

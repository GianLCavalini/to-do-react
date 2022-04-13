export function TaskList(props) {
  return (
    <ul>
      {props.tasks.map((currentTask) => {
        return (
          <li>
            <span>{currentTask.task}</span>
            <strong>{currentTask.when}</strong>
          </li>
        );
      })}
    </ul>
  );
}

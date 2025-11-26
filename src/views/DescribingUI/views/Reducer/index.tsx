import { Input, Checkbox, Button, type CheckboxProps } from 'antd';
import { useState, useReducer } from 'react';
import taskReducer from './taskReducer';
import { type Task } from './types';

export default function Reducer() {
  const [taskName, setTaskName] = useState('');
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const handleAddTask = () => {
    if (!taskName) return;
    dispatch({
      type: 'add',
      payload: { id: nextId++, text: taskName, done: false },
    });
    setTaskName('');
  };

  const handleTaskChange = (task: Task) => {
    dispatch({
      type: 'change',
      payload: task,
    });
  };

  const handleDeleteTask = (id: Task['id']) => {
    dispatch({
      type: 'delete',
      payload: { id },
    });
  };

  return (
    <div>
      <h1>我的行程安排</h1>
      <div flex="~ items-center gap-3" mb-3>
        <Input value={taskName} onChange={e => setTaskName(e.target.value)} className="w-200px" />
        <Button onClick={handleAddTask}>添加</Button>
      </div>
      <TaskList tasks={tasks} onChangeTask={handleTaskChange} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

let nextId = 3;
const initialTasks: Task[] = [
  { id: 0, text: '参观博物馆', done: true },
  { id: 1, text: '去游泳馆游泳', done: true },
  { id: 2, text: '打游戏', done: false },
];

interface TaskListProps {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (id: Task['id']) => void;
}

type CheckboxOnChange = NonNullable<CheckboxProps['onChange']>;

function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
  const [editId, setEditId] = useState<Task['id']>();

  const onChange = (e: Parameters<CheckboxOnChange>[0], task: Task) => {
    const checked = e.target.checked;
    onChangeTask({ ...task, done: checked });
  };

  const handleDelete = (task: Task) => {
    onDeleteTask(task.id);
  };

  return (
    <div flex="~ col gap-3">
      {tasks.map(item => (
        <div flex="~ items-center gap-3" key={item.id}>
          {editId === item.id ? (
            <>
              <Input
                value={item.text}
                onChange={e => onChangeTask({ ...item, text: e.target.value })}
                className="w-200px"
              />
              <Button onClick={() => setEditId(undefined)}>保存</Button>
            </>
          ) : (
            <>
              <Checkbox checked={item.done} onChange={e => onChange(e, item)}>
                {item.text}
              </Checkbox>
              <Button onClick={() => setEditId(item.id)}>编辑</Button>
            </>
          )}

          <Button onClick={() => handleDelete(item)}>删除</Button>
        </div>
      ))}
    </div>
  );
}

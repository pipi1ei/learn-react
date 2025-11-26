import { Button } from 'antd';
import { useRef, useState } from 'react';

export default function Ref() {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);

  const passedTime = ((now - startTime) / 1000).toFixed(3);

  const intervalId = useRef<ReturnType<typeof setInterval>>(null);

  function clear() {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clear();
    intervalId.current = setInterval(() => {
      setNow(Date.now);
    }, 10);
  }

  const inputRef = useRef<HTMLInputElement>(null);
  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div flex="~ col gap-5">
      <h3 className="text-2xl leading-snug font-700">
        与 useState 类似，React 会记住 useRef 的值，但
        ref值的变化不会导致组件的重新渲染。一般用在记录定时器id、存储和操作DOM元素、存储不需要被用来计算JSX的其他对象等
      </h3>
      <div border="~ solid blue-300 rounded-lg" p-4>
        <p className="text-lg leading-relaxed font-500">1.计时器案例</p>
        <p className="text-xl leading-relaxed font-500">时间过去了：{passedTime}</p>
        <Button onClick={handleStart}>开始</Button>
        <Button onClick={clear}>停止</Button>
      </div>
      <div border="~ solid blue-300 rounded-lg" p-4>
        <p className="text-lg leading-relaxed font-500">2.操作DOM</p>
        <input ref={inputRef} border="~ solid gray" />
        <Button onClick={handleFocus}>聚焦输入框</Button>
      </div>
    </div>
  );
}

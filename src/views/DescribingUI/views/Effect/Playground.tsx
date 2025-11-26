import { Input } from 'antd';
import { useEffect, useState } from 'react';

export function Playground() {
  const [text, setText] = useState('a');

  useEffect(() => {
    function timerLog() {
      console.log('记录日志内容: ', text);
    }

    console.log('准备记录日志内容：', text);
    let timerId: ReturnType<typeof setTimeout> | null = null;
    timerId = setTimeout(() => {
      timerLog();
      timerId = null;
    }, 3000);

    return () => {
      if (timerId) {
        console.log('清理日志：', text);
        clearTimeout(timerId);
      }
    };
  }, [text]);

  return (
    <div>
      <div flex="~ items-center gap-3">
        <span shrink-0>日志内容：</span>
        <Input value={text} onChange={e => setText(e.target.value)} />
      </div>
      <p className="text-lg font-600">{text}</p>
    </div>
  );
}

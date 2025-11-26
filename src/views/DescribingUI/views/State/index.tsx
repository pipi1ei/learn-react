import { useState } from 'react';
import { Button } from 'antd';

export default function State() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div flex="~ col gap3">
      <h2 className="text-xl font-700 mb3">State 的保留和重置</h2>
      <p>
        react 中对组件state 的保留是根据组件在UI树中的位置确定的，而不是组件在 JSX 中的位置确定的
      </p>
      <p>
        下面的例子渲染了两个 Counter 组件，根据是否使用 Counter 来判断具体渲染那个，示例代码如下
      </p>
      {isFancy ? (
        <Counter className="self-start" isFancy={true} />
      ) : (
        <Counter className="self-start" isFancy={false} />
      )}
      <div>
        <label>
          <input type="checkbox" checked={isFancy} onChange={() => setIsFancy(!isFancy)} />
          使用好看的样式
        </label>
      </div>
    </div>
  );
}

function Counter({ className = '', isFancy }: { className?: string; isFancy: boolean }) {
  const [count, setCount] = useState(0);

  return (
    <div
      className={`${className} p5 ${isFancy ? 'bg-red-100' : ''}`}
      border="~ solid gray rounded"
      flex="inline col gap-4"
    >
      <h1>{count}</h1>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}

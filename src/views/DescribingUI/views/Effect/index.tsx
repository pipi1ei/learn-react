import { Button, Divider, Input } from 'antd';
import { useState } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { Playground } from './Playground';

export default function Effect() {
  const [text, setText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowPlayground, setIsShowPlayground] = useState(false);

  return (
    <div flex="~ col gap-4 items-start">
      <Input value={text} onChange={e => setText(e.target.value)} w-200px />
      <Button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? '暂停' : '播放'}</Button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      <Divider />
      <Button type="primary" onClick={() => setIsShowPlayground(!isShowPlayground)}>
        {isShowPlayground ? '卸载Playground组件' : '挂载Playground组件'}
      </Button>
      {isShowPlayground && <Playground />}
    </div>
  );
}

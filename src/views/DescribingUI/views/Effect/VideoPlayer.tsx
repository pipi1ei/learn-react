import { useRef, useEffect } from 'react';

export interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

export function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  console.log('videoPlayer render');

  useEffect(() => {
    if (isPlaying) {
      console.log('video play');
      videoRef.current?.play();
    } else {
      console.log('video pause');
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return <video ref={videoRef} src={src} loop playsInline className="w-300px"></video>;
}

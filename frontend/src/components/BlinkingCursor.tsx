import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Loader } from '@/components/Loader';
import { Progress } from '@/components/ui/progress';

import { responseProgressState } from 'client-types/*';

export const CURSOR_PLACEHOLDER = '\u200B';

interface Props {
  whitespace?: boolean;
}

export default function BlinkingCursor(_: Props) {
  const { id } = useParams();
  const progressState = useRecoilValue(responseProgressState);

  const [progress, setProgress] = useState(0);

  const showInteractiveProgress = id === progressState.thread_id;

  useEffect(() => {
    if (!showInteractiveProgress) {
      return;
    }

    setProgress(parseInt(progressState.percentage, 10));
  }, [progressState, showInteractiveProgress]);

  if (!showInteractiveProgress) {
    return (
      <div className="flex gap-2 items-center pt-6">
        <Loader className="!size-4" />
        <div className="text-muted-foreground">
          {messageForProgress(progress)}
        </div>
      </div>
    );
  }
  //   <span
  //   className={cn(
  //     'inline-block h-3.5 w-3.5 bg-foreground rounded-full animate-pulse',
  //     whitespace && 'ml-2'
  //   )}
  // />

  return (
    <div className="grid gap-1">
      <div className="flex gap-2 items-center">
        <Progress value={progress} />
        <div className="text-sm w-10 shrink-0 text-muted-foreground ">
          {progress.toFixed(0)}%
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Loader className="!size-4" />
        <div className="text-muted-foreground">
          {messageForProgress(progress)}
        </div>
      </div>
    </div>
  );
}

const messageForProgress = (progress: number) => {
  const messages = {
    range1: ['Gathering your thoughts...'],
    range2: ['Connecting the dots...'],
    anticipation: ['Almost there...']
  };

  const getRandomMessage = (list: string[]) =>
    list[Math.floor(Math.random() * list.length)];

  if (progress < 60) {
    return getRandomMessage(messages.range1);
  }

  if (progress < 80) {
    return getRandomMessage(messages.range2);
  }

  return getRandomMessage(messages.anticipation);
};

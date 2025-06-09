import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { responseProgressState } from 'client-types/*';

import { Progress } from './ui/progress';

export const CURSOR_PLACEHOLDER = '\u200B';

interface Props {
  whitespace?: boolean;
}

export default function BlinkingCursor({ whitespace }: Props) {
  const { id } = useParams();
  const progressState = useRecoilValue(responseProgressState);

  console.log('progressState', progressState);

  const [progress, setProgress] = useState(0);

  const showInteractiveProgress = id === progressState.thread_id;

  console.log('showInteractiveProgress', showInteractiveProgress);

  useEffect(() => {
    if (showInteractiveProgress) {
      return;
    }

    const progressPercentage = Number(progressState.percentage);

    setProgress(progressPercentage);
  }, [progressState, showInteractiveProgress]);

  if (!showInteractiveProgress) {
    return (
      <span
        className={cn(
          'inline-block h-3.5 w-3.5 bg-foreground rounded-full animate-pulse',
          whitespace && 'ml-2'
        )}
      />
    );
  }

  return <Progress value={progress} />;
}

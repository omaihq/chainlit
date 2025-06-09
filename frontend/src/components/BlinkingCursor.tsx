import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Loader } from '@/components/Loader';

import { responseProgressState } from 'client-types/*';

export const CURSOR_PLACEHOLDER = '\u200B';

interface Props {
  whitespace?: boolean;
}

export default function BlinkingCursor(_: Props) {
  const { id } = useParams();
  const progressState = useRecoilValue(responseProgressState);

  const [progress, setProgress] = useState<number | undefined>(undefined);

  const showInteractiveProgress = id === progressState.thread_id;

  useEffect(() => {
    if (!showInteractiveProgress) {
      return;
    }

    setProgress(parseInt(progressState.percentage, 10));
  }, [progressState, showInteractiveProgress]);

  return (
    <div className="flex gap-2 items-center pt-6">
      <Loader className="!size-4" />
      <div className="flex items-center">
        <div className="text-muted-foreground">Thinking...</div>
        {!!progress && (
          <div className="text-muted-foreground">{progress.toFixed(0)}%</div>
        )}
      </div>
    </div>
  );
}

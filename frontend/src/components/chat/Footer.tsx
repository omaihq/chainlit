import { cn, hasMessage } from '@/lib/utils';
import { FileSpec, useChatMessages } from '@/react-client';
import { MutableRefObject } from 'react';

import WaterMark from '@/components/WaterMark';

import MessageComposer from './MessageComposer';

interface Props {
  fileSpec: FileSpec;
  onFileUpload: (payload: File[]) => void;
  onFileUploadError: (error: string) => void;
  autoScrollRef: MutableRefObject<boolean>;
  showIfEmptyThread?: boolean;
}

export default function ChatFooter({ showIfEmptyThread, ...props }: Props) {
  const { messages } = useChatMessages();
  if (!hasMessage(messages) && !showIfEmptyThread) return null;

  return (
    <div className={cn('relative flex flex-col items-center gap-2 w-full')}>
      <MessageComposer {...props} />
      <WaterMark />
    </div>
  );
}

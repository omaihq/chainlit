import { RecoilState, atom } from 'recoil';

import { ICommand } from 'client-types/*';

export interface IAttachment {
  id: string;
  serverId?: string;
  name: string;
  size: number;
  type: string;
  uploadProgress?: number;
  uploaded?: boolean;
  cancel?: () => void;
  remove?: () => void;
}

export const attachmentsState: RecoilState<IAttachment[]> = atom<IAttachment[]>(
  {
    key: 'Attachments',
    default: []
  }
);

export const persistentCommandState: RecoilState<ICommand | undefined> = atom<
  ICommand | undefined
>({
  key: 'PersistentCommand',
  default: undefined
});

export interface IResponseProgress {
  threadId: string;
  percentage: number;
}

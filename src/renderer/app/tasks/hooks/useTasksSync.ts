import { useIpcInvoke } from '../../../shared/ipc/useIpcInvoke';
import {
  IsSyncingWithApisResult,
  TaskEvents,
  TaskSynchronizerEvents,
} from '../../../../shared/types/tasks';
import { useCallback, useState } from 'react';
import { useMount } from 'react-use';
import { useIpcReceiver } from '../../../shared/ipc/useIpcReceiver';
import { useTasksList } from './useTasksList';

export const useTasksSync = () => {
  const { getTasks } = useTasksList();

  const [
    sync,
    { loading: isSyncingFromInvoke, error: syncErrorFromInvoke },
  ] = useIpcInvoke<never>(TaskEvents.SyncWithApis);

  const [getIsSyncing] = useIpcInvoke<never, IsSyncingWithApisResult>(
    TaskEvents.IsSyncingWithApis
  );

  const [isSyncing, setIsSyncing] = useState(false);

  useMount(() => {
    getIsSyncing().then((result) => setIsSyncing(result.isSyncing));
  });

  useIpcReceiver(
    TaskSynchronizerEvents.SyncEnded,
    useCallback(() => {
      setIsSyncing(false);
    }, [])
  );

  return {
    isSyncing: isSyncing || isSyncingFromInvoke,
    sync: useCallback(async () => {
      await sync();
      await getTasks();
    }, [getTasks, sync]),
    error: syncErrorFromInvoke,
  };
};

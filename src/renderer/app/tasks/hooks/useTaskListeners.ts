import { useCallback } from 'react';
import {
  Task,
  TaskOperations,
  TaskSubscriptionTopics,
} from '../../../../shared/types/tasks';
import { useIpcSubscriber } from '../../../shared/ipc/useIpcSubscriber';
import { useQueryClient } from 'react-query';

export const useTasksListeners = () => {
  const queryClient = useQueryClient();

  const handleActiveTaskChange = useCallback(
    async (_: undefined, task: Task) => {
      console.log(`Active task changed:`, task);
      queryClient.setQueryData(TaskOperations.GetActiveTask, task);
    },
    [queryClient]
  );
  useIpcSubscriber(
    TaskSubscriptionTopics.ActiveTaskUpdated,
    handleActiveTaskChange
  );
};

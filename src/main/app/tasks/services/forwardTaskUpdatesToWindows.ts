import { AppContext } from '../../../context';
import { RepositoryEvents } from '../../../shared/database/Repository';
import { sendEventToAllWindows } from '../../../shared/windows/sendEventToAllWindows';
import { TaskEvents } from '../../../../shared/types/tasks';

export const forwardTaskUpdatesToWindows = ({ taskRepository }: AppContext) => {
  taskRepository.events.on(RepositoryEvents.EntityUpdated, (task) => {
    sendEventToAllWindows(TaskEvents.TaskUpdated, task);
  });

  taskRepository.events.on(RepositoryEvents.EntitiesDeleted, (tasks) => {
    sendEventToAllWindows(TaskEvents.TasksDeleted, tasks);
  });
};
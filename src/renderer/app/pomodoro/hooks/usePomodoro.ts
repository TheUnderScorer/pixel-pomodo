import { useRecoilState } from 'recoil';
import { pomodoroState } from '../state/pomodoroState';
import { useIpcRenderer } from '../../../providers/IpcRendererProvider';
import { useCallback, useEffect, useState } from 'react';
import { Pomodoro, PomodoroEvents } from '../../../../shared/types';

export const usePomodoro = () => {
  const ipc = useIpcRenderer();

  const [loading, setLoading] = useState(false);
  const [pomodoro, setPomodoro] = useRecoilState(pomodoroState);

  const update = useCallback(
    (update: (prev: Pomodoro) => Pomodoro) => {
      const payload = update(pomodoro!);

      ipc.invoke(PomodoroEvents.Update, payload).catch(console.error);
    },
    [ipc, pomodoro]
  );

  useEffect(() => {
    if (!pomodoro && !loading) {
      setLoading(true);
      ipc.invoke(PomodoroEvents.GetState).then((state: Pomodoro) => {
        setPomodoro(state);
        setLoading(false);
      });
    }
  }, [ipc, loading, pomodoro, setPomodoro]);

  return { pomodoro, update, loading };
};
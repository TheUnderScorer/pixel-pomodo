import { Box, Menu, MenuList, Portal } from '@chakra-ui/core';
import React, {
  FC,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { atom, useRecoilState } from 'recoil';
import { clone } from 'ramda';
import { useMount } from 'react-use';

export interface ContextMenuBag {
  onContextMenu: (event: any) => any;
  open: boolean;
}

export interface ContextMenuProps {
  menu: ReactNode;
  children: (bag: ContextMenuBag) => ReactNode;
  id: string;
}

const contextMenus = atom<Record<string, boolean>>({
  default: {},
  key: 'contextMenu',
});

export const ContextMenu: FC<ContextMenuProps> = ({ menu, children, id }) => {
  const [menus, setMenus] = useRecoilState(contextMenus);

  const open = useMemo(() => {
    return Boolean(menus[id]);
  }, [id, menus]);

  const toggleOpen = useCallback(() => {
    const newMenus = clone(menus);
    newMenus[id] = !newMenus[id];

    setMenus(newMenus);
  }, [id, menus, setMenus]);

  const [xPos, setxPos] = useState<string>('');
  const [yPos, setyPos] = useState<string>('');

  const toggleMenu: MouseEventHandler<HTMLElement> = useCallback(
    (event) => {
      const newXPos = `${event.clientX}px`;
      const newYPos = `${event.clientY}px`;

      setxPos(newXPos);
      setyPos(newYPos);

      setMenus((prev) => {
        const entries = Object.entries(prev).map(([key, value]) => [
          key,
          key === id ? !value : false,
        ]);

        console.log({ entries });

        return Object.fromEntries(entries);
      });
    },
    [setMenus, id]
  );

  useMount(() => {
    setMenus((prev) => {
      const value = { ...prev };

      value[id] = false;

      return value;
    });
  });

  return (
    <>
      {open && (
        <Portal>
          <Box className="context-menu" position="fixed" left={xPos} top={yPos}>
            <Menu
              closeOnSelect={false}
              placement="auto"
              fixed={false}
              isLazy
              isOpen={open}
              onClose={() => toggleOpen()}
            >
              <MenuList>{menu}</MenuList>
            </Menu>
          </Box>
        </Portal>
      )}
      {children({ onContextMenu: toggleMenu, open })}
    </>
  );
};

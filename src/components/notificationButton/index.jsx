import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Box,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { AiOutlineBell } from "react-icons/ai";
import { useToken } from "../../providers/token";

import { useUser } from "../../providers/user";
import api from "../../services";

export const NotificationButton = () => {
  const { user, setUser, refreshUser } = useUser();
  const { token } = useToken();

  const notifySeen = () => {
    const patchedArray = user.notifications.map((notif) => {
      notif.seen = true;
      return notif;
    });
    api.patch(
      `users/${user.id}`,
      { notifications: patchedArray },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    refreshUser();
  };

  return (
    <Menu>
      {user.notifications.some((notif) => !notif.seen) ? (
        <MenuButton bgColor={"red"} as={Button} onClick={notifySeen}>
          <Icon as={AiOutlineBell} />
        </MenuButton>
      ) : (
        <MenuButton as={Button}>
          <Icon as={AiOutlineBell} />
        </MenuButton>
      )}
      <MenuList overflowY="scroll" maxH="300px">
        {user.notifications.map((notif) => {
          return !notif.seen ? (
            <MenuItem bgColor={"#f56539cf"}>{notif.message}</MenuItem>
          ) : (
            <MenuItem>{notif.message}</MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

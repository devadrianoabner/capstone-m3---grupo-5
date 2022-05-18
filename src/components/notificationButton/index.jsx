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
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { AiOutlineBell } from "react-icons/ai";
import { useToken } from "../../providers/token";

import { useUser } from "../../providers/user";
import api from "../../services";

export const NotificationButton = () => {
  const { user, setUser } = useUser();
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
  };

  return (
    <Menu>
      {user.notifications.some((notif) => !notif.seen) ? (
        <MenuButton
          bgColor={"red"}
          as={Button}
          rightIcon={<Icon as={AiOutlineBell} />}
          onClick={notifySeen}
        ></MenuButton>
      ) : (
        <MenuButton
          as={Button}
          rightIcon={<Icon as={AiOutlineBell} />}
        ></MenuButton>
      )}

      <MenuList>
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

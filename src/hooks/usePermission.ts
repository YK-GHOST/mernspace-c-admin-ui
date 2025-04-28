import { User } from "../store";

export const usePermission = () => {
  const allowedRoles = ["admin", "user"];

  const _hasPermission = (user: User | null) => {
    if (user) {
      return allowedRoles.includes(user.role);
    }
    return false;
  };

  return {
    hasPermission: _hasPermission,
  };
};

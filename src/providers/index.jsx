import { TokenProvider } from "./token";
import { UserProvider } from "./user";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TokenProvider>{children}</TokenProvider>
    </UserProvider>
  );
};

export default Providers;

import { DietsProvider } from "./diets";
import { TokenProvider } from "./token";
import { UserProvider } from "./user";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TokenProvider>
        <DietsProvider>{children}</DietsProvider>
      </TokenProvider>
    </UserProvider>
  );
};

export default Providers;

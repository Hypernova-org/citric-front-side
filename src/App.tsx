import { useGet } from "hooks";
import RoutesWrapper from "routes";
import "assets/styles/index.scss";
import useStore from "store";

function App() {
  const {
    getMe,
    logOut,
    auth: { isLoggedIn },
  } = useStore((state) => state);

  const { isLoading } = useGet({
    name: "get-me",
    url: "users/get-me/",
    onSuccess: (data) => {
      getMe({ data: data });
    },
    onError: (error) => {
      logOut();
    },
  });

  return <>{isLoading ? <div className="">Loader</div> : <RoutesWrapper />}</>;
}

export default App;

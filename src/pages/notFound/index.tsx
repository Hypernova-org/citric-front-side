import Button from "components/button";
import { useHooks } from "hooks";

const NotFound = () => {
  const { navigate } = useHooks();
  return (
    <div className="notfound-page">
        <p>not found</p>
    </div>
  );
};

export default NotFound;

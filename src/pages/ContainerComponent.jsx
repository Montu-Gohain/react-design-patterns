import CurrentUserLoader from "../components/CurrentUserLoader";
import UserInfo from "../components/ContainerComponents/UserInfo";

const ContainerComponent = () => {
  return (
    <CurrentUserLoader>
      <UserInfo />
    </CurrentUserLoader>
  );
};

export default ContainerComponent;

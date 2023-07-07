import LargePersonListItem from "../components/Person/LargePersonListItem";
import { people } from "../data/data";
import ModalComponent from "../components/ModalComponent";

const ModalPage = () => {
  return (
    <div>
      <ModalComponent>
        <LargePersonListItem person={people[0]} />
      </ModalComponent>
    </div>
  );
};

export default ModalPage;

import NumberedList from "../components/NumberedList.jsx";
import LargePersonListItem from "../components/Person/LargePersonListItem.jsx";
import SmallPersonListItem from "../components/Person/SmallPersonListItem.jsx";
import LargerProductListItem from "../components/Product/LargerProductListItem.jsx";
import RegularList from "../components/RegularList.jsx";
import { people, products } from "../data/data.js";
export const ListPage = () => {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <NumberedList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={LargerProductListItem}
      />
    </>
  );
};

/* eslint-disable react/prop-types */
// import CurrentUserLoader from "../components/CurrentUserLoader";
import UserInfo from "../components/ContainerComponents/UserInfo";
// import UserLoader from "../components/UserLoader";
// import ResourceLoader from "../components/ResourceLoader";
import ProductInfo from "../components/ContainerComponents/ProductInfo";
import DataSource from "../components/DataSource";
import axios from "axios";

const userUrl = "http://localhost:6060/api/user";
const productUrl = "http://localhost:6060/api/product";
// Todo : Adding localstorage functionality

const getLocalstorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h2>{message}</h2>;

const ContainerComponent = () => {
  return (
    <>
      {/* <ResourceLoader resourceName={"user"} resourceUrl={`${userUrl}/2`}>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceName={"product"} resourceUrl={`${productUrl}/2`}>
        <ProductInfo />
      </ResourceLoader> */}
      <DataSource
        getDataFunc={getLocalstorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
      <DataSource
        getDataFunc={async () => {
          const response = await axios.get(`${userUrl}/2`);
          return response.data;
        }}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={async () => {
          const response = await axios.get(`${productUrl}/2`);
          return response.data;
        }}
        resourceName="product"
      >
        <ProductInfo />
      </DataSource>
    </>
  );
};

export default ContainerComponent;

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ShopByCategory.css";

const ShopByCategory = () => {
  return (
    <div className="my-32 container mx-auto">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl lg:text-6xl font-bold font-edu-baloo text-edu-primary capitalize ">
          Shop by category
        </h2>
        <div className="h-2 w-48 bg-edu-secondary mx-auto my-4"></div>
        <p>
          Here is our most popular category for education and learning. Most
          kids like these category. just explore your toy
        </p>
      </div>
      <div className="my-16">
        <Tabs>
          <TabList>
            <Tab> Math Toys</Tab>
            <Tab>Language Toys</Tab>
            <Tab>Science Toys</Tab>
          </TabList>

          <TabPanel>
            <h2>math toys</h2>
          </TabPanel>
          <TabPanel>
            <h2>Language Toys</h2>
          </TabPanel>
          <TabPanel>
            <h2>Science Toys</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;

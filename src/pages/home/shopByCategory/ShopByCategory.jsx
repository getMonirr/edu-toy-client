import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ShopByCategory.css";
import { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";

const ShopByCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);
  // const [categories, setCategories] = useState([]);
  const [categoriesToys, setCategoriesToys] = useState([]);

  // for category
  // useEffect(() => {
  //   fetch("https://edu-toy-server.vercel.app/categories")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCategories(data);
  //     });
  // }, []);

  const categories = ["Math Toys", "Science Toys", "Language Toys"];

  // load data for specific category
  useEffect(() => {
    fetch(
      `https://edu-toy-server.vercel.app/categories/${categories[tabIndex]
        ?.split(" ")
        .join("-")}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategoriesToys(data);
      });
  }, [tabIndex]);

  return (
    <div className="my-16 lg:my-32 container mx-auto">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-bold font-edu-baloo text-edu-primary capitalize ">
          Shop by category
        </h2>
        <div className=" h-1 lg:h-2 w-48 bg-edu-secondary mx-auto my-4"></div>
        <p>
          Here is our most popular category for education and learning. Most
          kids like these category. just explore your toy
        </p>
      </div>
      <div className="my-16">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            {categories.map((cat, index) => (
              <Tab key={index}>{cat}</Tab>
            ))}
          </TabList>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16">
            {categoriesToys.map((toy) => (
              <SingleCategory key={toy._id} toy={toy} />
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;

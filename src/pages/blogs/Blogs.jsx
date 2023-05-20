import useTitle from "../../hooks/useTitle";
import PageDetails from "../shared/pageDetails/PageDetails";

const Blogs = () => {
  // dynamic title
  useTitle("| Blogs");
  return (
    <div>
      <PageDetails title={"See Our Blogs"}>
        hide
      </PageDetails>
    </div>
  );
};

export default Blogs;

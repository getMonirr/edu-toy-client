import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Edu-Toy ${title}`;
  }, [title]);
};

export default useTitle;

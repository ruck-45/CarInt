// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import Details from "./subComponent/Details";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));
  scrollTop();

  return <div><Details/></div>;
};

export default About;

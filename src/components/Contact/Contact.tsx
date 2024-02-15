// Dependencies
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import EmailForm from "./subComponent/EmailForm";
import Map from "./subComponent/Map";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  const location = useLocation();
  const { offset } = location.state || {};
  scrollTop(offset);

  return (
    <div className="grid lg:grid-cols-2 justify-start">
      <EmailForm />
      <Map />
    </div>
  );
};

export default Contact;

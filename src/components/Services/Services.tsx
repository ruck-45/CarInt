// Dependencies
import { useDispatch } from "react-redux";


// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import Service from "../../globalSubComponents/Service/Service";





const Services = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));
  scrollTop();



  return (
    <div className="py-[4rem]">
     <Service  />
     
    </div>
  );
};

export default Services;

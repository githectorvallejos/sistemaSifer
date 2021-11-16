import LoadRoutes from "../config/LoadRoutes";
import Header from "./header"
import Footer from "./footer";
import Drawer from "./Drawer";

export default function LayoutHome(props) {
  const { routes } = props;

  return (
    <div>
      <Drawer routes={routes}/>
      
    </div>
  );
}

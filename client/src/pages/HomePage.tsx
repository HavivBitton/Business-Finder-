import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      Welcome !
      <Link to={"/signinAndRegister"}>
        <Button variant="outline">get started!</Button>
      </Link>
    </div>
  );
};

export default HomePage;

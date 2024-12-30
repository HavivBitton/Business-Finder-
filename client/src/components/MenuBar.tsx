import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const MenuBar = () => {
  const username = useSelector((state: RootState) => state.user.value);

  return (
    <div className="flex flex-row h-10 bg-black">
      <Button className="text-white" variant="ghost">
        Home
      </Button>
      <Button className="text-white" variant="ghost">
        test2
      </Button>
      <Button className="text-white" variant="ghost">
        test3
      </Button>
      <Button className="text-white" variant="ghost">
        {username}
      </Button>
    </div>
  );
};

export default MenuBar;

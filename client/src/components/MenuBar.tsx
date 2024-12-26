import { Button } from "@/components/ui/button";

const MenuBar = () => {
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
    </div>
  );
};

export default MenuBar;

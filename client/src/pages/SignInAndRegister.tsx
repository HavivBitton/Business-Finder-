import { Register } from "@/components/Register";
import Signin from "@/components/Signin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SigninAndRegister = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Signin />
        </TabsContent>
        <TabsContent value="password">
          <Register />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SigninAndRegister;

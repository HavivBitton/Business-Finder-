import Register from "@/components/Register";
import Signin from "@/components/Signin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SigninAndRegister = () => {
  return (
    <div className="flex justify-center h-4/5">
      <Tabs defaultValue="account" className="w-[400px]">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="Login">Login</TabsTrigger>
            <TabsTrigger value="Register">Register</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="Login">
          <Signin />
        </TabsContent>
        <TabsContent value="Register">
          <Register />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SigninAndRegister;

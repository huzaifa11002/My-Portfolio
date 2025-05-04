import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold text-main text-center">Admin Login</h1>
      <div className="container mx-auto py-10 flex justify-center px-5 xl:px-10">
        <form
          action=""
          className="w-full flex flex-col gap-5 rounded-md border-main border box-border p-5 sm:w-3/4 lg:w-1/2 xl:w-[40%]"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Your Username"
              className="w-full h-10 p-2 rounded-sm outline-main focus:outline"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-10 p-2 rounded-sm outline-main focus:outline"
            />
          </div>
          <div className="text-left">
            <Button className="w-fit px-5 py-3 border border-main text-xs sm:text-sm bg-transparent shadow-sm shadow-main">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import { Typography, Button, Input } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData } from "@/data";
import { userSignInAPI } from "@/services/apiMethods";
import { useLoaderData } from "react-router-dom";

// export const userLogin = async () => {
//   await userSignInAPI({
//     email: "fovomi9697@klanze.com",
//     password: "red12345!",
//   });
// };

export function Home() {
  // const data = useLoaderData();
  // console.log(data);
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/background-2.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-black"
              >
                Manage Your Tasks
              </Typography>
              <form className="mx-auto mt-12 max-w-3xl text-center">
                <div className="mb-8 flex gap-8">
                  <Input
                    color="green"
                    variant="standard"
                    size="lg"
                    label="Task Name"
                  />
                </div>
                <Button
                  color="green"
                  variant="gradient"
                  size="lg"
                  className="mt-8"
                >
                  Add Task
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;

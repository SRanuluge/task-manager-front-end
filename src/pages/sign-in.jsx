import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import { userSignIn } from "@/redux/users/userThunk";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Toast } from "@/widgets/Toast";
import { useEffect } from "react";

export function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    dispatch(
      userSignIn({
        email,
        password,
      })
    ).then((res) => {
      // const statusCode =res?.
      // if (res.payload?.user) {
      //   navigate("/");
      // } else {
      //   Toast(res.payload, "error");
      // }
      // const statusCode = res?.payload?.status;
      // const message = res?.payload?.data.message;
      // if (statusCode === 401) {
      //   dispatch(clearCredential());
      //   return Toast(message, "error");
      // } else {
      //   statusCode && Toast(message, "error");
      // }
    });
  };
  useEffect(() => {
    if (user?.user) {
      navigate("/");
    }
  }, [user?.user]);

  return (
    <>
      <img
        src="background.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute left-2/4 top-2/4 w-full max-w-[24rem] -translate-x-2/4 -translate-y-2/4">
          <CardHeader
            variant="gradient"
            color="green"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
              type="email"
              name="email"
              label="Email"
              size="lg"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              variant="standard"
              type="password"
              label="Password"
              name="password"
              size="lg"
            />
            <div className="-ml-2.5">
              <Checkbox name="remember-me" label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={handleSignIn}
              type="submit"
              variant="gradient"
              color="green"
              fullWidth
            >
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="green"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignIn;

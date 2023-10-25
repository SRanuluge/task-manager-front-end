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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userSignUp } from "@/redux/users/userThunk";
import CustomSpinner from "@/widgets/Spinner";

export function SignUp() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    dispatch(
      userSignUp({
        name,
        email,
        password,
      })
    );
  };

  useEffect(() => {
    if (user?.user) {
      navigate("/");
    }
  }, [user?.user]);
  return (
    <>
      {user?.userLoading ? <CustomSpinner /> : null}
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
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              variant="standard"
              name="name"
              onChange={(e) => setUserName(e.target.value)}
              label="Name"
              size="lg"
            />
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
              name="password"
              variant="standard"
              type="password"
              label="Password"
              size="lg"
            />
            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={handleSignUp}
              color="green"
              fullWidth
            >
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="green"
                  className="ml-1 font-bold"
                >
                  Sign in
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

export default SignUp;

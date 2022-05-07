import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      setemail(value);
    } else {
      setpassword(value);
    }
  }

  function HandleSubmit(e) {
    const senddata = {
      username: email,
      password: password,
    };
    if (!senddata.username || !senddata.password) {
      alert("All Fields are Mandatory");
    } else {
      // e.preventDefault();
      // async function doLogin() {
      //   const request = await axios.post(requests["doLogin"], senddata);
      //   return request;
      // }
      // doLogin()
      //   .then((res) => {
      //     const data = res.data;
      //     console.log(data);
      //     const { token: token, profile: userinfo } = res.data;
      //     setemail("");
      //     setpassword("");
      //     window.location.href = "/";
      //     dispatch(signInSuccess({ token, userinfo }));
      //   })
      //   .catch((e) => {
      //     alert("Something Went Wrong");
      //     window.location.href = "/login";
      //   });
    }
  }
  function responseGoogleSuccess(resp) {
    // console.log(resp.mc.access_token);
    console.log(resp);
    // async function doOAuthLogin() {
    //   const request = await axios.post(requests["doOAuthLogin"], resp);
    //   return request;
    // }
    // doOAuthLogin()
    //   .then((res) => {
    //     const data = res.data;
    //     const { token: token, profile: userinfo } = res.data;

    //     window.location.href = "/";
    //     //dispatch(signInSuccess({ token, userinfo }));
    //   })
    //   .catch((e) => {
    //     alert("Something Went Wrong");
    //     window.location.href = "/login";
    //   });
  }
  return (
    <div className="w-1/3 h-full mt-24 mx-auto p-8 rounded-md flex gap-8 flex-col shadow-lg ">
      <Heading
        as="h2"
        size="xl"
        className="text-center font-bold text-cyan-700"
      >
        Say those secret words!
      </Heading>

      <form className="mt-auto flex flex-col gap-8 ">
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Password</FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <FormHelperText>Choose a strong one.</FormHelperText>
        </FormControl>

        <Button colorScheme="cyan" size="md" onClick={HandleSubmit}>
          Login
        </Button>
        <hr className="font-bold w-full border-t-1 border-gray-300" />
        <div className="submit-google-center mx-auto">
          <GoogleLogin
            clientId={window.env.CLIENTID}
            buttonText="Sign in with Google"
            accessType="offline"
            scope="profile"
            onSuccess={responseGoogleSuccess}
            onFailure={(e) => {
              console.log(e);
            }}
          />
        </div>
        {/* <Button colorScheme="cyan" variant="outline">
          Login with Google
        </Button> */}
      </form>
    </div>
  );
};

export default Login;
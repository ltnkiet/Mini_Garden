import { UserCircleIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import AuthService from "@/services/auth.service";
import { Formik } from "formik";
import * as Yup from "yup";
import token from '@/utils/token'
import { useDispatch } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch()
  const login = async (values) => {
    try {
      const loginRes = await AuthService.login(values);
      const accessToken = loginRes.accessToken;
      token.token = accessToken;
      console.log(loginRes)
      // const authRes = await AuthService.auth();
      // dispatch(setValue(authRes));
    } catch (error) {
      // toast.error(error);
    }
  };
  return (
    <form className="flex flex-col w-[25rem] gap-2 p-3  rounded-[2rem] bg-white max-sm:shadow-none -ml-14 shadow-customeOne max-md:-ml-40 max-sm:m-0 max-sm:top-0 max-sm:rounded-none max-sm:w-full">
      <div className="flex text-neutral-800 items-center justify-between p-3 text-lg font-bold bg-gradient-to-tr from-green-500 to-green-300  rounded-t-3xl max-sm:rounded-md">
        <h2 className="">Login</h2>
        <UserCircleIcon className="w-8" />
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Địa chỉ email không hợp lệ")
            .required("Vui lòng nhập email"),
          password: Yup.string().required("Vui lòng nhập mật khẩu"),
        })}
        onSubmit={login}>
        {({ values, errors, handleChange, handleSubmit }) => (
          <form action="">
            <div className="flex flex-col relative gap-2 my-3">
              <input
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="peer shadow-customeTwo p-1 px-2 py-2 rounded-lg outline-none"
                type="text"
              />
              <label
                htmlFor="Email"
                className="transition-all absolute top-2 left-1 text-neutral-900 bg-white px-2 peer-focus:-top-3 peer-focus:left-4">
                {" "}
                Email
              </label>
            </div>
            <div className="flex flex-col relative gap-2">
              <input
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className="peer shadow-customeTwo p-1 px-2 py-2 rounded-lg outline-none"
                type="password"
              />
              <label
                htmlFor="Password"
                className="transition-all absolute top-2 left-1 text-neutral-900 bg-white px-2 peer-focus:-top-3 peer-focus:left-4">
                {" "}
                Password
              </label>
            </div>
            <button className="bg-green-500 text-white font-bold p-2 rounded-md mt-2 hover:bg-green-600"
              type="sumbib"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <span className="w-full h-[2px] bg-zinc-200 my-2"></span>
      <NavLink to="/signup" className="px-1 my-2" href="#">
        Dont have an account ?
      </NavLink>
    </form>
  );
}

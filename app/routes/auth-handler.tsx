import { 
  LoaderFunction,
  redirect
  } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {
  auth
} from '~/utils/auth';
import {
  setTheCookies
} from '~/utils/createCookies';

export const loader: LoaderFunction = async({request}) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const {access_token, refresh_token} = await auth(code as string);
  

  const headers = await setTheCookies({
    access_token,
    refresh_token
  })

  return redirect("/", {
    headers
  });
}

const Login = () => {
  const pageData = useLoaderData();
  return (
    <div>
      TOKENS: {JSON.stringify(pageData)}
    </div>
  )
}

export default Login;
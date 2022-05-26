import { 
  LoaderFunction,
  json
  } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {auth} from '~/utils/auth';

export const loader: LoaderFunction = async({request}) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const fetchAuthTokens = await auth(code as string);
  return json(fetchAuthTokens);
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
import {
  LoaderFunction,
  json
} from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import {
  CLIENT_ID,
  REDIRECT_URI
} from '~/utils/constants';

export const loader:LoaderFunction = () => {
  console.log(process.env.CLIENT_ID)
  return json(
    {
      ENV: {
        client_id: process.env.ClIENT_ID
      }
    }
  )
}

export default function Index() {
  const data = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>DexShare</h1> {JSON.stringify(data)}
    </div>
  );
}

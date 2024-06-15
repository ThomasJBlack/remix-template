import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Template" },
    { name: "description", content: "Welcome to this Remix fork!" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  return json({ url: url, status: 200, message: "Loaders worky! " });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Remix Template</h1>
      {data.message}
    </div>
  );
}

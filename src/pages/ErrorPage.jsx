import { useRouteError } from "react-router-dom";
import { ButtonLink } from "../components/ui/ButtonLink";
import { Layout } from "../components/Layout";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Layout>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="w-1/2">
        <ButtonLink href={`/`} text="Back to homepage" />
      </div>
    </Layout>
  );
}

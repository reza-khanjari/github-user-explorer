import Card from "./Card";
import Heading from "./Heading";

function PageLoader() {
  return (
    <Card className="m-auto flex min-h-100 w-full max-w-200 items-center justify-center p-16">
      <Heading className="text-center" as="h1">
        Page is Loading...
      </Heading>
    </Card>
  );
}

export default PageLoader;

import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import Heading from "./Heading";

function ErrorStateCard({
  error,
  retry,
}: {
  error: string;
  retry: () => void;
}) {
  const navigate = useNavigate();
  return (
    <Card className="my-10 max-w-175 py-16">
      <Heading
        as="h2"
        className="my-3 text-center tracking-wide text-white/90 uppercase"
      >
        {error}
      </Heading>
      <div className="mx-auto my-8 flex w-full max-w-80 gap-x-6">
        <Button
          onClick={() => navigate(-1)}
          className="mx-auto max-w-36 py-1"
          type="button"
        >
          Back
        </Button>
        <Button onClick={retry} className="mx-auto max-w-36 py-1" type="button">
          Retry
        </Button>
      </div>
    </Card>
  );
}

export default ErrorStateCard;

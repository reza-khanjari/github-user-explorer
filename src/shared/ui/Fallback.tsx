import { useNavigate } from "react-router-dom";
import Button from "@ui/Button";
import Card from "@ui/Card";
import Heading from "@ui/Heading";
import type { FallbackProps } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate();

  return (
    <Card className="my-10 mx-auto max-w-175 py-16">
      <Heading
        as="h2"
        className="my-3 text-center tracking-wide text-white/90 uppercase"
      >
        Somthing went wrong
      </Heading>
      <p className="text-center" >{error.message}</p>
      <div className="mx-auto my-8 flex w-full max-w-80 gap-x-6">
        <Button
          onClick={() => navigate(-1)}
          className="mx-auto max-w-36 py-1"
          type="button"
        >
          Back
        </Button>
        <Button
          onClick={resetErrorBoundary}
          className="mx-auto max-w-36 py-1"
          type="button"
        >
          Retry
        </Button>
      </div>
    </Card>
  );
}

export default Fallback;

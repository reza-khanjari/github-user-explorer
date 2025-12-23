import Card from "@ui/Card";
import Heading from "@ui/Heading";
import SearchForm from "./SearchForm";

function SearchCard() {
  return (
    <Card className="xs:px-6 mx-auto flex min-h-100 w-full max-w-200 flex-col items-center justify-center px-4">
      <Heading as="h1" className="my-4 text-center text-white capitalize">
        Search github users
      </Heading>
      <p className="text-center font-medium text-white/75">
        Find and explore profiles on github
      </p>
      <SearchForm />
    </Card>
  );
}

export default SearchCard;

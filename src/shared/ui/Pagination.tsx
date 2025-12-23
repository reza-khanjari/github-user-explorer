import Button from "./Button";

interface PaginationProp {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}

function Pagination({ page, totalPages, onPageChange }: PaginationProp) {
  if (totalPages <= 1) {
    return;
  }

  const goToPrev = () => page > 1 && onPageChange(page - 1);

  const goToNext = () => page < totalPages && onPageChange(page + 1);

  return (
    <div className="mx-auto flex w-full items-baseline space-x-4 md:max-w-max">
      <Button className="max-w-28 px-6 py-1" onClick={goToPrev} type="button">
        Prev
      </Button>
      <div className="background-glass min-h-2 min-w-28 rounded-full px-4 py-1 text-center md:min-w-32">
        <span>
          {page} from {totalPages}
        </span>
      </div>

      <Button className="max-w-28 px-6 py-1" onClick={goToNext} type="button">
        Next
      </Button>
    </div>
  );
}

export default Pagination;

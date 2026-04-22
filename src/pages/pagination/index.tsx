import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@neut/ui";

export default () => {
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" page={1} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive page={2} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" page={3} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" page={4} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" page={5} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" page={1} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive page={2} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" page={3} />
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

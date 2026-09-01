import { ComponentPage, Example } from "../../components/component-page";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@neut/ui";

const basicCode = `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@neut/ui";

export default () => (
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
);`;

const prevNextCode = `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@neut/ui";

export default () => (
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
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);`;

const ellipsisCode = `import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@neut/ui";

export default () => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" page={1} />
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive page={4} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" page={5} />
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" page={10} />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);`;

export default () => {
  return (
    <ComponentPage
      title="Pagination"
      description="Navigates between pages of content with numbered links, previous/next controls and ellipses."
    >
      <Example
        name="Basic"
        description="Numbered page links with a single active page."
        code={basicCode}
      >
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
      </Example>

      <Example
        name="With previous/next"
        description="Add PaginationPrevious and PaginationNext to navigate sequentially."
        code={prevNextCode}
      >
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
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Example>

      <Example
        name="With ellipsis"
        description="Collapse large ranges with PaginationEllipsis."
        code={ellipsisCode}
      >
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" page={1} />
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive page={4} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" page={5} />
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" page={10} />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Example>
    </ComponentPage>
  );
};

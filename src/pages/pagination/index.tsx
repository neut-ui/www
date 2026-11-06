import { ComponentPage, Example } from "../../components/component-page";
import {
  Field,
  FieldLabel,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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

const iconsOnlyCode = `import {
  Field,
  FieldLabel,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-sm items-center justify-between gap-4">
    <Field orientation="horizontal" class="w-fit!">
      <FieldLabel for="rows-per-page">Rows per page</FieldLabel>
      <Select defaultValue="25">
        <SelectTrigger id="rows-per-page" class="w-20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="25">25</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">100</SelectItem>
        </SelectContent>
      </Select>
    </Field>
    <Pagination class="mx-0! w-auto!">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" text="" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" text="" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </div>
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

      <Example
        name="Icons only"
        description="Use icon-only previous and next buttons alongside a rows-per-page selector."
        code={iconsOnlyCode}
      >
        <div class="flex w-full max-w-sm items-center justify-between gap-4">
          <Field orientation="horizontal" class="w-fit!">
            <FieldLabel for="rows-per-page">Rows per page</FieldLabel>
            <Select defaultValue="25">
              <SelectTrigger id="rows-per-page" class="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Pagination class="mx-0! w-auto!">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" text="" />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" text="" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Example>
    </ComponentPage>
  );
};

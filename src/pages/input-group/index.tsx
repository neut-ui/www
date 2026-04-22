import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  Kbd,
  Spinner,
} from "@neut/ui";
import {
  Check,
  Copy,
  CornerDownLeft,
  CreditCard,
  Info,
  Loader,
  Mail,
  RefreshCcw,
  Search,
  Star,
} from "lucide-solid";

export default () => {
  return (
    <>
      <div class="grid w-full max-w-sm gap-6">
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput type="email" placeholder="Enter your email" />
          <InputGroupAddon>
            <Mail />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon>
            <CreditCard />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Check />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon align="inline-end">
            <Star />
            <Info />
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div class="grid w-full max-w-sm gap-6">
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" class="pl-0.5!" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Enter your username" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@company.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupTextarea placeholder="Enter your message" />
          <InputGroupAddon align="block-end">
            <InputGroupText class="text-xs text-muted-foreground">
              120 characters left
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <InputGroup class="max-w-sm">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>

      <div class="grid w-full max-w-sm gap-4">
        <InputGroup>
          <InputGroupInput placeholder="Searching..." />
          <InputGroupAddon align="inline-end">
            <Spinner />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Processing..." />
          <InputGroupAddon>
            <Spinner />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Saving changes..." />
          <InputGroupAddon align="inline-end">
            <InputGroupText>Saving...</InputGroupText>
            <Spinner />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Refreshing data..." />
          <InputGroupAddon>
            <Loader class="animate-spin" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupText class="text-muted-foreground">
              Please wait...
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div class="grid w-full max-w-md gap-4">
        <InputGroup>
          <InputGroupTextarea
            id="textarea-code-32"
            placeholder="console.log('Hello, world!');"
            class="min-h-50"
          />
          <InputGroupAddon align="block-end" class="border-t">
            <InputGroupText>Line 1, Column 1</InputGroupText>
            <InputGroupButton size="sm" class="ml-auto" variant="primary">
              Run <CornerDownLeft />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupAddon align="block-start" class="border-b">
            <InputGroupText class="font-mono font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-brand-javascript "
              >
                <title>JavaScript</title>
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                <path d="M7.5 8h3v8l-2 -1"></path>
                <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path>
              </svg>
              script.js
            </InputGroupText>
            <InputGroupButton class="ml-auto" size="xs" icon={<RefreshCcw />} />
            <InputGroupButton variant="ghost" size="xs" icon={<Copy />} />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </>
  );
};

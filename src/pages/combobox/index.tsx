import { ComponentPage, Example } from "../../components/component-page";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@neut/ui";
import { For, Show } from "solid-js";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

const timezones = [
  {
    value: "Americas",
    items: [
      "(GMT-5) New York",
      "(GMT-8) Los Angeles",
      "(GMT-6) Chicago",
      "(GMT-5) Toronto",
      "(GMT-8) Vancouver",
    ],
  },
  {
    value: "Europe",
    items: [
      "(GMT+0) London",
      "(GMT+1) Paris",
      "(GMT+1) Berlin",
      "(GMT+1) Rome",
      "(GMT+1) Madrid",
    ],
  },
  {
    value: "Asia/Pacific",
    items: [
      "(GMT+9) Tokyo",
      "(GMT+8) Shanghai",
      "(GMT+8) Singapore",
      "(GMT+4) Dubai",
      "(GMT+11) Sydney",
    ],
  },
];

const countries = [
  { code: "ar", value: "argentina", label: "Argentina", continent: "South America" },
  { code: "au", value: "australia", label: "Australia", continent: "Oceania" },
  { code: "br", value: "brazil", label: "Brazil", continent: "South America" },
  { code: "ca", value: "canada", label: "Canada", continent: "North America" },
  { code: "cn", value: "china", label: "China", continent: "Asia" },
  { code: "fr", value: "france", label: "France", continent: "Europe" },
  { code: "jp", value: "japan", label: "Japan", continent: "Asia" },
  { code: "us", value: "united-states", label: "United States", continent: "North America" },
];

const basicCode = `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@neut/ui";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export default () => (
  <Combobox items={frameworks}>
    <ComboboxInput placeholder="Select a framework" />
    <ComboboxContent>
      <ComboboxEmpty>No items found.</ComboboxEmpty>
      <ComboboxList>
        {(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
);`;

const clearCode = `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@neut/ui";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export default () => (
  <Combobox items={frameworks} defaultValue={frameworks[0]}>
    <div class="relative w-64">
      <ComboboxInput placeholder="Select a framework" showClear />
    </div>
    <ComboboxContent>
      <ComboboxEmpty>No items found.</ComboboxEmpty>
      <ComboboxList>
        {(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
);`;

const multipleCode = `import { For } from "solid-js";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@neut/ui";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export default () => (
  <Combobox multiple items={frameworks} defaultValue={[frameworks[0]]}>
    <ComboboxChips class="w-full max-w-xs">
      <ComboboxValue>
        {(values) => (
          <>
            <For each={values}>
              {(value) => <ComboboxChip value={value}>{value}</ComboboxChip>}
            </For>
            <ComboboxChipsInput placeholder="Add framework" />
          </>
        )}
      </ComboboxValue>
    </ComboboxChips>
    <ComboboxContent>
      <ComboboxEmpty>No items found.</ComboboxEmpty>
      <ComboboxList>
        {(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
);`;

const groupsCode = `import { Show } from "solid-js";
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@neut/ui";

const timezones = [
  {
    value: "Americas",
    items: ["(GMT-5) New York", "(GMT-8) Los Angeles", "(GMT-6) Chicago"],
  },
  {
    value: "Europe",
    items: ["(GMT+0) London", "(GMT+1) Paris", "(GMT+1) Berlin"],
  },
  {
    value: "Asia/Pacific",
    items: ["(GMT+9) Tokyo", "(GMT+8) Shanghai", "(GMT+4) Dubai"],
  },
];

export default () => (
  <Combobox items={timezones}>
    <ComboboxInput placeholder="Select a timezone" />
    <ComboboxContent>
      <ComboboxEmpty>No timezones found.</ComboboxEmpty>
      <ComboboxList>
        {(group, index) => (
          <ComboboxGroup>
            <ComboboxLabel>{group.value}</ComboboxLabel>
            <ComboboxCollection items={group.items}>
              {(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}
            </ComboboxCollection>
            <Show when={index < timezones.length - 1}>
              <ComboboxSeparator />
            </Show>
          </ComboboxGroup>
        )}
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
);`;

const popupCode = `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@neut/ui";

const countries = [
  { code: "ar", value: "argentina", label: "Argentina", continent: "South America" },
  { code: "au", value: "australia", label: "Australia", continent: "Oceania" },
  { code: "br", value: "brazil", label: "Brazil", continent: "South America" },
  { code: "jp", value: "japan", label: "Japan", continent: "Asia" },
  { code: "us", value: "united-states", label: "United States", continent: "North America" },
];

export default () => (
  <Combobox
    items={countries}
    defaultValue={countries[0]}
    itemToStringValue={(country) => country.label}
  >
    <ComboboxTrigger class="w-64 justify-between font-normal">
      <ComboboxValue />
    </ComboboxTrigger>
    <ComboboxContent>
      <ComboboxInput placeholder="Search countries..." />
      <ComboboxEmpty>No items found.</ComboboxEmpty>
      <ComboboxList>
        {(item) => <ComboboxItem value={item}>{item.label}</ComboboxItem>}
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
);`;

const customItemsCode = `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@neut/ui";

const countries = [
  { code: "ar", value: "argentina", label: "Argentina", continent: "South America" },
  { code: "au", value: "australia", label: "Australia", continent: "Oceania" },
  { code: "jp", value: "japan", label: "Japan", continent: "Asia" },
  { code: "us", value: "united-states", label: "United States", continent: "North America" },
];

export default () => (
  <Combobox items={countries} itemToStringValue={(country) => country.label}>
    <ComboboxInput placeholder="Search countries..." />
    <ComboboxContent>
      <ComboboxEmpty>No countries found.</ComboboxEmpty>
      <ComboboxList>
        {(country) => (
          <ComboboxItem value={country}>
            <Item size="xs" class="p-0">
              <ItemContent>
                <ItemTitle class="whitespace-nowrap">{country.label}</ItemTitle>
                <ItemDescription>
                  {country.continent} ({country.code})
                </ItemDescription>
              </ItemContent>
            </Item>
          </ComboboxItem>
        )}
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
);`;

const disabledCode = `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@neut/ui";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export default () => (
  <Combobox items={frameworks}>
    <ComboboxInput placeholder="Select a framework" disabled />
    <ComboboxContent>
      <ComboboxEmpty>No items found.</ComboboxEmpty>
      <ComboboxList>
        {(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
);`;

export default () => {
  return (
    <ComponentPage
      title="Combobox"
      description="An input with a dropdown list of selectable options that filters as you type."
    >
      <Example
        name="Basic"
        description="A simple combobox with a filterable list of items."
        code={basicCode}
      >
        <Combobox items={frameworks}>
          <ComboboxInput placeholder="Select a framework" />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Example>

      <Example
        name="Clear button"
        description="Use showClear to display a clear button in the input."
        code={clearCode}
      >
        <Combobox items={frameworks} defaultValue={frameworks[0]}>
          <div class="relative w-64">
            <ComboboxInput placeholder="Select a framework" showClear />
          </div>
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Example>

      <Example
        name="Multiple"
        description="Multiple selection rendered as removable chips."
        code={multipleCode}
      >
        <Combobox multiple items={frameworks} defaultValue={[frameworks[0]]}>
          <ComboboxChips class="w-full max-w-xs">
            <ComboboxValue>
              {(values) => (
                <>
                  <For each={values}>
                    {(value) => (
                      <ComboboxChip value={value}>{value}</ComboboxChip>
                    )}
                  </For>
                  <ComboboxChipsInput placeholder="Add framework" />
                </>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Example>

      <Example
        name="Groups"
        description="Group items with labels and separators."
        code={groupsCode}
      >
        <Combobox items={timezones}>
          <ComboboxInput placeholder="Select a timezone" />
          <ComboboxContent>
            <ComboboxEmpty>No timezones found.</ComboboxEmpty>
            <ComboboxList>
              {(group, index) => (
                <ComboboxGroup>
                  <ComboboxLabel>{group.value}</ComboboxLabel>
                  <ComboboxCollection items={group.items}>
                    {(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}
                  </ComboboxCollection>
                  <Show when={index < timezones.length - 1}>
                    <ComboboxSeparator />
                  </Show>
                </ComboboxGroup>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Example>

      <Example
        name="Popup trigger"
        description="Trigger the combobox from a button and show the selected value."
        code={popupCode}
      >
        <Combobox
          items={countries}
          defaultValue={countries[0]}
          itemToStringValue={(country) => country.label}
        >
          <ComboboxTrigger class="w-64 justify-between font-normal">
            <ComboboxValue />
          </ComboboxTrigger>
          <ComboboxContent>
            <ComboboxInput placeholder="Search countries..." />
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => <ComboboxItem value={item}>{item.label}</ComboboxItem>}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Example>

      <Example
        name="Custom items"
        description="Render custom content inside each option with the Item component."
        code={customItemsCode}
      >
        <Combobox items={countries} itemToStringValue={(country) => country.label}>
          <ComboboxInput placeholder="Search countries..." />
          <ComboboxContent>
            <ComboboxEmpty>No countries found.</ComboboxEmpty>
            <ComboboxList>
              {(country) => (
                <ComboboxItem value={country}>
                  <Item size="xs" class="p-0">
                    <ItemContent>
                      <ItemTitle class="whitespace-nowrap">
                        {country.label}
                      </ItemTitle>
                      <ItemDescription>
                        {country.continent} ({country.code})
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Example>

      <Example
        name="Disabled"
        description="Disable the combobox input."
        code={disabledCode}
      >
        <Combobox items={frameworks}>
          <ComboboxInput placeholder="Select a framework" disabled />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => <ComboboxItem value={item}>{item}</ComboboxItem>}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Example>
    </ComponentPage>
  );
};

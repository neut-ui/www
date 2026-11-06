import { ComponentPage, Example } from "../../components/component-page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@neut/ui";
import { For } from "solid-js";

const borderItems = [
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime.",
  },
  {
    value: "security",
    trigger: "Is my data secure?",
    content:
      "Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits.",
  },
  {
    value: "integration",
    trigger: "What integrations do you support?",
    content:
      "We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more.",
  },
];

const cardItems = [
  {
    value: "plans",
    trigger: "What subscription plans do you offer?",
    content:
      "We offer three subscription tiers: Starter, Professional, and Enterprise. Each plan includes increasing storage limits and priority support.",
  },
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "Billing occurs automatically at the start of each billing cycle. We accept all major credit cards, PayPal, and ACH transfers.",
  },
  {
    value: "cancel",
    trigger: "How do I cancel my subscription?",
    content:
      "You can cancel your subscription anytime from your account settings. Your access continues until the end of the current billing period.",
  },
];

const multipleCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@neut/ui";

export default () => (
  <Accordion
    multiple
    defaultValue={["shipping", "returns"]}
    class="w-full max-w-sm"
  >
    <AccordionItem value="shipping">
      <AccordionTrigger>What are your shipping options?</AccordionTrigger>
      <AccordionContent>
        We offer standard, express, and overnight shipping. Free shipping on
        orders over $50.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="returns">
      <AccordionTrigger>What is your return policy?</AccordionTrigger>
      <AccordionContent>
        Returns are accepted within 30 days. Items must be unused and in their
        original packaging.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="support">
      <AccordionTrigger>How do I contact support?</AccordionTrigger>
      <AccordionContent>
        Reach us via email or live chat. We respond within 24 hours on business
        days.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);`;

const singleCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@neut/ui";

export default () => (
  <Accordion defaultValue={["shipping"]} class="w-full max-w-sm">
    <AccordionItem value="shipping">
      <AccordionTrigger>What are your shipping options?</AccordionTrigger>
      <AccordionContent>
        We offer standard, express, and overnight shipping. Free shipping on
        orders over $50.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="returns">
      <AccordionTrigger>What is your return policy?</AccordionTrigger>
      <AccordionContent>
        Returns are accepted within 30 days of delivery.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="support">
      <AccordionTrigger>How do I contact support?</AccordionTrigger>
      <AccordionContent>
        Reach us via email or live chat, any time.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);`;

const disabledCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@neut/ui";

export default () => (
  <Accordion defaultValue={["billing"]} class="w-full max-w-sm">
    <AccordionItem value="billing">
      <AccordionTrigger>How does billing work?</AccordionTrigger>
      <AccordionContent>
        You are billed monthly. Cancel anytime from your account settings.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="beta" disabled>
      <AccordionTrigger>Beta features (coming soon)</AccordionTrigger>
      <AccordionContent>
        This section is disabled and cannot be expanded.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);`;

const bordersCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@neut/ui";
import { For } from "solid-js";

const items = [
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime.",
  },
  {
    value: "security",
    trigger: "Is my data secure?",
    content:
      "Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits.",
  },
  {
    value: "integration",
    trigger: "What integrations do you support?",
    content:
      "We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more.",
  },
];

export default () => (
  <Accordion
    class="w-full max-w-lg rounded-lg border"
    defaultValue={["billing"]}
  >
    <For each={items}>
      {(item) => (
        <AccordionItem value={item.value} class="border-b px-4 last:border-b-0">
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      )}
    </For>
  </Accordion>
);`;

const cardCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@neut/ui";
import { For } from "solid-js";

const items = [
  {
    value: "plans",
    trigger: "What subscription plans do you offer?",
    content:
      "We offer three subscription tiers: Starter, Professional, and Enterprise. Each plan includes increasing storage limits and priority support.",
  },
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "Billing occurs automatically at the start of each billing cycle. We accept all major credit cards, PayPal, and ACH transfers.",
  },
  {
    value: "cancel",
    trigger: "How do I cancel my subscription?",
    content:
      "You can cancel your subscription anytime from your account settings. Your access continues until the end of the current billing period.",
  },
];

export default () => (
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Subscription & Billing</CardTitle>
      <CardDescription>
        Common questions about your account, plans, payments and cancellations.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Accordion defaultValue={["plans"]}>
        <For each={items}>
          {(item) => (
            <AccordionItem value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          )}
        </For>
      </Accordion>
    </CardContent>
  </Card>
);`;

export default () => {
  return (
    <ComponentPage
      title="Accordion"
      description="A vertically stacked set of interactive headings that reveal or hide their associated content."
    >
      <Example
        name="Multiple"
        description="Pass multiple to allow several items to be open at once."
        code={multipleCode}
      >
        <Accordion
          multiple
          defaultValue={["shipping", "returns"]}
          class="w-full max-w-sm"
        >
          <AccordionItem value="shipping">
            <AccordionTrigger>What are your shipping options?</AccordionTrigger>
            <AccordionContent>
              We offer standard, express, and overnight shipping. Free shipping
              on orders over $50.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="returns">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              Returns are accepted within 30 days. Items must be unused and in
              their original packaging.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="support">
            <AccordionTrigger>How do I contact support?</AccordionTrigger>
            <AccordionContent>
              Reach us via email or live chat. We respond within 24 hours on
              business days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Example>

      <Example
        name="Single"
        description="Without multiple, only one item can be open at a time."
        code={singleCode}
      >
        <Accordion defaultValue={["shipping"]} class="w-full max-w-sm">
          <AccordionItem value="shipping">
            <AccordionTrigger>What are your shipping options?</AccordionTrigger>
            <AccordionContent>
              We offer standard, express, and overnight shipping. Free shipping
              on orders over $50.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="returns">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              Returns are accepted within 30 days of delivery.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="support">
            <AccordionTrigger>How do I contact support?</AccordionTrigger>
            <AccordionContent>
              Reach us via email or live chat, any time.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Example>

      <Example
        name="Disabled item"
        description="Set disabled on an AccordionItem to prevent it from expanding."
        code={disabledCode}
      >
        <Accordion defaultValue={["billing"]} class="w-full max-w-sm">
          <AccordionItem value="billing">
            <AccordionTrigger>How does billing work?</AccordionTrigger>
            <AccordionContent>
              You are billed monthly. Cancel anytime from your account settings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="beta" disabled>
            <AccordionTrigger>Beta features (coming soon)</AccordionTrigger>
            <AccordionContent>
              This section is disabled and cannot be expanded.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Example>

      <Example
        name="Borders"
        description="Add borders between items to create a divided list."
        code={bordersCode}
      >
        <Accordion
          class="w-full max-w-lg rounded-lg border"
          defaultValue={["billing"]}
        >
          <For each={borderItems}>
            {(item) => (
              <AccordionItem
                value={item.value}
                class="border-b px-4 last:border-b-0"
              >
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            )}
          </For>
        </Accordion>
      </Example>

      <Example
        name="Card"
        description="Wrap the accordion in a Card with a header for grouped content."
        code={cardCode}
      >
        <Card class="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Subscription & Billing</CardTitle>
            <CardDescription>
              Common questions about your account, plans, payments and
              cancellations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion defaultValue={["plans"]}>
              <For each={cardItems}>
                {(item) => (
                  <AccordionItem value={item.value}>
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                )}
              </For>
            </Accordion>
          </CardContent>
        </Card>
      </Example>
    </ComponentPage>
  );
};

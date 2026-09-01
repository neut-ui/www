import { ComponentPage, Example } from "../../components/component-page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@neut/ui";

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
    </ComponentPage>
  );
};

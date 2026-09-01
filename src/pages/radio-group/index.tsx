import { ComponentPage, Example } from "../../components/component-page";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
  Label,
  RadioGroup,
  RadioGroupItem,
} from "@neut/ui";

const basicCode = `import { Label, RadioGroup, RadioGroupItem } from "@neut/ui";

export default () => (
  <RadioGroup defaultValue="comfortable" class="w-fit">
    <div class="flex items-center gap-3">
      <RadioGroupItem value="default" id="r1" />
      <Label for="r1">Default</Label>
    </div>
    <div class="flex items-center gap-3">
      <RadioGroupItem value="comfortable" id="r2" />
      <Label for="r2">Comfortable</Label>
    </div>
    <div class="flex items-center gap-3">
      <RadioGroupItem value="compact" id="r3" />
      <Label for="r3">Compact</Label>
    </div>
  </RadioGroup>
);`;

const descriptionCode = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  RadioGroup,
  RadioGroupItem,
} from "@neut/ui";

export default () => (
  <RadioGroup defaultValue="comfortable" class="w-fit">
    <Field orientation="horizontal">
      <RadioGroupItem value="default" id="desc-r1" />
      <FieldContent>
        <FieldLabel for="desc-r1">Default</FieldLabel>
        <FieldDescription>Standard spacing for most use cases.</FieldDescription>
      </FieldContent>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem value="comfortable" id="desc-r2" />
      <FieldContent>
        <FieldLabel for="desc-r2">Comfortable</FieldLabel>
        <FieldDescription>More space between elements.</FieldDescription>
      </FieldContent>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem value="compact" id="desc-r3" />
      <FieldContent>
        <FieldLabel for="desc-r3">Compact</FieldLabel>
        <FieldDescription>Minimal spacing for dense layouts.</FieldDescription>
      </FieldContent>
    </Field>
  </RadioGroup>
);`;

const choiceCardCode = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
  RadioGroup,
  RadioGroupItem,
} from "@neut/ui";

export default () => (
  <RadioGroup defaultValue="plus" class="max-w-sm">
    <FieldLabel for="plus-plan">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldTitle>Plus</FieldTitle>
          <FieldDescription>For individuals and small teams.</FieldDescription>
        </FieldContent>
        <RadioGroupItem value="plus" id="plus-plan" />
      </Field>
    </FieldLabel>
    <FieldLabel for="pro-plan">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldTitle>Pro</FieldTitle>
          <FieldDescription>For growing businesses.</FieldDescription>
        </FieldContent>
        <RadioGroupItem value="pro" id="pro-plan" />
      </Field>
    </FieldLabel>
    <FieldLabel for="enterprise-plan">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldTitle>Enterprise</FieldTitle>
          <FieldDescription>For large teams and enterprises.</FieldDescription>
        </FieldContent>
        <RadioGroupItem value="enterprise" id="enterprise-plan" />
      </Field>
    </FieldLabel>
  </RadioGroup>
);`;

const fieldsetCode = `import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  RadioGroup,
  RadioGroupItem,
} from "@neut/ui";

export default () => (
  <FieldSet class="w-full max-w-xs">
    <FieldLegend variant="label">Subscription Plan</FieldLegend>
    <FieldDescription>
      Yearly and lifetime plans offer significant savings.
    </FieldDescription>
    <RadioGroup defaultValue="monthly">
      <Field orientation="horizontal">
        <RadioGroupItem value="monthly" id="plan-monthly" />
        <FieldLabel for="plan-monthly" class="font-normal">
          Monthly ($9.99/month)
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="yearly" id="plan-yearly" />
        <FieldLabel for="plan-yearly" class="font-normal">
          Yearly ($99.99/year)
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="lifetime" id="plan-lifetime" />
        <FieldLabel for="plan-lifetime" class="font-normal">
          Lifetime ($299.99)
        </FieldLabel>
      </Field>
    </RadioGroup>
  </FieldSet>
);`;

const disabledCode = `import {
  Field,
  FieldLabel,
  RadioGroup,
  RadioGroupItem,
} from "@neut/ui";

export default () => (
  <RadioGroup defaultValue="option2" class="w-fit">
    <Field orientation="horizontal" data-disabled>
      <RadioGroupItem value="option1" id="disabled-1" disabled />
      <FieldLabel for="disabled-1" class="font-normal">Disabled</FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem value="option2" id="disabled-2" />
      <FieldLabel for="disabled-2" class="font-normal">Option 2</FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem value="option3" id="disabled-3" />
      <FieldLabel for="disabled-3" class="font-normal">Option 3</FieldLabel>
    </Field>
  </RadioGroup>
);`;

export default () => {
  return (
    <ComponentPage
      title="RadioGroup"
      description="A set of checkable buttons, known as radio buttons, where no more than one can be checked at a time."
    >
      <Example
        name="Basic"
        description="A simple radio group with three options."
        code={basicCode}
      >
        <RadioGroup defaultValue="comfortable" class="w-fit">
          <div class="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label for="r1">Default</Label>
          </div>
          <div class="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label for="r2">Comfortable</Label>
          </div>
          <div class="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label for="r3">Compact</Label>
          </div>
        </RadioGroup>
      </Example>

      <Example
        name="With description"
        description="Pair each item with a title and description using Field components."
        code={descriptionCode}
      >
        <RadioGroup defaultValue="comfortable" class="w-fit">
          <Field orientation="horizontal">
            <RadioGroupItem value="default" id="desc-r1" />
            <FieldContent>
              <FieldLabel for="desc-r1">Default</FieldLabel>
              <FieldDescription>
                Standard spacing for most use cases.
              </FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="comfortable" id="desc-r2" />
            <FieldContent>
              <FieldLabel for="desc-r2">Comfortable</FieldLabel>
              <FieldDescription>More space between elements.</FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="compact" id="desc-r3" />
            <FieldContent>
              <FieldLabel for="desc-r3">Compact</FieldLabel>
              <FieldDescription>Minimal spacing for dense layouts.</FieldDescription>
            </FieldContent>
          </Field>
        </RadioGroup>
      </Example>

      <Example
        name="Choice card"
        description="Wrap the whole Field in a FieldLabel for a clickable card-style selection."
        code={choiceCardCode}
      >
        <RadioGroup defaultValue="plus" class="max-w-sm">
          <FieldLabel for="plus-plan">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Plus</FieldTitle>
                <FieldDescription>
                  For individuals and small teams.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value="plus" id="plus-plan" />
            </Field>
          </FieldLabel>
          <FieldLabel for="pro-plan">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Pro</FieldTitle>
                <FieldDescription>For growing businesses.</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="pro" id="pro-plan" />
            </Field>
          </FieldLabel>
          <FieldLabel for="enterprise-plan">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Enterprise</FieldTitle>
                <FieldDescription>
                  For large teams and enterprises.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value="enterprise" id="enterprise-plan" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </Example>

      <Example
        name="Fieldset"
        description="Group radio items under a FieldSet with a legend and description."
        code={fieldsetCode}
      >
        <FieldSet class="w-full max-w-xs">
          <FieldLegend variant="label">Subscription Plan</FieldLegend>
          <FieldDescription>
            Yearly and lifetime plans offer significant savings.
          </FieldDescription>
          <RadioGroup defaultValue="monthly">
            <Field orientation="horizontal">
              <RadioGroupItem value="monthly" id="plan-monthly" />
              <FieldLabel for="plan-monthly" class="font-normal">
                Monthly ($9.99/month)
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="yearly" id="plan-yearly" />
              <FieldLabel for="plan-yearly" class="font-normal">
                Yearly ($99.99/year)
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="lifetime" id="plan-lifetime" />
              <FieldLabel for="plan-lifetime" class="font-normal">
                Lifetime ($299.99)
              </FieldLabel>
            </Field>
          </RadioGroup>
        </FieldSet>
      </Example>

      <Example
        name="Disabled"
        description="Disable the whole group or individual items."
        code={disabledCode}
      >
        <RadioGroup defaultValue="option2" class="w-fit">
          <Field orientation="horizontal" data-disabled>
            <RadioGroupItem value="option1" id="disabled-1" disabled />
            <FieldLabel for="disabled-1" class="font-normal">
              Disabled
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="option2" id="disabled-2" />
            <FieldLabel for="disabled-2" class="font-normal">
              Option 2
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="option3" id="disabled-3" />
            <FieldLabel for="disabled-3" class="font-normal">
              Option 3
            </FieldLabel>
          </Field>
        </RadioGroup>
      </Example>
    </ComponentPage>
  );
};

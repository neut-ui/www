import { ComponentPage, Example } from "../../components/component-page";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
  Button,
} from "@neut/ui";
import { CircleAlert, CircleCheck, TriangleAlert } from "lucide-solid";

const defaultCode = `import { Alert, AlertDescription, AlertTitle } from "@neut/ui";
import { CircleCheck } from "lucide-solid";

export default () => (
  <Alert class="w-full max-w-md">
    <CircleCheck />
    <AlertTitle>Account updated successfully</AlertTitle>
    <AlertDescription>
      Your profile information has been saved. Changes are reflected
      immediately.
    </AlertDescription>
  </Alert>
);`;

const destructiveCode = `import { Alert, AlertDescription, AlertTitle } from "@neut/ui";
import { CircleAlert } from "lucide-solid";

export default () => (
  <Alert variant="destructive" class="w-full max-w-md">
    <CircleAlert />
    <AlertTitle>Payment failed</AlertTitle>
    <AlertDescription>
      Your payment could not be processed. Please check your payment method and
      try again.
    </AlertDescription>
  </Alert>
);`;

const actionCode = `import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
  Button,
} from "@neut/ui";

export default () => (
  <Alert class="w-full max-w-md">
    <AlertTitle>Dark mode is now available</AlertTitle>
    <AlertDescription>
      Enable it under your profile settings to get started.
    </AlertDescription>
    <AlertAction>
      <Button size="xs" variant="primary">
        Enable
      </Button>
    </AlertAction>
  </Alert>
);`;

const customColorCode = `import { Alert, AlertDescription, AlertTitle } from "@neut/ui";
import { TriangleAlert } from "lucide-solid";

export default () => (
  <Alert class="w-full max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
    <TriangleAlert />
    <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
    <AlertDescription>
      Renew now to avoid service interruption or upgrade to a paid plan.
    </AlertDescription>
  </Alert>
);`;

const outlineCode = `import { Alert, AlertDescription, AlertTitle } from "@neut/ui";
import { CircleCheck } from "lucide-solid";

export default () => (
  <Alert variant="outline" class="w-full max-w-md">
    <CircleCheck />
    <AlertTitle>Outline alert</AlertTitle>
    <AlertDescription>
      An alert with the outline variant and a neutral card background.
    </AlertDescription>
  </Alert>
);`;

export default () => {
  return (
    <ComponentPage
      title="Alert"
      description="Displays a callout for attracting attention to important information."
    >
      <Example
        name="Default"
        description="A neutral alert with an icon and supporting text."
        code={defaultCode}
      >
        <Alert class="w-full max-w-md">
          <CircleCheck />
          <AlertTitle>Account updated successfully</AlertTitle>
          <AlertDescription>
            Your profile information has been saved. Changes are reflected
            immediately.
          </AlertDescription>
        </Alert>
      </Example>

      <Example
        name="Destructive"
        description="Use the destructive variant to communicate an error or critical issue."
        code={destructiveCode}
      >
        <Alert variant="destructive" class="w-full max-w-md">
          <CircleAlert />
          <AlertTitle>Payment failed</AlertTitle>
          <AlertDescription>
            Your payment could not be processed. Please check your payment
            method and try again.
          </AlertDescription>
        </Alert>
      </Example>

      <Example
        name="With action"
        description="AlertAction places a right-aligned action inside the alert."
        code={actionCode}
      >
        <Alert class="w-full max-w-md">
          <AlertTitle>Dark mode is now available</AlertTitle>
          <AlertDescription>
            Enable it under your profile settings to get started.
          </AlertDescription>
          <AlertAction>
            <Button size="xs" variant="primary">
              Enable
            </Button>
          </AlertAction>
        </Alert>
      </Example>

      <Example
        name="Custom color"
        description="Override the border, background, and text classes to match your own palette."
        code={customColorCode}
      >
        <Alert class="w-full max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
          <TriangleAlert />
          <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
          <AlertDescription>
            Renew now to avoid service interruption or upgrade to a paid plan.
          </AlertDescription>
        </Alert>
      </Example>

      <Example
        name="Outline"
        description="The outline variant renders with a card background and border."
        code={outlineCode}
      >
        <Alert variant="outline" class="w-full max-w-md">
          <CircleCheck />
          <AlertTitle>Outline alert</AlertTitle>
          <AlertDescription>
            An alert with the outline variant and a neutral card background.
          </AlertDescription>
        </Alert>
      </Example>
    </ComponentPage>
  );
};

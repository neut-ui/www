import { TriangleAlert, CircleAlert, CircleCheck } from "lucide-solid";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertAction,
  Button,
} from "@neut/ui";

const Base = () => {
  return (
    <Alert class="max-w-md">
      <CircleCheck />
      <AlertTitle>Account updated successfully</AlertTitle>
      <AlertDescription>
        Your profile information has been saved. Changes will be reflected
        immediately.
      </AlertDescription>
    </Alert>
  );
};

function Destructive() {
  return (
    <Alert variant="destructive" class="max-w-md">
      <CircleAlert />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        Your payment could not be processed. Please check your payment method
        and try again.
      </AlertDescription>
    </Alert>
  );
}

function AlertActionExample() {
  return (
    <Alert class="max-w-md">
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
  );
}

function AlertColors() {
  return (
    <Alert class="max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
      <TriangleAlert />
      <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
      <AlertDescription>
        Renew now to avoid service interruption or upgrade to a paid plan to
        continue using the service.
      </AlertDescription>
    </Alert>
  );
}

export default () => {
  return (
    <>
      <Base />
      <Destructive />
      <AlertActionExample />
      <AlertColors />
    </>
  );
};

import { ComponentPage, Example } from "../../components/component-page";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@neut/ui";
import { CircleFadingPlus, Trash2 } from "lucide-solid";

const basicCode = `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@neut/ui";

export default () => (
  <AlertDialog>
    <AlertDialogTrigger>
      <Button variant="outline">Show dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);`;

const mediaCode = `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@neut/ui";
import { CircleFadingPlus } from "lucide-solid";

export default () => (
  <AlertDialog>
    <AlertDialogTrigger>
      <Button variant="outline">Share project</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogMedia>
          <CircleFadingPlus />
        </AlertDialogMedia>
        <AlertDialogTitle>Share this project?</AlertDialogTitle>
        <AlertDialogDescription>
          Anyone with the link will be able to view and edit this project.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Share</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);`;

const destructiveCode = `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@neut/ui";
import { Trash2 } from "lucide-solid";

export default () => (
  <AlertDialog>
    <AlertDialogTrigger>
      <Button variant="destructive">Delete chat</Button>
    </AlertDialogTrigger>
    <AlertDialogContent size="sm">
      <AlertDialogHeader>
        <AlertDialogMedia class="bg-red-600/10 text-red-600 dark:bg-red-400/20 dark:text-red-400">
          <Trash2 />
        </AlertDialogMedia>
        <AlertDialogTitle>Delete chat?</AlertDialogTitle>
        <AlertDialogDescription>
          This will permanently delete this chat conversation.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
        <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);`;

export default () => {
  return (
    <ComponentPage
      title="Alert Dialog"
      description="A modal dialog that interrupts the user to communicate important information and require a response."
    >
      <Example
        name="Basic"
        description="A title, description, and footer with cancel and confirm actions."
        code={basicCode}
      >
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="outline">Show dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Example>

      <Example
        name="With media"
        description="AlertDialogMedia adds an icon or graphic above the title."
        code={mediaCode}
      >
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="outline">Share project</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogMedia>
                <CircleFadingPlus />
              </AlertDialogMedia>
              <AlertDialogTitle>Share this project?</AlertDialogTitle>
              <AlertDialogDescription>
                Anyone with the link will be able to view and edit this project.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Share</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Example>

      <Example
        name="Destructive"
        description="Combine a destructive action with red media styling to warn about permanent changes."
        code={destructiveCode}
      >
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="destructive">Delete chat</Button>
          </AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogMedia class="bg-red-600/10 text-red-600 dark:bg-red-400/20 dark:text-red-400">
                <Trash2 />
              </AlertDialogMedia>
              <AlertDialogTitle>Delete chat?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete this chat conversation.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Example>
    </ComponentPage>
  );
};

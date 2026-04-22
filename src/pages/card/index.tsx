import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@neut/ui";
import { ChevronRight } from "lucide-solid";

export default () => {
  return (
    <>
      <Card class="mx-auto w-full max-w-xs">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Card size="sm" class="mx-auto w-full max-w-xs">
        <CardHeader>
          <CardTitle>Scheduled reports</CardTitle>
          <CardDescription>
            Weekly snapshots. No more manual exports.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul class="grid gap-2 py-2 text-sm">
            <li class="flex gap-2">
              <ChevronRight class="mt-0.5 size-4 shrink-0 text-neutral-500 dark:text-neutral-400" />
              <span>Choose a schedule (daily, or weekly).</span>
            </li>
            <li class="flex gap-2">
              <ChevronRight class="mt-0.5 size-4 shrink-0 text-neutral-500 dark:text-neutral-400" />
              <span>Send to channels or specific teammates.</span>
            </li>
            <li class="flex gap-2">
              <ChevronRight class="mt-0.5 size-4 shrink-0 text-neutral-500 dark:text-neutral-400" />
              <span>Include charts, tables, and key metrics.</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter class="flex-col gap-2">
          <Button size="sm" class="w-full">
            Set up scheduled reports
          </Button>
          <Button variant="outline" size="sm" class="w-full">
            See what&apos;s new
          </Button>
        </CardFooter>
      </Card>

      <Card class="relative mx-auto w-full max-w-sm pt-0">
        <div class="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          class="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Design systems meetup</CardTitle>
          <CardDescription>
            A practical talk on component APIs, accessibility, and shipping
            faster.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button class="w-full">View Event</Button>
        </CardFooter>
      </Card>
    </>
  );
};

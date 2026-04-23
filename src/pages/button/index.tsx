import { Button, Spinner } from "@neut/ui";
import { ArrowUp, GitBranch, GitFork } from "lucide-solid";

export default () => {
  return (
    <div class="py-4 flex flex-col items-center justify-center gap-3 overflow-y-auto">
      <div class="flex items-center justify-center gap-3">
        <Button>Button</Button>
        <Button icon={<ArrowUp />} />
      </div>

      <div class="flex items-center justify-center gap-3">
        <Button variant="outline">Button</Button>
        <Button variant="outline" icon={<ArrowUp />} />
      </div>

      <div class="flex items-center justify-center gap-3">
        <Button variant="secondary">Button</Button>
        <Button variant="secondary" icon={<ArrowUp />} />
      </div>

      <div class="flex items-center justify-center gap-3">
        <Button variant="ghost">Button</Button>
        <Button variant="ghost" icon={<ArrowUp />} />
      </div>

      <div class="flex items-center justify-center gap-3">
        <Button variant="destructive">Button</Button>
        <Button variant="destructive" icon={<ArrowUp />} />
      </div>

      <div
        class="flex items-center justify-center gap-3"
        dir="rtl"
        data-lang="ar"
      >
        <Button variant="primary">زر</Button>
        <Button variant="secondary" type="submit">
          إرسال
        </Button>
        <Button variant="destructive">حذف</Button>
        <Button variant="destructive">جاري التحميل</Button>
      </div>

      <div class="flex items-center justify-center gap-3">
        <Button variant="link">Button</Button>
        <Button variant="link" icon={<ArrowUp />} />
      </div>

      <div class="flex items-center justify-center gap-3">
        <Button variant="outline" icon={<GitBranch />}>
          New Branch
        </Button>
        <Button variant="outline" icon={<GitFork />} iconPosition="right">
          Fork
        </Button>
      </div>

      <div class="flex items-center justify-center gap-3">
        <Button variant="outline" disabled icon={<Spinner />}>
          Generating
        </Button>
        <Button
          variant="secondary"
          disabled
          icon={<Spinner />}
          iconPosition="right"
        >
          Downloading
        </Button>
      </div>
    </div>
  );
};

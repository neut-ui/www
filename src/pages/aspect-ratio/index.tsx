import { AspectRatio, Image } from "@neut/ui";

export default () => {
  return (
    <div class="preview relative flex h-72 w-96 justify-center p-10 ">
      <AspectRatio ratio={1 / 1} class="w-full max-w-48 rounded-lg bg-muted">
        <Image
          src="https://avatar.vercel.sh/shadcn1"
          alt="Photo"
          fill
          class="w-full rounded-lg object-cover grayscale dark:brightness-20"
        />
      </AspectRatio>
    </div>
  );
};

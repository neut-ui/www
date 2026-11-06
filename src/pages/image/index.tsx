import { ComponentPage, Example } from "../../components/component-page";
import { Image } from "@neut/ui";

const basicCode = `import { Image } from "@neut/ui";

export default () => (
  <Image
    src="https://picsum.photos/seed/neut/1200/800"
    alt="A landscape"
    width={1200}
    height={800}
    unoptimized
    class="h-auto w-full max-w-md rounded-lg object-cover"
  />
);`;

const fillCode = `import { Image } from "@neut/ui";

export default () => (
  <div class="relative h-64 w-full max-w-md overflow-hidden rounded-lg">
    <Image
      src="https://picsum.photos/seed/neut-fill/1200/800"
      alt="A landscape"
      fill
      unoptimized
      class="object-cover"
    />
  </div>
);`;

const placeholderCode = `import { Image } from "@neut/ui";

const blurDataURL =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Crect width='16' height='16' fill='%23e5e5e5'/%3E%3C/svg%3E";

export default () => (
  <Image
    src="https://picsum.photos/seed/neut-blur/1200/800"
    alt="A landscape"
    width={1200}
    height={800}
    placeholder="blur"
    blurDataURL={blurDataURL}
    unoptimized
    class="h-auto w-full max-w-md rounded-lg object-cover"
  />
);`;

const loaderCode = `import { Image } from "@neut/ui";

const loader = ({ src, width }: { src: string; width: number }) =>
  src + "?w=" + width;

export default () => (
  <Image
    src="https://picsum.photos/seed/neut-loader/1200/800"
    alt="A landscape"
    width={1200}
    height={800}
    loader={loader}
    quality={80}
    sizes="(max-width: 768px) 100vw, 50vw"
    class="h-auto w-full max-w-md rounded-lg object-cover"
  />
);`;

const roundedCode = `import { Image } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-4">
    <Image
      src="https://picsum.photos/seed/neut-avatar/200/200"
      alt="Avatar"
      width={80}
      height={80}
      unoptimized
      class="size-20 rounded-full object-cover"
    />
    <Image
      src="https://picsum.photos/seed/neut-cover/800/400"
      alt="Cover"
      width={800}
      height={400}
      unoptimized
      class="h-24 w-48 rounded-xl object-cover"
    />
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="Image"
      description="A next/image-style image component with sizing, fill and placeholder support."
    >
      <Example
        name="Basic"
        description="Provide src, alt, width and height."
        code={basicCode}
      >
        <Image
          src="https://picsum.photos/seed/neut/1200/800"
          alt="A landscape"
          width={1200}
          height={800}
          unoptimized
          class="h-auto w-full max-w-md rounded-lg object-cover"
        />
      </Example>

      <Example
        name="Fill"
        description="fill makes the image cover a positioned parent."
        code={fillCode}
      >
        <div class="relative h-64 w-full max-w-md overflow-hidden rounded-lg">
          <Image
            src="https://picsum.photos/seed/neut-fill/1200/800"
            alt="A landscape"
            fill
            unoptimized
            class="object-cover"
          />
        </div>
      </Example>

      <Example
        name="Blur placeholder"
        description="Show a blurred preview while the image loads."
        code={placeholderCode}
      >
        <Image
          src="https://picsum.photos/seed/neut-blur/1200/800"
          alt="A landscape"
          width={1200}
          height={800}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Crect width='16' height='16' fill='%23e5e5e5'/%3E%3C/svg%3E"
          unoptimized
          class="h-auto w-full max-w-md rounded-lg object-cover"
        />
      </Example>

      <Example
        name="Custom loader"
        description="Generate optimized URLs with your own loader."
        code={loaderCode}
      >
        <Image
          src="https://picsum.photos/seed/neut-loader/1200/800"
          alt="A landscape"
          width={1200}
          height={800}
          loader={({ src, width }) => src + "?w=" + width}
          quality={80}
          sizes="(max-width: 768px) 100vw, 50vw"
          class="h-auto w-full max-w-md rounded-lg object-cover"
        />
      </Example>

      <Example
        name="Rounded"
        description="Control shape and object fit with utility classes."
        code={roundedCode}
      >
        <div class="flex items-center gap-4">
          <Image
            src="https://picsum.photos/seed/neut-avatar/200/200"
            alt="Avatar"
            width={80}
            height={80}
            unoptimized
            class="size-20 rounded-full object-cover"
          />
          <Image
            src="https://picsum.photos/seed/neut-cover/800/400"
            alt="Cover"
            width={800}
            height={400}
            unoptimized
            class="h-24 w-48 rounded-xl object-cover"
          />
        </div>
      </Example>
    </ComponentPage>
  );
};

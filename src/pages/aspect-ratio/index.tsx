import { ComponentPage, Example } from "../../components/component-page";
import { AspectRatio, Image } from "@neut/ui";

const squareCode = `import { AspectRatio, Image } from "@neut/ui";

export default () => (
  <AspectRatio ratio={1} class="w-full max-w-xs rounded-lg bg-muted">
    <Image
      src="https://picsum.photos/seed/neut-square/600/600"
      alt="Square photo"
      fill
      class="rounded-lg object-cover"
    />
  </AspectRatio>
);`;

const wideCode = `import { AspectRatio, Image } from "@neut/ui";

export default () => (
  <AspectRatio ratio={16 / 9} class="w-full max-w-xs rounded-lg bg-muted">
    <Image
      src="https://picsum.photos/seed/neut-wide/1600/900"
      alt="Wide photo"
      fill
      class="rounded-lg object-cover"
    />
  </AspectRatio>
);`;

const standardCode = `import { AspectRatio, Image } from "@neut/ui";

export default () => (
  <AspectRatio ratio={4 / 3} class="w-full max-w-xs rounded-lg bg-muted">
    <Image
      src="https://picsum.photos/seed/neut-standard/800/600"
      alt="Standard photo"
      fill
      class="rounded-lg object-cover"
    />
  </AspectRatio>
);`;

export default () => {
  return (
    <ComponentPage
      title="Aspect Ratio"
      description="Maintains a fixed width-to-height ratio for a container, keeping media from stretching."
    >
      <Example
        name="1:1"
        description="A perfect square, ideal for avatars and product shots."
        code={squareCode}
      >
        <AspectRatio ratio={1} class="w-full max-w-xs rounded-lg bg-muted">
          <Image
            src="https://picsum.photos/seed/neut-square/600/600"
            alt="Square photo"
            fill
            class="rounded-lg object-cover"
          />
        </AspectRatio>
      </Example>

      <Example
        name="16:9"
        description="The standard widescreen ratio for video and hero imagery."
        code={wideCode}
      >
        <AspectRatio ratio={16 / 9} class="w-full max-w-xs rounded-lg bg-muted">
          <Image
            src="https://picsum.photos/seed/neut-wide/1600/900"
            alt="Wide photo"
            fill
            class="rounded-lg object-cover"
          />
        </AspectRatio>
      </Example>

      <Example
        name="4:3"
        description="The classic photo ratio, slightly taller than widescreen."
        code={standardCode}
      >
        <AspectRatio ratio={4 / 3} class="w-full max-w-xs rounded-lg bg-muted">
          <Image
            src="https://picsum.photos/seed/neut-standard/800/600"
            alt="Standard photo"
            fill
            class="rounded-lg object-cover"
          />
        </AspectRatio>
      </Example>
    </ComponentPage>
  );
};

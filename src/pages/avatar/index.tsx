import { ComponentPage, Example } from "../../components/component-page";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@neut/ui";
import { Plus } from "lucide-solid";

const imageFallbackCode = `import { Avatar, AvatarFallback, AvatarImage } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-4">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://github.com/broken.png" alt="@broken" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  </div>
);`;

const badgeCode = `import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@neut/ui";
import { Plus } from "lucide-solid";

export default () => (
  <div class="flex items-center gap-4">
    <Avatar>
      <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
      <AvatarFallback>ER</AvatarFallback>
      <AvatarBadge class="bg-green-600 dark:bg-green-800" />
    </Avatar>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge>
        <Plus />
      </AvatarBadge>
    </Avatar>
  </div>
);`;

const sizesCode = `import { Avatar, AvatarFallback, AvatarImage } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-4">
    <Avatar size="sm">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
      <AvatarFallback>ER</AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
      <AvatarFallback>ML</AvatarFallback>
    </Avatar>
  </div>
);`;

const groupCode = `import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@neut/ui";
import { Plus } from "lucide-solid";

export default () => (
  <div class="flex flex-col items-center gap-6">
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>ML</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>

    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>ML</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>
        <Plus />
      </AvatarGroupCount>
    </AvatarGroup>
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="Avatar"
      description="An image element that represents a user, with support for fallbacks, badges, sizes, and grouping."
    >
      <Example
        name="Image with fallback"
        description="AvatarFallback renders when the image fails to load."
        code={imageFallbackCode}
      >
        <div class="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/broken.png" alt="@broken" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </Example>

      <Example
        name="With badge"
        description="AvatarBadge overlays a status dot or a small icon on the corner."
        code={badgeCode}
      >
        <div class="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
            <AvatarBadge class="bg-green-600 dark:bg-green-800" />
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            <AvatarBadge>
              <Plus />
            </AvatarBadge>
          </Avatar>
        </div>
      </Example>

      <Example
        name="Sizes"
        description="Three sizes are available: small, medium (default), and large."
        code={sizesCode}
      >
        <div class="flex items-center gap-4">
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage
              src="https://github.com/maxleiter.png"
              alt="@maxleiter"
            />
            <AvatarFallback>ML</AvatarFallback>
          </Avatar>
        </div>
      </Example>

      <Example
        name="Group"
        description="AvatarGroup stacks avatars, and AvatarGroupCount shows the remaining count or an action."
        code={groupCode}
      >
        <div class="flex flex-col items-center gap-6">
          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+3</AvatarGroupCount>
          </AvatarGroup>

          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>
              <Plus />
            </AvatarGroupCount>
          </AvatarGroup>
        </div>
      </Example>
    </ComponentPage>
  );
};

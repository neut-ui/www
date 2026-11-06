import { ComponentPage, Example } from "../../components/component-page";
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@neut/ui";

const basicCode = `import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@neut/ui";

export default () => (
  <Carousel class="w-full max-w-xs">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem>
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <span class="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
    <CarouselDots />
  </Carousel>
);`;

const multipleCode = `import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@neut/ui";

export default () => (
  <Carousel class="w-full max-w-sm md:max-w-lg">
    <CarouselContent class="-ml-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem class="basis-1/2 pl-1 lg:basis-1/3">
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <span class="text-2xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);`;

const verticalCode = `import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@neut/ui";

export default () => (
  <Carousel orientation="vertical" class="w-full max-w-xs">
    <CarouselContent class="h-64">
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem class="basis-1/2">
          <div class="p-1">
            <Card>
              <CardContent class="flex items-center justify-center p-6">
                <span class="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);`;

const autoPlayCode = `import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@neut/ui";

export default () => (
  <Carousel autoPlay autoPlayInterval={2000} loop class="w-full max-w-xs">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem>
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <span class="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
    <CarouselDots />
  </Carousel>
);`;

const sizeCode = `import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@neut/ui";

export default () => (
  <Carousel class="w-full max-w-sm">
    <CarouselContent>
      {Array.from({ length: 8 }).map((_, index) => (
        <CarouselItem class="basis-1/3">
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-2">
                <span class="text-xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);`;

const spacingCode = `import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@neut/ui";

export default () => (
  <Carousel class="w-full max-w-sm">
    <CarouselContent class="-ml-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem class="basis-1/2 pl-4">
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <span class="text-2xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);`;

export default () => {
  return (
    <ComponentPage
      title="Carousel"
      description="A slideshow for cycling through content such as images or cards."
    >
      <Example
        name="Basic"
        description="A horizontal carousel showing one slide per view."
        code={basicCode}
      >
        <Carousel class="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem>
                <div class="p-1">
                  <Card>
                    <CardContent class="flex aspect-square items-center justify-center p-6">
                      <span class="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </Example>

      <Example
        name="Multiple slides per view"
        description="Control the item basis to show several slides at once."
        code={multipleCode}
      >
        <Carousel class="w-full max-w-sm md:max-w-lg">
          <CarouselContent class="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem class="basis-1/2 pl-1 lg:basis-1/3">
                <div class="p-1">
                  <Card>
                    <CardContent class="flex aspect-square items-center justify-center p-6">
                      <span class="text-2xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Example>

      <Example
        name="Vertical"
        description="Use orientation vertical with a fixed height for a column carousel."
        code={verticalCode}
      >
        <Carousel orientation="vertical" class="w-full max-w-xs">
          <CarouselContent class="h-64">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem class="basis-1/2">
                <div class="p-1">
                  <Card>
                    <CardContent class="flex items-center justify-center p-6">
                      <span class="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Example>

      <Example
        name="Auto play"
        description="Enable autoPlay to advance slides automatically, with loop for a seamless cycle."
        code={autoPlayCode}
      >
        <Carousel autoPlay autoPlayInterval={2000} loop class="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem>
                <div class="p-1">
                  <Card>
                    <CardContent class="flex aspect-square items-center justify-center p-6">
                      <span class="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </Example>
      <Example
        name="Size"
        description="Change the item basis to show more slides per view."
        code={sizeCode}
      >
        <Carousel class="w-full max-w-sm">
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem class="basis-1/3">
                <div class="p-1">
                  <Card>
                    <CardContent class="flex aspect-square items-center justify-center p-2">
                      <span class="text-xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Example>

      <Example
        name="Spacing"
        description="Use negative margin and padding to add space between slides."
        code={spacingCode}
      >
        <Carousel class="w-full max-w-sm">
          <CarouselContent class="-ml-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem class="basis-1/2 pl-4">
                <div class="p-1">
                  <Card>
                    <CardContent class="flex aspect-square items-center justify-center p-6">
                      <span class="text-2xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Example>
    </ComponentPage>
  );
};

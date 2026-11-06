import { ComponentPage, Example } from "../../components/component-page";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  BubbleGroup,
  Button,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
  Spinner,
} from "@neut/ui";
import {
  Copy,
  Download,
  FileText,
  RefreshCcw,
  ThumbsDown,
  ThumbsUp,
} from "lucide-solid";
import { Marker, MarkerContent, MarkerIcon } from "@neut/ui";

const AvatarFor = (props: { fallback: string }) => (
  <Avatar>
    <AvatarFallback>{props.fallback}</AvatarFallback>
  </Avatar>
);

const usageCode = `import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@neut/ui";

export default () => (
  <MessageGroup class="w-full max-w-md">
    <Message>
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageHeader>Assistant</MessageHeader>
        <Bubble variant="secondary">
          <BubbleContent>How can I help you today?</BubbleContent>
        </Bubble>
        <MessageFooter>Just now</MessageFooter>
      </MessageContent>
    </Message>
  </MessageGroup>
);`;

const alignmentCode = `import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
} from "@neut/ui";

const AvatarFor = (props: { fallback: string }) => (
  <Avatar>
    <AvatarFallback>{props.fallback}</AvatarFallback>
  </Avatar>
);

export default () => (
  <MessageGroup class="w-full max-w-md">
    <Message>
      <MessageAvatar>
        <AvatarFor fallback="R" />
      </MessageAvatar>
      <MessageContent>
        <Bubble variant="muted">
          <BubbleContent>The build failed during dependency installation.</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageAvatar>
        <AvatarFor fallback="ME" />
      </MessageAvatar>
      <MessageContent>
        <Bubble>
          <BubbleContent>Can you share the exact error?</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  </MessageGroup>
);`;

const attachmentCode = `import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
} from "@neut/ui";
import { Download, FileText } from "lucide-solid";

export default () => (
  <MessageGroup class="w-full max-w-md">
    <Message align="end">
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble>
          <BubbleContent>Here is the PDF with the image added.</BubbleContent>
        </Bubble>
        <Attachment>
          <AttachmentMedia>
            <FileText />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
            <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Download sales-dashboard.pdf">
              <Download />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      </MessageContent>
    </Message>
  </MessageGroup>
);`;

const statusCode = `import {
  Marker,
  MarkerContent,
  MarkerIcon,
  Message,
  MessageContent,
  MessageGroup,
  Spinner,
} from "@neut/ui";

export default () => (
  <MessageGroup class="w-full max-w-md">
    <Message>
      <MessageContent>
        <Marker role="status">
          <MarkerIcon>
            <Spinner />
          </MarkerIcon>
          <MarkerContent>Checking the logs...</MarkerContent>
        </Marker>
      </MessageContent>
    </Message>
  </MessageGroup>
);`;

const groupCode = `import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "@neut/ui";

export default () => (
  <MessageGroup class="w-full max-w-md">
    <Message>
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageHeader>CN</MessageHeader>
        <Bubble variant="secondary">
          <BubbleContent>I checked the registry addresses.</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message>
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble variant="secondary">
          <BubbleContent>
            The component and example JSON now live under the UI registry.
          </BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  </MessageGroup>
);`;

const headerFooterCode = `import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@neut/ui";

export default () => (
  <Message class="w-full max-w-md">
    <MessageAvatar>
      <Avatar>
        <AvatarFallback>O</AvatarFallback>
      </Avatar>
    </MessageAvatar>
    <MessageContent>
      <MessageHeader>Olivia</MessageHeader>
      <Bubble variant="secondary">
        <BubbleContent>I already checked the logs.</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>
          Send the report to the team. Ping me if you need help.
        </BubbleContent>
      </Bubble>
      <MessageFooter>Read · Yesterday</MessageFooter>
    </MessageContent>
  </Message>
);`;

const actionsCode = `import {
  Bubble,
  BubbleContent,
  Button,
  Message,
  MessageContent,
  MessageFooter,
} from "@neut/ui";
import { Copy, RefreshCcw } from "lucide-solid";

export default () => (
  <Message align="end" class="w-full max-w-md">
    <MessageContent>
      <Bubble>
        <BubbleContent>
          The install failure is coming from the workspace package.
        </BubbleContent>
      </Bubble>
      <MessageFooter class="gap-1">
        <Button variant="ghost" size="xs" aria-label="Copy" icon={<Copy />} />
        <Button
          variant="ghost"
          size="xs"
          aria-label="Retry"
          icon={<RefreshCcw />}
        />
      </MessageFooter>
    </MessageContent>
  </Message>
);`;

const avatarCode = `import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  BubbleGroup,
  Message,
  MessageAvatar,
  MessageContent,
} from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-sm flex-col gap-6">
    <Message>
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble variant="muted">
          <BubbleContent>
            The build failed during dependency installation.
          </BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble>
          <BubbleContent>Can you share the exact error?</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message>
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <BubbleGroup>
          <Bubble variant="muted">
            <BubbleContent>Here is the error from the logs.</BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>
              Something went wrong with the build. The libraries are not
              installed correctly.
            </BubbleContent>
          </Bubble>
        </BubbleGroup>
      </MessageContent>
    </Message>
  </div>
);`;

const patternCode = `import {
  Bubble,
  BubbleContent,
  Button,
  Message,
  MessageContent,
  MessageFooter,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@neut/ui";
import { Copy, RefreshCcw, ThumbsDown, ThumbsUp } from "lucide-solid";

export default () => (
  <Message class="w-full max-w-md">
    <MessageContent class="gap-2">
      <Bubble variant="ghost">
        <BubbleContent>
          Install Dialog, then open it from the gear button in site-header.tsx.
          Wrap the button in a DialogTrigger and put the settings form in
          DialogContent.
        </BubbleContent>
      </Bubble>
      <MessageFooter class="px-0">
        <Button variant="ghost" size="xs" aria-label="Copy" icon={<Copy />} />
        <Button
          variant="ghost"
          size="xs"
          aria-label="Good response"
          icon={<ThumbsUp />}
        />
        <Button
          variant="ghost"
          size="xs"
          aria-label="Bad response"
          icon={<ThumbsDown />}
        />
        <Button
          variant="ghost"
          size="xs"
          aria-label="Retry"
          icon={<RefreshCcw />}
        />
      </MessageFooter>
    </MessageContent>
  </Message>
);`;

export default () => {
  return (
    <ComponentPage
      title="Message"
      description="A message row with avatar, content, header and footer slots."
    >
      <Example
        name="Usage"
        description="Avatar, alignment, header and footer around Bubble."
        code={usageCode}
      >
        <MessageGroup class="w-full max-w-md">
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <MessageHeader>Assistant</MessageHeader>
              <Bubble variant="secondary">
                <BubbleContent>How can I help you today?</BubbleContent>
              </Bubble>
              <MessageFooter>Just now</MessageFooter>
            </MessageContent>
          </Message>
        </MessageGroup>
      </Example>

      <Example
        name="Alignment"
        description="Align messages to the start or end of the conversation."
        code={alignmentCode}
      >
        <MessageGroup class="w-full max-w-md">
          <Message>
            <MessageAvatar>
              <AvatarFor fallback="R" />
            </MessageAvatar>
            <MessageContent>
              <Bubble variant="muted">
                <BubbleContent>
                  The build failed during dependency installation.
                </BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
          <Message align="end">
            <MessageAvatar>
              <AvatarFor fallback="ME" />
            </MessageAvatar>
            <MessageContent>
              <Bubble>
                <BubbleContent>Can you share the exact error?</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </MessageGroup>
      </Example>

      <Example
        name="With attachment"
        description="Render attachments inside message content."
        code={attachmentCode}
      >
        <MessageGroup class="w-full max-w-md">
          <Message align="end">
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble>
                <BubbleContent>
                  Here is the PDF with the image added.
                </BubbleContent>
              </Bubble>
              <Attachment>
                <AttachmentMedia>
                  <FileText />
                </AttachmentMedia>
                <AttachmentContent>
                  <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
                  <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
                </AttachmentContent>
                <AttachmentActions>
                  <AttachmentAction aria-label="Download sales-dashboard.pdf">
                    <Download />
                  </AttachmentAction>
                </AttachmentActions>
              </Attachment>
            </MessageContent>
          </Message>
        </MessageGroup>
      </Example>

      <Example
        name="With status"
        description="Use a Marker with role=status for in-progress messages."
        code={statusCode}
      >
        <MessageGroup class="w-full max-w-md">
          <Message>
            <MessageContent>
              <Marker role="status">
                <MarkerIcon>
                  <Spinner />
                </MarkerIcon>
                <MarkerContent>Checking the logs...</MarkerContent>
              </Marker>
            </MessageContent>
          </Message>
        </MessageGroup>
      </Example>
      <Example
        name="Group"
        description="Stack consecutive messages from the same sender."
        code={groupCode}
      >
        <MessageGroup class="w-full max-w-md">
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <MessageHeader>CN</MessageHeader>
              <Bubble variant="secondary">
                <BubbleContent>I checked the registry addresses.</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble variant="secondary">
                <BubbleContent>
                  The component and example JSON now live under the UI registry.
                </BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </MessageGroup>
      </Example>

      <Example
        name="Header and footer"
        description="Show sender name and delivery metadata."
        code={headerFooterCode}
      >
        <Message class="w-full max-w-md">
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>O</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <MessageHeader>Olivia</MessageHeader>
            <Bubble variant="secondary">
              <BubbleContent>I already checked the logs.</BubbleContent>
            </Bubble>
            <Bubble variant="secondary">
              <BubbleContent>
                Send the report to the team. Ping me if you need help.
              </BubbleContent>
            </Bubble>
            <MessageFooter>Read · Yesterday</MessageFooter>
          </MessageContent>
        </Message>
      </Example>

      <Example
        name="Actions"
        description="Add message-level actions in MessageFooter."
        code={actionsCode}
      >
        <Message align="end" class="w-full max-w-md">
          <MessageContent>
            <Bubble>
              <BubbleContent>
                The install failure is coming from the workspace package.
              </BubbleContent>
            </Bubble>
            <MessageFooter class="gap-1">
              <Button
                variant="ghost"
                size="xs"
                aria-label="Copy"
                icon={<Copy />}
              />
              <Button
                variant="ghost"
                size="xs"
                aria-label="Retry"
                icon={<RefreshCcw />}
              />
            </MessageFooter>
          </MessageContent>
        </Message>
      </Example>
      <Example
        name="Avatar"
        description="Use MessageAvatar with grouped bubbles for consecutive replies."
        code={avatarCode}
      >
        <div class="flex w-full max-w-sm flex-col gap-6">
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble variant="muted">
                <BubbleContent>
                  The build failed during dependency installation.
                </BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
          <Message align="end">
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble>
                <BubbleContent>Can you share the exact error?</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <BubbleGroup>
                <Bubble variant="muted">
                  <BubbleContent>
                    Here is the error from the logs.
                  </BubbleContent>
                </Bubble>
                <Bubble variant="muted">
                  <BubbleContent>
                    Something went wrong with the build. The libraries are not
                    installed correctly.
                  </BubbleContent>
                </Bubble>
              </BubbleGroup>
            </MessageContent>
          </Message>
        </div>
      </Example>

      <Example
        name="Actions pattern"
        description="Add copy, feedback and retry actions to a message footer."
        code={patternCode}
      >
        <Message class="w-full max-w-md">
          <MessageContent class="gap-2">
            <Bubble variant="ghost">
              <BubbleContent>
                Install Dialog, then open it from the gear button in
                site-header.tsx. Wrap the button in a DialogTrigger and put the
                settings form in DialogContent.
              </BubbleContent>
            </Bubble>
            <MessageFooter class="px-0">
              <Button
                variant="ghost"
                size="xs"
                aria-label="Copy"
                icon={<Copy />}
              />
              <Button
                variant="ghost"
                size="xs"
                aria-label="Good response"
                icon={<ThumbsUp />}
              />
              <Button
                variant="ghost"
                size="xs"
                aria-label="Bad response"
                icon={<ThumbsDown />}
              />
              <Button
                variant="ghost"
                size="xs"
                aria-label="Retry"
                icon={<RefreshCcw />}
              />
            </MessageFooter>
          </MessageContent>
        </Message>
      </Example>
    </ComponentPage>
  );
};

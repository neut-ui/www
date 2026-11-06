import { ComponentPage, Example } from "../../components/component-page";
import { For, Show, createSignal, onCleanup, onMount } from "solid-js";
import type { JSX } from "solid-js";
import {
  Bubble,
  BubbleContent,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  Marker,
  MarkerContent,
  Message,
  MessageContent,
  MessageHeader,
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Tabs,
  TabsList,
  TabsTrigger,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
} from "@neut/ui";
import { ArrowUp, MessageCircleDashed, RotateCw } from "lucide-solid";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

type BubbleVariant =
  | "default"
  | "secondary"
  | "muted"
  | "tinted"
  | "outline"
  | "ghost"
  | "destructive";

const baseMessages: ChatMessage[] = [
  {
    id: "demo-1",
    role: "user",
    text: "I'm building a chat for our app and the scroll behavior is driving me nuts. Every time the AI streams a reply, the whole thread jumps around.",
  },
  {
    id: "demo-2",
    role: "assistant",
    text: "That's the classic streaming scroll problem. Wrap your message list in MessageScroller and turn on autoScroll — the viewport pins to the bottom as tokens arrive.\n\nThe important part: it only auto-scrolls while the reader is already at the bottom. The moment they scroll up, auto-scroll backs off and their position is preserved.",
  },
  {
    id: "demo-3",
    role: "user",
    text: "Okay, but when someone sends a new message the view still feels jarring — like the whole conversation reloads from the top.",
  },
  {
    id: "demo-4",
    role: "assistant",
    text: "MessageScrollerItem fixes that with turn anchoring. Set scrollAnchor on the turn that should settle near the top. It also leaves a small peek of the previous exchange visible above the anchor, so context isn't lost.",
  },
  {
    id: "demo-5",
    role: "user",
    text: "And if they've scrolled up to re-read an older answer? I don't want to yank them back down.",
  },
  {
    id: "demo-6",
    role: "assistant",
    text: "You won't. Auto-scroll only runs when the viewport is already pinned to the bottom, so scrolling up is a deliberate opt-out. MessageScrollerButton appears when there is content they haven't seen yet.",
  },
];

const scriptedMessages: ChatMessage[] = [
  {
    id: "anchor-1-user",
    role: "user",
    text: "Can you show me how anchoring behaves when a new prompt starts the turn?",
  },
  {
    id: "anchor-1-assistant",
    role: "assistant",
    text: "Append the user prompt first, then append the assistant response. With User selected, the prompt settles near the top and the assistant response fills in below it.",
  },
  {
    id: "anchor-2-user",
    role: "user",
    text: "What changes when assistant messages are the anchor?",
  },
  {
    id: "anchor-2-assistant",
    role: "assistant",
    text: "Now each assistant response is the item MessageScroller keeps in view. This is useful when the reply is the moment you want readers to land on after each turn.",
  },
  {
    id: "anchor-3-user",
    role: "user",
    text: "Can I switch roles and keep adding turns?",
  },
  {
    id: "anchor-3-assistant",
    role: "assistant",
    text: "Yes. The next appended message with the selected role becomes the anchor, so you can compare user and assistant anchoring without resetting the demo.",
  },
];

type GroupItem =
  | {
      id: string;
      type: "event";
      text: string;
      scrollAnchor?: boolean;
    }
  | {
      id: string;
      type: "message";
      sender: string;
      role: "assistant" | "participant";
      text: string;
      scrollAnchor?: boolean;
    };

const groupItems: GroupItem[] = [
  {
    id: "group-1",
    type: "message",
    sender: "Grace",
    role: "participant",
    text: "@mary, the astrophage line keeps matching Venus energy output. Can you check my math?",
  },
  {
    id: "group-2",
    type: "message",
    sender: "Mary (Agent)",
    role: "assistant",
    text: "Yes. Confirmed. The curve points to a microorganism harvesting stellar energy and breeding near carbon dioxide. If @rocky agrees, this is the clue we need.",
  },
  {
    id: "group-3",
    type: "message",
    sender: "Grace",
    role: "participant",
    text: "ping @rocky",
    scrollAnchor: true,
  },
  {
    id: "group-4",
    type: "event",
    text: "Rocky has joined the chat",
    scrollAnchor: true,
  },
  {
    id: "group-5",
    type: "message",
    sender: "Rocky",
    role: "participant",
    text: "Amaze. Astrophage eats light, makes heat, goes to carbon dioxide. Rocky has fuel model. Grace is smart.",
  },
];

const contextMessages: ChatMessage[] = [
  {
    id: "context-1",
    role: "user",
    text: "Can you draft a short update for the team?",
  },
  {
    id: "context-2",
    role: "assistant",
    text: "Sure. Here is a three-line update:\n\nWe shipped the new onboarding flow.\nEarly results show a 12% lift in activation.\nNext we are testing the invite step.",
  },
  {
    id: "context-3",
    role: "user",
    text: "Keep it shorter and less formal.",
  },
  {
    id: "context-4",
    role: "assistant",
    text: "New onboarding is live. Activation is up 12%. Next up: the invite step.",
  },
  {
    id: "context-5",
    role: "user",
    text: "Perfect. Send it to the team channel.",
  },
  {
    id: "context-6",
    role: "assistant",
    text: "Sent. I will watch the thread for replies and surface anything that needs a follow-up.",
  },
];

const streamingUserMessage: ChatMessage = {
  id: "stream-user",
  role: "user",
  text: "Explain how autoScroll behaves while a response is streaming.",
};

const streamingFullText =
  "AutoScroll only follows when the reader is already at the live edge. While chunks arrive, the viewport keeps the latest text in view. If the reader scrolls up, following stops immediately and their position is preserved. When they jump back to the latest message, following re-engages.";

const openingMessages: ChatMessage[] = [
  {
    id: "open-1",
    role: "user",
    text: "This is the first message the user sent in the conversation.",
  },
  {
    id: "open-2",
    role: "assistant",
    text: "Workspace creation rose 8%, but first invite completion only rose 2%.",
  },
  {
    id: "open-3",
    role: "user",
    text: "This is the last message the user sent in the conversation.",
  },
  {
    id: "open-4",
    role: "assistant",
    text: "Start with the invite step. Teams are creating workspaces but waiting to add collaborators.\n\nCompare invite drop-off by account size, check whether users who skip invites return within 24 hours, and review the empty-state copy on the first project screen.",
  },
];

const historyMessages: ChatMessage[] = Array.from(
  { length: 12 },
  (_, index) => {
    const id = "history-" + (index + 1);

    return index % 2 === 0
      ? {
          id,
          role: "user",
          text:
            index === 0
              ? "Can you summarize the incident channel?"
              : "Follow-up question " +
                (index / 2 + 1) +
                " about the incident.",
        }
      : {
          id,
          role: "assistant",
          text:
            "Incident update " +
            (Math.floor(index / 2) + 1) +
            ": the export queue is recovering, checkout is unaffected, and support is quiet.",
        };
  },
);

const commandMessages: ChatMessage[] = baseMessages;

const visibilityMessages: ChatMessage[] = baseMessages;

const scrollableMessages: ChatMessage[] = Array.from(
  { length: 12 },
  (_, index) => ({
    id: "scrollable-" + (index + 1),
    role: index % 2 === 0 ? "user" : "assistant",
    text:
      index % 2 === 0
        ? "Review scroll checkpoint " + (index + 1) + "."
        : "Checkpoint " +
          (index + 1) +
          " is synced. The scrollable hook updates as the viewport moves.",
  }),
);

const animationCss = [
  "@keyframes ms-pop { from { opacity: 0; transform: translateY(10px) scale(0.96); } to { opacity: 1; transform: none; } }",
  ".ms-pop { animation: ms-pop 240ms cubic-bezier(0.23, 1, 0.32, 1); }",
  "@keyframes ms-fade { from { opacity: 0; } to { opacity: 1; } }",
  ".ms-fade { animation: ms-fade 300ms ease-out; }",
  "@keyframes ms-slide { from { opacity: 0; transform: translateX(14px); } to { opacity: 1; transform: none; } }",
  ".ms-slide { animation: ms-slide 260ms cubic-bezier(0.23, 1, 0.32, 1); }",
].join("\n");

const paragraphs = (text: string) => text.split("\n\n");

const MessageRow = (props: {
  message: ChatMessage;
  anchor?: boolean;
  userVariant?: BubbleVariant;
  assistantVariant?: BubbleVariant;
  class?: string;
}) => {
  const isUser = () => props.message.role === "user";

  return (
    <MessageScrollerItem
      messageId={props.message.id}
      scrollAnchor={props.anchor}
      class={props.class}
    >
      <Message align={isUser() ? "end" : "start"}>
        <MessageContent>
          <Bubble
            variant={
              isUser()
                ? (props.userVariant ?? "muted")
                : (props.assistantVariant ?? "ghost")
            }
          >
            <BubbleContent class="space-y-2">
              <For each={paragraphs(props.message.text)}>
                {(paragraph) => <p class="whitespace-pre-wrap">{paragraph}</p>}
              </For>
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageScrollerItem>
  );
};

const ChatBody = (props: {
  messages: ChatMessage[];
  anchorRole?: "user" | "assistant" | "none";
  itemClass?: (message: ChatMessage) => string;
}) => {
  const anchored = (message: ChatMessage) =>
    props.anchorRole === "none"
      ? false
      : message.role === (props.anchorRole ?? "user");

  return (
    <MessageScroller class="h-full">
      <MessageScrollerViewport aria-label="Conversation">
        <MessageScrollerContent class="gap-4 p-4">
          <For each={props.messages}>
            {(message) => (
              <MessageRow
                message={message}
                anchor={anchored(message)}
                class={props.itemClass?.(message)}
              />
            )}
          </For>
        </MessageScrollerContent>
      </MessageScrollerViewport>
      <MessageScrollerButton />
    </MessageScroller>
  );
};

const ResetButton = (props: {
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) => (
  <Tooltip>
    <TooltipTrigger
      variant="outline"
      size="xs"
      aria-label={props.label}
      disabled={props.disabled}
      icon={<RotateCw />}
      onClick={props.onClick}
    />
    <TooltipContent>Reset</TooltipContent>
  </Tooltip>
);

const SendButton = (props: { onClick: () => void; disabled?: boolean }) => (
  <Button
    type="button"
    size="xs"
    aria-label="Send message"
    disabled={props.disabled}
    icon={<ArrowUp />}
    onClick={props.onClick}
  />
);

const Composer = (props: {
  onSend: () => void;
  disabled?: boolean;
  placeholder?: string;
}) => (
  <form
    class="flex w-full items-center gap-2"
    onSubmit={(event) => {
      event.preventDefault();
      if (!props.disabled) props.onSend();
    }}
  >
    <InputGroup class="flex-1">
      <InputGroupInput
        placeholder={props.placeholder ?? "Send a message..."}
        disabled={props.disabled}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          type="submit"
          icon={<ArrowUp />}
          aria-label="Send"
          disabled={props.disabled}
        />
      </InputGroupAddon>
    </InputGroup>
  </form>
);

const ChatShell = (props: {
  title: string;
  description: string;
  action?: JSX.Element;
  footer?: JSX.Element;
  note?: string;
  children: JSX.Element;
}) => (
  <div class="relative flex flex-col gap-4">
    <Card class="mx-auto h-140 w-full max-w-sm gap-0 overflow-hidden">
      <CardHeader class="gap-1 border-b">
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <Show when={props.action}>
          <CardAction>{props.action}</CardAction>
        </Show>
      </CardHeader>
      <CardContent class="min-h-0 flex-1 overflow-hidden p-0">
        {props.children}
      </CardContent>
      <Show when={props.footer}>
        <CardFooter class="flex-col gap-2 border-t">{props.footer}</CardFooter>
      </Show>
    </Card>
    <Show when={props.note}>
      <p class="mx-auto max-w-sm px-0.5 text-center text-xs text-balance text-neutral-500 dark:text-neutral-400">
        {props.note}
      </p>
    </Show>
  </div>
);

const EmptyChat = (props: { title: string; description: string }) => (
  <Empty class="h-full">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <MessageCircleDashed />
      </EmptyMedia>
      <EmptyTitle>{props.title}</EmptyTitle>
      <EmptyDescription>{props.description}</EmptyDescription>
    </EmptyHeader>
  </Empty>
);

const Demo = () => {
  const [messages, setMessages] = createSignal<ChatMessage[]>(baseMessages);
  let nextId = baseMessages.length + 1;

  const send = () => {
    const id = nextId++;
    setMessages((current) => [
      ...current,
      {
        id: "demo-sent-" + id,
        role: "user",
        text: "What should I check next?",
      },
    ]);
    setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: "demo-reply-" + id,
          role: "assistant",
          text: "Check whether the reader is at the live edge, then decide whether to follow or hold their position.",
        },
      ]);
    }, 500);
  };

  return (
    <ChatShell
      title="New Chat"
      description="How can I help you today?"
      action={
        <ResetButton
          label="Reset conversation"
          onClick={() => setMessages(baseMessages)}
        />
      }
      footer={<Composer onSend={send} />}
      note="Send a message to see auto-scroll follow the live edge."
    >
      <MessageScrollerProvider autoScroll>
        <ChatBody messages={messages()} anchorRole="user" />
      </MessageScrollerProvider>
    </ChatShell>
  );
};

const Anchoring = () => {
  const [anchorRole, setAnchorRole] = createSignal<"user" | "assistant">(
    "user",
  );
  const [messages, setMessages] = createSignal<ChatMessage[]>([]);
  const [index, setIndex] = createSignal(0);

  const next = () => scriptedMessages[index()];

  const send = () => {
    const message = next();
    if (!message) return;
    setMessages((current) => [...current, message]);
    setIndex((current) => current + 1);
  };

  return (
    <ChatShell
      title="Anchoring Turns"
      description="Choose which role settles near the top edge."
      action={
        <ResetButton
          label="Reset anchored turns"
          disabled={messages().length === 0}
          onClick={() => {
            setMessages([]);
            setIndex(0);
          }}
        />
      }
      footer={
        <>
          <div class="flex w-full items-center gap-2">
            <ToggleGroup
              value={anchorRole()}
              onValueChange={(value) => {
                if (value === "user" || value === "assistant") {
                  setAnchorRole(value);
                  setMessages([]);
                  setIndex(0);
                }
              }}
            >
              <ToggleGroupItem value="user" aria-label="Anchor user messages">
                User
              </ToggleGroupItem>
              <ToggleGroupItem
                value="assistant"
                aria-label="Anchor assistant messages"
              >
                Assistant
              </ToggleGroupItem>
            </ToggleGroup>
            <SendButton onClick={send} disabled={!next()} />
          </div>
        </>
      }
      note="Toggle the anchor role, then send messages to compare where turns settle."
    >
      <Show
        when={messages().length > 0}
        fallback={
          <EmptyChat
            title="No anchored messages yet"
            description="Send the first message to see the selected role anchor."
          />
        }
      >
        <MessageScrollerProvider>
          <ChatBody messages={messages()} anchorRole={anchorRole()} />
        </MessageScrollerProvider>
      </Show>
    </ChatShell>
  );
};

const GroupChat = () => {
  const [turn, setTurn] = createSignal<"idle" | "marker" | "message">("idle");

  const items = () => {
    if (turn() === "message") return groupItems;
    if (turn() === "marker") return groupItems.slice(0, 4);
    return groupItems.slice(0, 3);
  };

  return (
    <ChatShell
      title="Group Chat"
      description="A group chat with several participants and an assistant."
      action={
        <ResetButton
          label="Reset conversation"
          disabled={turn() === "idle"}
          onClick={() => setTurn("idle")}
        />
      }
      footer={
        <Button
          type="button"
          variant="secondary"
          class="w-full"
          disabled={turn() === "message"}
          onClick={() =>
            setTurn((current) => (current === "idle" ? "marker" : "message"))
          }
        >
          {turn() === "message"
            ? "Conversation complete"
            : turn() === "marker"
              ? "Send Message as Rocky"
              : "Add Rocky"}
        </Button>
      }
      note="When a user joins, a marker is created. scrollAnchor on the marker marks it as the next turn."
    >
      <MessageScrollerProvider>
        <MessageScroller class="h-full">
          <MessageScrollerViewport aria-label="Group conversation">
            <MessageScrollerContent class="gap-4 p-4">
              <For each={items()}>
                {(item) =>
                  item.type === "message" ? (
                    <MessageScrollerItem
                      messageId={item.id}
                      scrollAnchor={item.scrollAnchor}
                    >
                      <Message
                        align={item.sender === "Grace" ? "end" : "start"}
                      >
                        <MessageContent>
                          <Show when={item.sender !== "Grace"}>
                            <MessageHeader>{item.sender}</MessageHeader>
                          </Show>
                          <Bubble
                            variant={
                              item.sender === "Grace"
                                ? "muted"
                                : item.role === "assistant"
                                  ? "ghost"
                                  : "tinted"
                            }
                          >
                            <BubbleContent>{item.text}</BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                  ) : (
                    <MessageScrollerItem
                      messageId={item.id}
                      scrollAnchor={item.scrollAnchor}
                    >
                      <Marker variant="separator">
                        <MarkerContent>{item.text}</MarkerContent>
                      </Marker>
                    </MessageScrollerItem>
                  )
                }
              </For>
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </ChatShell>
  );
};

const PreviousContext = () => {
  const [peek, setPeek] = createSignal(64);

  return (
    <MessageScrollerProvider scrollMargin={24} scrollPreviousItemPeek={peek()}>
      <ChatShell
        title="Keeping Context Visible"
        description="New turns keep part of the previous reply in view."
        action={
          <ResetButton
            label="Reset context example"
            onClick={() => setPeek(64)}
          />
        }
        footer={
          <div class="flex w-full flex-col gap-3">
            <Composer
              onSend={() => undefined}
              placeholder="Send a message..."
            />
            <div class="flex items-center gap-2">
              <span class="w-12 text-xs text-neutral-500 tabular-nums">
                {peek()}px
              </span>
              <Slider
                aria-label="Previous context peek"
                value={[peek()]}
                min={0}
                max={128}
                step={1}
                onValueChange={(value) => setPeek(value[0] ?? 64)}
                class="flex-1"
              />
            </div>
          </div>
        }
        note="Adjust the slider to change how much of the previous turn stays visible above the new anchor."
      >
        <ChatBody messages={contextMessages} anchorRole="user" />
      </ChatShell>
    </MessageScrollerProvider>
  );
};

const Streaming = () => {
  const [messages, setMessages] = createSignal<ChatMessage[]>([
    streamingUserMessage,
    { id: "stream-assistant", role: "assistant", text: "" },
  ]);
  let timer: ReturnType<typeof setInterval> | undefined;

  const stop = () => {
    if (timer) {
      clearInterval(timer);
      timer = undefined;
    }
  };

  const start = () => {
    stop();
    setMessages([
      streamingUserMessage,
      { id: "stream-assistant", role: "assistant", text: "" },
    ]);
    const words = streamingFullText.split(" ");
    let index = 0;
    timer = setInterval(() => {
      index += 1;
      const text = words.slice(0, index).join(" ");
      setMessages((current) =>
        current.map((message) =>
          message.id === "stream-assistant" ? { ...message, text } : message,
        ),
      );
      if (index >= words.length) stop();
    }, 60);
  };

  onMount(start);
  onCleanup(stop);

  return (
    <ChatShell
      title="Streaming Reply"
      description="autoScroll follows output while the reader is at the live edge."
      action={<ResetButton label="Restart stream" onClick={start} />}
      footer={<Composer onSend={start} placeholder="Send a message..." />}
      note="The reply streams into the anchored turn without moving the reader."
    >
      <MessageScrollerProvider autoScroll>
        <ChatBody messages={messages()} anchorRole="user" />
      </MessageScrollerProvider>
    </ChatShell>
  );
};

const OpeningPosition = () => {
  const [position, setPosition] = createSignal<"start" | "end" | "last-anchor">(
    "last-anchor",
  );

  return (
    <ChatShell
      title="Opening Position"
      description="Choose where a saved transcript opens."
      footer={
        <Tabs value={position()} onValueChange={setPosition} class="w-full">
          <TabsList class="w-full">
            <TabsTrigger value="start">start</TabsTrigger>
            <TabsTrigger value="end">end</TabsTrigger>
            <TabsTrigger value="last-anchor">last-anchor</TabsTrigger>
          </TabsList>
        </Tabs>
      }
      note="Toggle defaultScrollPosition to see where the transcript starts when you open the thread."
    >
      <Show when={position()} keyed>
        {(value) => (
          <MessageScrollerProvider defaultScrollPosition={value}>
            <ChatBody messages={openingMessages} anchorRole="user" />
          </MessageScrollerProvider>
        )}
      </Show>
    </ChatShell>
  );
};

const LoadHistory = () => {
  const [visibleCount, setVisibleCount] = createSignal(5);
  const canLoad = () => visibleCount() < historyMessages.length;

  return (
    <ChatShell
      title="Load History"
      description="Prepended messages keep your place."
      action={
        <ResetButton
          label="Reset loaded messages"
          disabled={!canLoad()}
          onClick={() => setVisibleCount(5)}
        />
      }
      footer={
        <>
          <Button
            type="button"
            variant="secondary"
            class="w-full"
            disabled={!canLoad()}
            onClick={() => setVisibleCount(historyMessages.length)}
          >
            {canLoad() ? "Load History" : "History Loaded"}
          </Button>
          <p class="text-xs text-neutral-500 dark:text-neutral-400">
            Restore earlier messages while keeping your place.
          </p>
        </>
      }
      note="Click Load History to load the entire conversation."
    >
      <MessageScrollerProvider>
        <ChatBody
          messages={historyMessages.slice(-visibleCount())}
          anchorRole="none"
        />
      </MessageScrollerProvider>
    </ChatShell>
  );
};

const Animation = () => {
  const [animation, setAnimation] = createSignal<"pop" | "fade" | "slide">(
    "pop",
  );
  const [messages, setMessages] = createSignal<
    Array<ChatMessage & { animation?: string }>
  >(baseMessages.slice(0, 2));
  let nextId = 3;

  const send = () => {
    const id = nextId++;
    setMessages((current) => [
      ...current,
      {
        id: "animation-" + id,
        role: "user",
        text: "Can you show that with a different animation?",
        animation: animation(),
      },
    ]);
    setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: "animation-reply-" + id,
          role: "assistant",
          text: "Sure. Animate transform and opacity only, so the row measurement stays predictable.",
          animation: animation(),
        },
      ]);
    }, 400);
  };

  return (
    <ChatShell
      title="Animating New Messages"
      description="Animate the row without animating layout."
      action={
        <ResetButton
          label="Reset animation"
          onClick={() => setMessages(baseMessages.slice(0, 2))}
        />
      }
      footer={
        <>
          <Select
            value={animation()}
            onValueChange={(value) =>
              setAnimation(value as "pop" | "fade" | "slide")
            }
          >
            <SelectTrigger class="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pop">Pop</SelectItem>
              <SelectItem value="fade">Fade</SelectItem>
              <SelectItem value="slide">Slide</SelectItem>
            </SelectContent>
          </Select>
          <div class="flex w-full items-center gap-2">
            <Composer onSend={send} placeholder="Send a message..." />
          </div>
        </>
      }
      note="Only transform and opacity are animated, so anchoring and auto-scroll stay stable."
    >
      <style>{animationCss}</style>
      <MessageScrollerProvider autoScroll>
        <ChatBody
          messages={messages()}
          anchorRole="user"
          itemClass={(message) =>
            "animation" in message && message.animation
              ? "ms-" + message.animation
              : ""
          }
        />
      </MessageScrollerProvider>
    </ChatShell>
  );
};

const Commands = () => {
  return (
    <MessageScrollerProvider>
      <ChatShell
        title="Jumping to Messages"
        description="Drive the transcript from outside the message list."
        action={<CommandMenu />}
        note="Use the controls to jump to any message in the conversation."
      >
        <ChatBody messages={commandMessages} anchorRole="user" />
      </ChatShell>
    </MessageScrollerProvider>
  );
};

const CommandMenu = () => {
  const { scrollToMessage } = useMessageScroller();
  const userMessages = () =>
    commandMessages.filter((message) => message.role === "user");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger variant="secondary" size="sm">
        Jump to...
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" class="w-64">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Conversations</DropdownMenuLabel>
          <For each={userMessages()}>
            {(message) => (
              <DropdownMenuItem
                onClick={() =>
                  scrollToMessage(message.id, {
                    align: "start",
                    behavior: "smooth",
                  })
                }
              >
                <span class="line-clamp-1 min-w-0">{message.text}</span>
              </DropdownMenuItem>
            )}
          </For>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const TranscriptOutline = () => {
  const { scrollToMessage } = useMessageScroller();
  const { currentAnchorId } = useMessageScrollerVisibility();
  const userMessages = () =>
    visibilityMessages.filter((message) => message.role === "user");

  return (
    <HoverCard>
      <HoverCardTrigger
        component={Button}
        variant="ghost"
        size="xs"
        aria-label="Open transcript outline"
        class="flex h-9 w-9 flex-col items-center justify-center gap-1"
      >
        <For each={userMessages()}>
          {(message) => (
            <span
              class={
                currentAnchorId() === message.id
                  ? "h-0.5 w-4 rounded-full bg-neutral-900 dark:bg-neutral-100"
                  : "h-0.5 w-4 rounded-full bg-neutral-400/50"
              }
            />
          )}
        </For>
      </HoverCardTrigger>
      <HoverCardContent side="left" class="flex w-64 flex-col gap-1 p-1">
        <For each={userMessages()}>
          {(message) => (
            <button
              type="button"
              aria-current={
                currentAnchorId() === message.id ? "location" : undefined
              }
              class="flex min-h-7 items-center rounded-xl px-2 py-1.5 text-left text-sm transition-colors hover:bg-neutral-100 aria-current:bg-neutral-100 dark:hover:bg-neutral-800 dark:aria-current:bg-neutral-800"
              onClick={() =>
                scrollToMessage(message.id, {
                  align: "start",
                  behavior: "smooth",
                })
              }
            >
              <span class="line-clamp-1 min-w-0">{message.text}</span>
            </button>
          )}
        </For>
      </HoverCardContent>
    </HoverCard>
  );
};

const Visibility = () => {
  return (
    <MessageScrollerProvider scrollMargin={12}>
      <div class="relative mx-auto w-full max-w-sm">
        <ChatShell
          title="Transcript Outline"
          description="Track the current anchored turn."
          note="Open the outline to jump between anchored turns as you read."
        >
          <ChatBody messages={visibilityMessages} anchorRole="user" />
        </ChatShell>
        <div class="absolute top-1/2 -right-12 -translate-y-1/2">
          <TranscriptOutline />
        </div>
      </div>
    </MessageScrollerProvider>
  );
};

const ScrollStateFooter = () => {
  const { start, end } = useMessageScrollerScrollable();
  const status = () => {
    if (start() && end()) return "You can scroll both ways.";
    if (end()) return "You are at the top. You can only scroll down.";
    if (start()) return "You are at the bottom. You can only scroll up.";
    return "All messages fit in the viewport.";
  };

  return (
    <CardFooter class="justify-center border-t text-center text-sm text-neutral-500 dark:text-neutral-400">
      {status()}
    </CardFooter>
  );
};

const Scrollable = () => (
  <div class="mx-auto flex w-full max-w-sm flex-col gap-4">
    <Card class="h-140 w-full gap-0 overflow-hidden">
      <CardHeader class="gap-1 border-b">
        <CardTitle>Scroll Status</CardTitle>
        <CardDescription>
          Where the reader can scroll based on the current position.
        </CardDescription>
      </CardHeader>
      <MessageScrollerProvider defaultScrollPosition="start">
        <CardContent class="min-h-0 flex-1 overflow-hidden p-0">
          <ChatBody messages={scrollableMessages} anchorRole="user" />
        </CardContent>
        <ScrollStateFooter />
      </MessageScrollerProvider>
    </Card>
    <p class="px-0.5 text-center text-xs text-neutral-500 dark:text-neutral-400">
      Scroll the transcript to see the footer update.
    </p>
  </div>
);

const demoCode = `import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@neut/ui";

export default () => (
  <MessageScrollerProvider autoScroll>
    <MessageScroller class="h-140">
      <MessageScrollerViewport>
        <MessageScrollerContent>
          <For each={messages}>
            {(message) => (
              <MessageScrollerItem
                messageId={message.id}
                scrollAnchor={message.role === "user"}
              >
                {/* Message row */}
              </MessageScrollerItem>
            )}
          </For>
        </MessageScrollerContent>
      </MessageScrollerViewport>
      <MessageScrollerButton />
    </MessageScroller>
  </MessageScrollerProvider>
);`;

const anchoringCode = `<MessageScrollerProvider>
  <MessageScroller>
    <MessageScrollerViewport>
      <MessageScrollerContent>
        <For each={messages}>
          {(message) => (
            <MessageScrollerItem
              messageId={message.id}
              scrollAnchor={message.role === anchorRole()}
            >
              {/* Message row */}
            </MessageScrollerItem>
          )}
        </For>
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
</MessageScrollerProvider>`;

const groupChatCode = `<MessageScrollerProvider>
  <MessageScroller>
    <MessageScrollerViewport>
      <MessageScrollerContent>
        <For each={items}>
          {(item) =>
            item.type === "message" ? (
              <MessageScrollerItem messageId={item.id}>
                <Message>
                  <MessageContent>
                    <MessageHeader>{item.sender}</MessageHeader>
                    <Bubble>
                      <BubbleContent>{item.text}</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ) : (
              <MessageScrollerItem messageId={item.id} scrollAnchor>
                <Marker variant="separator">
                  <MarkerContent>{item.text}</MarkerContent>
                </Marker>
              </MessageScrollerItem>
            )
          }
        </For>
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
</MessageScrollerProvider>`;

const previousContextCode = `<MessageScrollerProvider
  scrollMargin={24}
  scrollPreviousItemPeek={peek()}
>
  <MessageScroller class="h-140">
    <MessageScrollerViewport>
      <MessageScrollerContent>
        {/* transcript */}
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
</MessageScrollerProvider>`;

const streamingCode = `<MessageScrollerProvider autoScroll>
  <MessageScroller class="h-140">
    <MessageScrollerViewport>
      <MessageScrollerContent>
        <For each={messages()}>
          {(message) => (
            <MessageScrollerItem
              messageId={message.id}
              scrollAnchor={message.role === "user"}
            >
              <Message>
                <MessageContent>
                  <Bubble>
                    <BubbleContent>{message.text}</BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
          )}
        </For>
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
</MessageScrollerProvider>`;

const openingCode = `<MessageScrollerProvider defaultScrollPosition={position()}>
  <MessageScroller class="h-140">
    <MessageScrollerViewport>
      <MessageScrollerContent>
        {/* transcript */}
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
</MessageScrollerProvider>`;

const loadHistoryCode = `<MessageScrollerProvider>
  <MessageScroller class="h-140">
    <MessageScrollerViewport preserveScrollOnPrepend>
      <MessageScrollerContent>
        <For each={visibleMessages()}>
          {(message) => (
            <MessageScrollerItem messageId={message.id}>
              {/* message row */}
            </MessageScrollerItem>
          )}
        </For>
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
</MessageScrollerProvider>`;

const animationCode = `const MotionMessageScrollerItem = (props) => (
  <MessageScrollerItem
    {...props}
    class="ms-pop"
  />
);

<MessageScrollerProvider autoScroll>
  <MessageScroller class="h-140">
    <MessageScrollerViewport>
      <MessageScrollerContent>
        <For each={messages()}>
          {(message) => (
            <MotionMessageScrollerItem
              messageId={message.id}
              scrollAnchor={message.role === "user"}
            >
              {/* message row */}
            </MotionMessageScrollerItem>
          )}
        </For>
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
</MessageScrollerProvider>`;

const commandsCode = `const { scrollToMessage } = useMessageScroller();

<DropdownMenu>
  <DropdownMenuTrigger>Jump to...</DropdownMenuTrigger>
  <DropdownMenuContent>
    <For each={userMessages()}>
      {(message) => (
        <DropdownMenuItem
          onClick={() =>
            scrollToMessage(message.id, {
              align: "start",
              behavior: "smooth",
            })
          }
        >
          {message.text}
        </DropdownMenuItem>
      )}
    </For>
  </DropdownMenuContent>
</DropdownMenu>`;

const visibilityCode = `const { scrollToMessage } = useMessageScroller();
const { currentAnchorId } = useMessageScrollerVisibility();

<For each={userMessages()}>
  {(message) => (
    <button
      type="button"
      aria-current={currentAnchorId() === message.id ? "location" : undefined}
      onClick={() => scrollToMessage(message.id, { align: "start" })}
    >
      {message.text}
    </button>
  )}
</For>`;

const scrollableCode = `const { start, end } = useMessageScrollerScrollable();

<MessageScrollerProvider defaultScrollPosition="start">
  <MessageScroller>
    <MessageScrollerViewport>
      <MessageScrollerContent>
        {/* transcript */}
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
  <CardFooter>
    {start() && end()
      ? "You can scroll both ways."
      : end()
        ? "You are at the top."
        : start()
          ? "You are at the bottom."
          : "All messages fit."}
  </CardFooter>
</MessageScrollerProvider>`;

export default () => {
  return (
    <ComponentPage
      title="MessageScroller"
      description="A chat scroll container that anchors turns, opens saved transcripts, follows streamed responses, loads history without jumping, and jumps to any message."
    >
      <Example
        name="Demo"
        description="A chat transcript that follows streamed output while the reader is at the live edge."
        code={demoCode}
      >
        <Demo />
      </Example>

      <Example
        name="Anchoring turns"
        description="Choose whether user or assistant messages settle near the top."
        code={anchoringCode}
      >
        <Anchoring />
      </Example>

      <Example
        name="Group chat"
        description="Anchor a marker or a message in a multi-participant conversation."
        code={groupChatCode}
      >
        <GroupChat />
      </Example>

      <Example
        name="Keeping context visible"
        description="Keep part of the previous turn visible above the new anchor."
        code={previousContextCode}
      >
        <PreviousContext />
      </Example>

      <Example
        name="Streaming"
        description="Follow streamed replies while the reader is at the live edge."
        code={streamingCode}
      >
        <Streaming />
      </Example>

      <Example
        name="Opening position"
        description="Choose where a saved transcript opens: start, end or last anchor."
        code={openingCode}
      >
        <OpeningPosition />
      </Example>

      <Example
        name="Load history"
        description="Prepend earlier messages without moving the reader."
        code={loadHistoryCode}
      >
        <LoadHistory />
      </Example>

      <Example
        name="Animating new messages"
        description="Animate transform and opacity without fighting scroll measurement."
        code={animationCode}
      >
        <Animation />
      </Example>

      <Example
        name="Jumping to messages"
        description="Drive the transcript from outside the message list."
        code={commandsCode}
      >
        <Commands />
      </Example>

      <Example
        name="Tracking the reader's position"
        description="Highlight the current anchored turn from an outline."
        code={visibilityCode}
      >
        <Visibility />
      </Example>

      <Example
        name="Reading scroll state"
        description="Read which edges the viewport can still scroll toward."
        code={scrollableCode}
      >
        <Scrollable />
      </Example>
    </ComponentPage>
  );
};

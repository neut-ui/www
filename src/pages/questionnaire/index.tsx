import { ComponentPage, Example } from "../../components/component-page";
import { For, Show, createSignal } from "solid-js";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@neut/ui";

const readAnswers = (
  event: SubmitEvent,
  onValues: (data: FormData) => void,
) => {
  event.preventDefault();
  onValues(new FormData(event.currentTarget as HTMLFormElement));
};

const demoItems = [
  {
    choices: [
      {
        description: "Show what the agent ran and what came back.",
        label: "Tool call timeline",
        value: "tool-calls",
      },
      {
        description: "Ask before sensitive or destructive actions.",
        label: "Approval checkpoints",
        value: "approvals",
      },
      {
        description: "Make delegated work and results easier to follow.",
        label: "Sub-agent handoffs",
        value: "handoffs",
      },
    ],
    description: "Choose a direction or describe another task.",
    input: {
      label: "Another agent feature",
      placeholder: "Describe another feature...",
    },
    name: "direction",
    required: true,
    title: "What should the agent build next?",
  },
  {
    choices: [
      { label: "Progress", value: "progress" },
      { label: "Decisions", value: "decisions" },
      { label: "Risks", value: "risks" },
      { label: "Next step", value: "next-step" },
    ],
    description: "Select all that apply, or skip this question.",
    multiple: true,
    name: "signals",
    required: false,
    title: "What should every progress update include?",
  },
] as const;

const demoCode = `import { For, Show, createSignal } from "solid-js";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@neut/ui";

const items = [
  {
    choices: [
      { label: "Tool call timeline", value: "tool-calls" },
      { label: "Approval checkpoints", value: "approvals" },
      { label: "Sub-agent handoffs", value: "handoffs" },
    ],
    name: "direction",
    required: true,
    title: "What should the agent build next?",
  },
  {
    choices: [
      { label: "Progress", value: "progress" },
      { label: "Decisions", value: "decisions" },
      { label: "Risks", value: "risks" },
    ],
    multiple: true,
    name: "signals",
    required: false,
    title: "What should every progress update include?",
  },
] as const;

export default () => {
  const [result, setResult] = createSignal<string>();

  return (
    <Questionnaire
      defaultItem="direction"
      items={items}
      shortcuts="letters"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget as HTMLFormElement);
        setResult(
          String(data.get("direction") ?? "None") +
            " · " +
            (data.getAll("signals").join(", ") || "None"),
        );
      }}
    >
      <QuestionnaireProgress />
      <For each={items}>
        {(question) => (
          <QuestionnaireItem
            name={question.name}
            required={question.required}
            multiple={"multiple" in question && question.multiple}
          >
            <QuestionnaireTitle>{question.title}</QuestionnaireTitle>
            <QuestionnaireChoices>
              <For each={question.choices}>
                {(choice) => (
                  <QuestionnaireChoice value={choice.value}>
                    {choice.label}
                  </QuestionnaireChoice>
                )}
              </For>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </QuestionnaireItem>
        )}
      </For>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Save plan</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
};`;

const multipleCode = `import { For, createSignal } from "solid-js";
import {
  Questionnaire,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@neut/ui";

export default () => {
  const [result, setResult] = createSignal<string>();

  return (
    <Questionnaire
      items={[{ name: "context", required: true }]}
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget as HTMLFormElement);
        setResult(data.getAll("context").join(", ") || "None");
      }}
    >
      <QuestionnaireProgress />
      <QuestionnaireItem name="context" multiple required>
        <QuestionnaireTitle>What context should the agent inspect?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Select every source that may affect the implementation.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="source">Relevant source files</QuestionnaireChoice>
          <QuestionnaireChoice value="tests">Existing tests</QuestionnaireChoice>
          <QuestionnaireChoice value="docs">Architecture docs</QuestionnaireChoice>
          <QuestionnaireChoice value="history">Recent history</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
    </Questionnaire>
  );
};`;

const freeformCode = `import { createSignal } from "solid-js";
import {
  Questionnaire,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@neut/ui";

export default () => {
  const [result, setResult] = createSignal<string>();

  return (
    <Questionnaire
      items={[{ name: "priority", required: true }]}
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget as HTMLFormElement);
        setResult(String(data.get("priority") ?? "None"));
      }}
    >
      <QuestionnaireItem name="priority" required>
        <QuestionnaireTitle>What should we prioritize next?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Choose an option or describe your own priority.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="performance">Performance</QuestionnaireChoice>
          <QuestionnaireChoice value="accessibility">Accessibility</QuestionnaireChoice>
          <QuestionnaireInput placeholder="Or describe another priority..." />
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
    </Questionnaire>
  );
};`;

const shortcutsCode = `import {
  Questionnaire,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireItem,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@neut/ui";

export default () => (
  <Questionnaire
    items={[{ name: "framework", required: true }]}
    shortcuts="letters"
  >
    <QuestionnaireProgress />
    <QuestionnaireItem name="framework" required>
      <QuestionnaireTitle>Which framework should we use?</QuestionnaireTitle>
      <QuestionnaireChoices>
        <QuestionnaireChoice value="solid">Solid</QuestionnaireChoice>
        <QuestionnaireChoice value="react">React</QuestionnaireChoice>
        <QuestionnaireChoice value="vue">Vue</QuestionnaireChoice>
      </QuestionnaireChoices>
    </QuestionnaireItem>
    <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
  </Questionnaire>
);`;

const skipCode = `import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnaireSkip,
  QuestionnaireTitle,
} from "@neut/ui";

export default () => (
  <Questionnaire items={[{ name: "feedback", required: false }]}>
    <QuestionnaireItem name="feedback">
      <QuestionnaireTitle>How was your experience?</QuestionnaireTitle>
      <QuestionnaireChoices>
        <QuestionnaireChoice value="great">Great</QuestionnaireChoice>
        <QuestionnaireChoice value="ok">Okay</QuestionnaireChoice>
        <QuestionnaireChoice value="bad">Not great</QuestionnaireChoice>
      </QuestionnaireChoices>
    </QuestionnaireItem>
    <QuestionnaireActions>
      <QuestionnaireSkip>Skip this question</QuestionnaireSkip>
      <QuestionnaireNext />
    </QuestionnaireActions>
  </Questionnaire>
);`;

const validationCode = `import {
  Questionnaire,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@neut/ui";

export default () => (
  <Questionnaire items={[{ name: "email", required: true }]}>
    <QuestionnaireItem name="email" required invalid>
      <QuestionnaireTitle>What is your email?</QuestionnaireTitle>
      <QuestionnaireDescription>
        We need a valid email to send the report.
      </QuestionnaireDescription>
      <QuestionnaireChoices>
        <QuestionnaireInput type="email" placeholder="you@example.com" />
      </QuestionnaireChoices>
      <QuestionnaireError>Please enter a valid email address.</QuestionnaireError>
    </QuestionnaireItem>
    <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
  </Questionnaire>
);`;

const controlledCode = `import { createSignal } from "solid-js";
import {
  Questionnaire,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireItem,
  QuestionnaireTitle,
} from "@neut/ui";

export default () => {
  const [item, setItem] = createSignal("first");

  return (
    <div class="flex w-full max-w-md flex-col gap-3">
      <Questionnaire
        item={item()}
        onItemChange={setItem}
        items={[{ name: "first" }, { name: "second" }]}
      >
        <QuestionnaireItem name="first">
          <QuestionnaireTitle>First question</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="a">Option A</QuestionnaireChoice>
            <QuestionnaireChoice value="b">Option B</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireItem name="second">
          <QuestionnaireTitle>Second question</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="c">Option C</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
      </Questionnaire>
      <p class="text-sm text-neutral-500">Active item: {item()}</p>
    </div>
  );
};`;

const progressCode = `import {
  Questionnaire,
  QuestionnaireItem,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@neut/ui";

export default () => (
  <Questionnaire items={[{ name: "name" }]}>
    <QuestionnaireProgress>
      {(state) => (
        <div class="mb-4 flex items-center justify-between text-sm">
          <span>Step {state.current} of {state.total}</span>
          <span>{Math.round((state.current / state.total) * 100)}%</span>
        </div>
      )}
    </QuestionnaireProgress>
    <QuestionnaireItem name="name">
      <QuestionnaireTitle>What is your name?</QuestionnaireTitle>
    </QuestionnaireItem>
    <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
  </Questionnaire>
);`;

export default () => {
  const [demoResult, setDemoResult] = createSignal<string>();
  const [multipleResult, setMultipleResult] = createSignal<string>();
  const [freeformResult, setFreeformResult] = createSignal<string>();
  const [controlledItem, setControlledItem] = createSignal("first");

  return (
    <ComponentPage
      title="Questionnaire"
      description="A multi-step questionnaire with single choice, multiple choice and freeform answers."
    >
      <Example
        name="Demo"
        description="A multi-step flow with choice and multiple-choice items."
        code={demoCode}
      >
        <div class="w-full max-w-md">
          <Questionnaire
            defaultItem="direction"
            items={demoItems}
            shortcuts="letters"
            onSubmit={(event) =>
              readAnswers(event, (data) =>
                setDemoResult(
                  "Direction: " +
                    (data.get("direction") ?? "None") +
                    " · Signals: " +
                    (data.getAll("signals").join(", ") || "None"),
                ),
              )
            }
          >
            <QuestionnaireProgress />
            <For each={demoItems}>
              {(question) => (
                <QuestionnaireItem
                  name={question.name}
                  required={question.required}
                  multiple={"multiple" in question && question.multiple}
                >
                  <QuestionnaireTitle>{question.title}</QuestionnaireTitle>
                  <QuestionnaireDescription>
                    {question.description}
                  </QuestionnaireDescription>
                  <QuestionnaireChoices>
                    <For each={question.choices}>
                      {(choice) => (
                        <QuestionnaireChoice value={choice.value}>
                          <span class="font-medium">{choice.label}</span>
                          {"description" in choice ? (
                            <span class="text-neutral-500 dark:text-neutral-400">
                              {choice.description}
                            </span>
                          ) : null}
                        </QuestionnaireChoice>
                      )}
                    </For>
                    {"input" in question ? (
                      <QuestionnaireInput
                        aria-label={question.input.label}
                        placeholder={question.input.placeholder}
                      />
                    ) : null}
                  </QuestionnaireChoices>
                  <QuestionnaireError />
                </QuestionnaireItem>
              )}
            </For>
            <QuestionnaireActions>
              <QuestionnairePrevious />
              <QuestionnaireSkip />
              <QuestionnaireNext>Next</QuestionnaireNext>
              <QuestionnaireSubmit>Save plan</QuestionnaireSubmit>
            </QuestionnaireActions>
          </Questionnaire>
          <Show when={demoResult()}>
            <p
              class="mt-3 text-xs text-neutral-500 dark:text-neutral-400"
              role="status"
            >
              {demoResult()}
            </p>
          </Show>
        </div>
      </Example>

      <Example
        name="Multiple selection"
        description="Use multiple for an item that accepts more than one answer."
        code={multipleCode}
      >
        <div class="w-full max-w-md">
          <Questionnaire
            items={[{ name: "context", required: true }]}
            onSubmit={(event) =>
              readAnswers(event, (data) =>
                setMultipleResult(
                  "Context: " + (data.getAll("context").join(", ") || "None"),
                ),
              )
            }
          >
            <QuestionnaireProgress />
            <QuestionnaireItem name="context" multiple required>
              <QuestionnaireTitle>
                What context should the agent inspect?
              </QuestionnaireTitle>
              <QuestionnaireDescription>
                Select every source that may affect the implementation.
              </QuestionnaireDescription>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="source">
                  Relevant source files
                </QuestionnaireChoice>
                <QuestionnaireChoice value="tests">
                  Existing tests
                </QuestionnaireChoice>
                <QuestionnaireChoice value="docs">
                  Architecture docs
                </QuestionnaireChoice>
                <QuestionnaireChoice value="history">
                  Recent history
                </QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError />
            </QuestionnaireItem>
            <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
          </Questionnaire>
          <Show when={multipleResult()}>
            <p
              class="mt-3 text-xs text-neutral-500 dark:text-neutral-400"
              role="status"
            >
              {multipleResult()}
            </p>
          </Show>
        </div>
      </Example>

      <Example
        name="Freeform answer"
        description="Compose an input with fixed choices."
        code={freeformCode}
      >
        <div class="w-full max-w-md">
          <Questionnaire
            items={[{ name: "priority", required: true }]}
            onSubmit={(event) =>
              readAnswers(event, (data) =>
                setFreeformResult(
                  "Priority: " + (data.get("priority") ?? "None"),
                ),
              )
            }
          >
            <QuestionnaireItem name="priority" required>
              <QuestionnaireTitle>
                What should we prioritize next?
              </QuestionnaireTitle>
              <QuestionnaireDescription>
                Choose an option or describe your own priority.
              </QuestionnaireDescription>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="performance">
                  Performance
                </QuestionnaireChoice>
                <QuestionnaireChoice value="accessibility">
                  Accessibility
                </QuestionnaireChoice>
                <QuestionnaireInput placeholder="Or describe another priority..." />
              </QuestionnaireChoices>
              <QuestionnaireError />
            </QuestionnaireItem>
            <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
          </Questionnaire>
          <Show when={freeformResult()}>
            <p
              class="mt-3 text-xs text-neutral-500 dark:text-neutral-400"
              role="status"
            >
              {freeformResult()}
            </p>
          </Show>
        </div>
      </Example>

      <Example
        name="Shortcuts"
        description="Assign a letter key to each answer."
        code={shortcutsCode}
      >
        <Questionnaire
          items={[{ name: "framework", required: true }]}
          shortcuts="letters"
        >
          <QuestionnaireProgress />
          <QuestionnaireItem name="framework" required>
            <QuestionnaireTitle>
              Which framework should we use?
            </QuestionnaireTitle>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="solid">Solid</QuestionnaireChoice>
              <QuestionnaireChoice value="react">React</QuestionnaireChoice>
              <QuestionnaireChoice value="vue">Vue</QuestionnaireChoice>
            </QuestionnaireChoices>
          </QuestionnaireItem>
          <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
        </Questionnaire>
      </Example>
      <Example
        name="Explicit skip"
        description="Add a skip action for optional items."
        code={skipCode}
      >
        <Questionnaire items={[{ name: "feedback", required: false }]}>
          <QuestionnaireItem name="feedback">
            <QuestionnaireTitle>How was your experience?</QuestionnaireTitle>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="great">Great</QuestionnaireChoice>
              <QuestionnaireChoice value="ok">Okay</QuestionnaireChoice>
              <QuestionnaireChoice value="bad">Not great</QuestionnaireChoice>
            </QuestionnaireChoices>
          </QuestionnaireItem>
          <QuestionnaireActions>
            <QuestionnaireSkip>Skip this question</QuestionnaireSkip>
            <QuestionnaireNext />
          </QuestionnaireActions>
        </Questionnaire>
      </Example>

      <Example
        name="Validation"
        description="Mark an item invalid and present its error message."
        code={validationCode}
      >
        <Questionnaire items={[{ name: "email", required: true }]}>
          <QuestionnaireItem name="email" required invalid>
            <QuestionnaireTitle>What is your email?</QuestionnaireTitle>
            <QuestionnaireDescription>
              We need a valid email to send the report.
            </QuestionnaireDescription>
            <QuestionnaireChoices>
              <QuestionnaireInput type="email" placeholder="you@example.com" />
            </QuestionnaireChoices>
            <QuestionnaireError>
              Please enter a valid email address.
            </QuestionnaireError>
          </QuestionnaireItem>
          <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
        </Questionnaire>
      </Example>

      <Example
        name="Controlled"
        description="Control the active item from host state."
        code={controlledCode}
      >
        <div class="flex w-full max-w-md flex-col gap-3">
          <Questionnaire
            item={controlledItem()}
            onItemChange={setControlledItem}
            items={[{ name: "first" }, { name: "second" }]}
          >
            <QuestionnaireItem name="first">
              <QuestionnaireTitle>First question</QuestionnaireTitle>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="a">Option A</QuestionnaireChoice>
                <QuestionnaireChoice value="b">Option B</QuestionnaireChoice>
              </QuestionnaireChoices>
            </QuestionnaireItem>
            <QuestionnaireItem name="second">
              <QuestionnaireTitle>Second question</QuestionnaireTitle>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="c">Option C</QuestionnaireChoice>
              </QuestionnaireChoices>
            </QuestionnaireItem>
          </Questionnaire>
          <p class="text-sm text-neutral-500">
            Active item: {controlledItem()}
          </p>
        </div>
      </Example>

      <Example
        name="Custom progress"
        description="Use the progress render state to build a custom indicator."
        code={progressCode}
      >
        <Questionnaire items={[{ name: "name" }]}>
          <QuestionnaireProgress>
            {(state) => (
              <div class="mb-4 flex items-center justify-between text-sm">
                <span>
                  Step {state.current} of {state.total}
                </span>
                <span>{Math.round((state.current / state.total) * 100)}%</span>
              </div>
            )}
          </QuestionnaireProgress>
          <QuestionnaireItem name="name">
            <QuestionnaireTitle>What is your name?</QuestionnaireTitle>
          </QuestionnaireItem>
          <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
        </Questionnaire>
      </Example>
    </ComponentPage>
  );
};

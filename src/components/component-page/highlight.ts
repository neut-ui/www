export type TokenType =
  | "keyword"
  | "string"
  | "number"
  | "comment"
  | "type"
  | "jsx"
  | "attr"
  | "punct"
  | "plain";

export interface Token {
  type: TokenType;
  text: string;
}

const KEYWORDS = new Set([
  "import",
  "export",
  "from",
  "default",
  "const",
  "let",
  "var",
  "function",
  "return",
  "new",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "break",
  "continue",
  "class",
  "interface",
  "type",
  "enum",
  "extends",
  "implements",
  "as",
  "in",
  "of",
  "typeof",
  "instanceof",
  "void",
  "null",
  "undefined",
  "true",
  "false",
  "this",
  "super",
  "async",
  "await",
  "yield",
  "delete",
  "throw",
  "try",
  "catch",
  "finally",
  // TypeScript primitive types
  "string",
  "number",
  "boolean",
  "any",
  "unknown",
  "never",
  "object",
  "symbol",
  "bigint",
]);

const IDENT_START = /[A-Za-z_$]/;
const IDENT_PART = /[A-Za-z0-9_$]/;
const DIGIT = /[0-9]/;
const TWO_CHAR_OPERATORS = [
  "=>",
  "==",
  "===",
  "!=",
  "!==",
  "<=",
  ">=",
  "&&",
  "||",
  "++",
  "--",
  "+=",
  "-=",
  "*=",
  "/=",
  "**",
  "??",
  "?.",
  "...",
];

/**
 * A small, dependency-free tokenizer for TSX/TypeScript source snippets.
 * It is intentionally not a full parser — it is tuned for the short,
 * well-formed example snippets shown in this docs site.
 */
export function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  const n = code.length;

  const push = (type: TokenType, start: number, end: number) => {
    if (end > start) tokens.push({ type, text: code.slice(start, end) });
  };

  const scanRange = (start: number, end: number) => {
    let i = start;

    while (i < end) {
      const c = code[i];
      const next = code[i + 1];

      // whitespace
      if (/\s/.test(c)) {
        let j = i;
        while (j < end && /\s/.test(code[j])) j++;
        push("plain", i, j);
        i = j;
        continue;
      }

      // line comment
      if (c === "/" && next === "/") {
        let j = i;
        while (j < end && code[j] !== "\n") j++;
        push("comment", i, j);
        i = j;
        continue;
      }

      // block comment
      if (c === "/" && next === "*") {
        const close = code.indexOf("*/", i + 2);
        const j = close === -1 || close + 2 > end ? end : close + 2;
        push("comment", i, j);
        i = j;
        continue;
      }

      // quoted string
      if (c === '"' || c === "'") {
        const quote = c;
        let j = i + 1;
        while (j < end) {
          if (code[j] === "\\") {
            j += 2;
            continue;
          }
          if (code[j] === quote) {
            j++;
            break;
          }
          j++;
        }
        push("string", i, Math.min(j, end));
        i = j;
        continue;
      }

      // template literal
      if (c === "`") {
        push("string", i, i + 1);
        i += 1;
        while (i < end) {
          const ch = code[i];
          if (ch === "`") {
            push("string", i, i + 1);
            i++;
            break;
          }
          if (ch === "\\") {
            push("string", i, Math.min(i + 2, end));
            i += 2;
            continue;
          }
          if (ch === "$" && code[i + 1] === "{") {
            push("punct", i, i + 2);
            i += 2;
            let depth = 1;
            let k = i;
            while (k < end && depth > 0) {
              const e = code[k];
              if (e === '"' || e === "'") {
                k++;
                while (k < end) {
                  if (code[k] === "\\") {
                    k += 2;
                    continue;
                  }
                  if (code[k] === e) {
                    k++;
                    break;
                  }
                  k++;
                }
                continue;
              }
              if (e === "`") break;
              if (e === "{") depth++;
              else if (e === "}") {
                depth--;
                if (depth === 0) break;
              }
              k++;
            }
            scanRange(i, k);
            if (code[k] === "}") {
              push("punct", k, k + 1);
              k++;
            }
            i = k;
            continue;
          }
          let m = i;
          while (
            m < end &&
            code[m] !== "`" &&
            code[m] !== "\\" &&
            !(code[m] === "$" && code[m + 1] === "{")
          ) {
            m++;
          }
          push("string", i, m);
          i = m;
        }
        continue;
      }

      // JSX tag (heuristic: "<" followed by a letter, "/" or ">" and not
      // immediately preceded by an identifier — the latter usually means a
      // generic like createSignal<Date>()).
      const prev = i > 0 ? code[i - 1] : "";
      const prevLooksGeneric = /[A-Za-z0-9_$)\]]/.test(prev);
      if (
        c === "<" &&
        (IDENT_START.test(next ?? "") || next === "/" || next === ">") &&
        !prevLooksGeneric
      ) {
        i = scanJsx(i, end);
        continue;
      }

      // number
      if (DIGIT.test(c) || (c === "." && DIGIT.test(next ?? ""))) {
        let j = i;
        while (j < end && /[0-9a-fA-F_.]/.test(code[j])) j++;
        push("number", i, j);
        i = j;
        continue;
      }

      // identifier / keyword / type name
      if (IDENT_START.test(c)) {
        let j = i;
        while (j < end && IDENT_PART.test(code[j])) j++;
        const word = code.slice(i, j);
        if (KEYWORDS.has(word)) push("keyword", i, j);
        else if (/^[A-Z]/.test(word)) push("type", i, j);
        else push("plain", i, j);
        i = j;
        continue;
      }

      // multi-character operator
      const two = code.slice(i, i + 2);
      if (TWO_CHAR_OPERATORS.includes(two)) {
        push("punct", i, i + 2);
        i += 2;
        continue;
      }

      // single character punctuation
      push("punct", i, i + 1);
      i += 1;
    }
  };

  const scanJsx = (start: number, end: number): number => {
    let i = start;

    // closing tag </Name ...>
    if (code[i + 1] === "/") {
      push("jsx", i, i + 2);
      i += 2;
      let j = i;
      while (j < end && IDENT_PART.test(code[j])) j++;
      if (j > i) {
        push("type", i, j);
        i = j;
      }
      while (i < end && code[i] !== ">") i++;
      if (code[i] === ">") {
        push("jsx", i, i + 1);
        i++;
      }
      return i;
    }

    // fragment <> (and a stray </> close is handled above)
    if (code[i + 1] === ">") {
      push("jsx", i, i + 2);
      return i + 2;
    }

    // opening tag <Name ...>
    push("jsx", i, i + 1);
    i += 1;
    let j = i;
    while (j < end && IDENT_PART.test(code[j])) j++;
    if (j > i) {
      push("type", i, j);
      i = j;
    }

    // attributes until ">" or "/>"
    while (i < end) {
      let w = i;
      while (w < end && /\s/.test(code[w])) w++;
      if (w > i) {
        push("plain", i, w);
        i = w;
      }
      if (i >= end) break;

      const ch = code[i];
      if (ch === ">") {
        push("jsx", i, i + 1);
        i++;
        break;
      }
      if (ch === "/" && code[i + 1] === ">") {
        push("jsx", i, i + 2);
        i += 2;
        break;
      }
      if (ch === "{") {
        let depth = 1;
        let k = i + 1;
        while (k < end && depth > 0) {
          const e = code[k];
          if (e === '"' || e === "'") {
            k++;
            while (k < end) {
              if (code[k] === "\\") {
                k += 2;
                continue;
              }
              if (code[k] === e) {
                k++;
                break;
              }
              k++;
            }
            continue;
          }
          if (e === "{") depth++;
          else if (e === "}") {
            depth--;
            if (depth === 0) break;
          }
          k++;
        }
        push("punct", i, i + 1);
        scanRange(i + 1, k);
        if (code[k] === "}") {
          push("punct", k, k + 1);
          k++;
        }
        i = k;
        continue;
      }
      if (ch === "=") {
        push("punct", i, i + 1);
        i++;
        continue;
      }
      if (ch === '"' || ch === "'") {
        const quote = ch;
        let k = i + 1;
        while (k < end) {
          if (code[k] === "\\") {
            k += 2;
            continue;
          }
          if (code[k] === quote) {
            k++;
            break;
          }
          k++;
        }
        push("string", i, Math.min(k, end));
        i = k;
        continue;
      }
      if (IDENT_START.test(ch)) {
        let a = i;
        while (a < end && (IDENT_PART.test(code[a]) || code[a] === "-" || code[a] === ":")) {
          a++;
        }
        push("attr", i, a);
        i = a;
        continue;
      }

      // fallback, never get stuck
      push("plain", i, i + 1);
      i += 1;
    }

    return i;
  };

  scanRange(0, n);
  return tokens;
}

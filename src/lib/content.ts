// Content blocks shared by the service and package detail pages (rendered by ContentBlocks.tsx).

export type Topic = { title: string; text?: string };

export type Block =
  | { type: "text"; title?: string; paragraphs: string[] }
  | { type: "tests"; title: string; tests: string[]; note?: string }
  | { type: "topics"; title: string; numbered?: boolean; items: Topic[] }
  | { type: "facts"; title: string; items: { label: string; value: string }[] }
  | { type: "checklist"; title: string; items: string[]; text?: string }
  | { type: "quote"; text: string };

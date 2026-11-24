// One Line of Earned Pride — make.fun entry.
// Writes one line of text to /output/entry.txt: a quiet, earned moment of
// pride for someone in a scene — a small person doing something hard, a long
// effort finally landing.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "He spent three years rebuilding the boat his father sank. When it finally floated, he didn't cheer. He just sat on the dock, watching it hold water.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

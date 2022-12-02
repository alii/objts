# objts

Typesafe object utility library for TypeScript. Made for use with validation libraries such as Zod.

## Installation

```bash
npm install objts
```

## Usage

#### `keys`

```typescript
import { keys } from "objts";

// Any validation library that matches
// the ExpectParser<T> type
import { z } from "zod";

const schema = z.object({
	name: z.string(),
	age: z.number(),
});

const myKeys = keys(schema, {
	name: "John",
	age: 20,
});

// myKeys is now typed as:
// ('name' | 'age')[]
```

#### `assign`

Assign is a typesafe wrapper for `Object.assign`. It takes a partial object and a partial object and returns a new object with the partial object merged into it. It makes sure that both values will produce the schema when merged.

```typescript
import { assign } from "objts";

const schema = z.object({
	name: z.string(),
	age: z.number(),
});

const myObj = {
	name: "John",
	age: 20,
};

// This will error if you try to assign
// a type to something that doesn't match the schema.
// It will also error if you don't update the input type
// if it differs from the schema
const myAssignedObj = assign(schema, myObj, {
	age: 21,
});
```

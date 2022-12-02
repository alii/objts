import type { ExpectParser, Merge, RecordExpectParser, ToString, KeysArray } from "./types";

export function assign<Out, In extends {}, Update extends {}>(
	_expect: ExpectParser<Out>,
	input: In,
	update: Merge<In, Update> extends Out
		? Out extends Merge<In, Update>
			? Update
			: Update & Out
		: Update & Out
): Merge<In, Update> {
	return Object.assign(input, update) as Merge<In, Update>;
}

export function keys<Out extends object>(
	expect: RecordExpectParser<Out>,
	obj: Out
): KeysArray<Out> {
	return Object.keys(obj).filter(
		(key): key is ToString<Exclude<keyof Out, symbol>> => key in expect.shape
	);
}

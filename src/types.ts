export type ExpectParser<T> = {
	parse(value: unknown): T;
};

export type RecordExpectParser<T> = ExpectParser<T> & {
	shape: {
		[Key in keyof T]: ExpectParser<T[Key]>;
	};
};

export type Merge<In, Update> = Omit<In, keyof Update> & Update;
export type ToString<N extends string | number> = `${N}`;

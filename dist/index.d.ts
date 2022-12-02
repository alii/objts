type ExpectParser<T> = {
    parse(value: unknown): T;
};
type RecordExpectParser<T> = ExpectParser<T> & {
    shape: {
        [Key in keyof T]: ExpectParser<T[Key]>;
    };
};
type Merge<In, Update> = Omit<In, keyof Update> & Update;
type ToString<N extends string | number> = `${N}`;

type types_ExpectParser<T> = ExpectParser<T>;
type types_RecordExpectParser<T> = RecordExpectParser<T>;
type types_Merge<In, Update> = Merge<In, Update>;
type types_ToString<N extends string | number> = ToString<N>;
declare namespace types {
  export {
    types_ExpectParser as ExpectParser,
    types_RecordExpectParser as RecordExpectParser,
    types_Merge as Merge,
    types_ToString as ToString,
  };
}

declare function assign<Out, In extends {}, Update extends {}>(_expect: ExpectParser<Out>, input: In, update: Merge<In, Update> extends Out ? Out extends Merge<In, Update> ? Update : Update & Out : Update & Out): Merge<In, Update>;
declare function keys<Out extends object>(expect: RecordExpectParser<Out>, obj: Out): Array<ToString<Exclude<keyof Out, symbol>>>;

export { assign, keys, types };

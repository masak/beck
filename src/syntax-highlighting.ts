module Highlighting {
    export enum Token {
        Plain, Element, Attribute, String, Comment, Preprocessor, Error
    }

    export function parse(input: string) {
        return [Token.Plain];
    }
}

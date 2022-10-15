import { PromiseMatcher, PromiseResultShape } from "./types";
export declare class PromiseIdle<T, E> implements PromiseResultShape<T, E> {
    isIdle: boolean;
    isLoading: boolean;
    isResolved: boolean;
    isRejected: boolean;
    match: <U>(matcher: PromiseMatcher<T, E, U>) => U;
    map: <U>() => PromiseResultShape<U, E>;
    flatMap: <U>() => PromiseResultShape<U, E>;
    mapErr: <U>() => PromiseResultShape<T, U>;
    get: () => T;
    getOr: (orValue: T) => T;
    onResolved: (_: (value: T) => unknown) => this;
    onRejected: (_: (err: E) => unknown) => this;
    onLoading: (_: () => unknown) => this;
    onIdle: (fn: () => unknown) => this;
}

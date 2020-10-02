import Decimal from 'decimal.js';
export declare const DEC_PRECISION = 18;
declare const _Dec: typeof Decimal;
export interface Numeric<T> {
    add(other: any): T;
    sub(other: any): T;
    mul(other: any): T;
    div(other: any): T;
    mod(other: any): T;
}
export declare namespace Numeric {
    type Input = Decimal.Value;
    type Output = Int | Dec;
    function parse(value: Input): Output;
}
/**
 * Represents decimal values serialized with 18 digits of precision. This implementation
 * is based on the `decimal.js` library, and returns Dec values for only [[Dec.add]],
 * [[Dec.sub]], [[Dec.mul]], [[Dec.div]], and [[Dec.mod]]. For other methods inherited
 * from `Decimal`, you will need to convert back to `Dec` to remain compatible for
 * submitting information that requires `Dec` format back to the blockchain.
 *
 * Example:
 *
 * ```ts
 * const dec = new Dec(1.5);
 *
 * const decimal = dec.sqrt();
 * const dec2 = new Dec(decimal);
 */
export declare class Dec extends _Dec implements Numeric<Dec> {
    constructor(arg: Numeric.Input);
    static withPrec(value: Decimal.Value, prec: number): Dec;
    toInt(): Int;
    add(other: Numeric.Input): Dec;
    sub(other: Numeric.Input): Dec;
    mul(other: Numeric.Input): Dec;
    div(other: Numeric.Input): Dec;
    mod(other: Numeric.Input): Dec;
}
declare const _Int: typeof Decimal;
/**
 * Represents Integer values. Used mainly to store integer values of [[Coin]] and [[Coins]].
 *
 * Note: Do not use to work with values greater than 9999999999999999999. This
 * implementation is based on the `decimal.js` library, and returns Int values for only
 * [[Int.add]], [[Int.sub]], [[Int.mul]], [[Int.div]], and [[Int.mod]]. For other
 * methods inherited from `Decimal`, you will need to convert back to `Int` to remain
 * compatible for submitting information that requires `Int` format back to the
 * blockchain.
 *
 * Example:
 *
 * ```ts
 * const int = new Int(1.5);
 *
 * const decimal = int.pow(3);
 * const int2 = new Int(decimal);
 */
export declare class Int extends _Int implements Numeric<Numeric.Output> {
    constructor(arg: Numeric.Input);
    toString(): string;
    toDec(): Dec;
    add(other: Numeric.Input): Numeric.Output;
    sub(other: Numeric.Input): Numeric.Output;
    mul(other: Numeric.Input): Numeric.Output;
    div(other: Numeric.Input): Numeric.Output;
    mod(other: Numeric.Input): Numeric.Output;
}
export {};

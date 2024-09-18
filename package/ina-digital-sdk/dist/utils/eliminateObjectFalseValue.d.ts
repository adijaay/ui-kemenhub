/**
 * @example
 *  ---- router.query = { status: "ALL", type: "", name: "Karen" }
 * eliminateObjectFalseValue(router.query);
 * => { status: "ALL", name: "Karen" }
 */
export default function eliminateObjectFalseValue<T = object>(query: Partial<T>): {};

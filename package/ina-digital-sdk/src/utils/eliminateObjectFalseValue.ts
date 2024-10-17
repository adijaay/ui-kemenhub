

/**
 * @example 
 *  ---- router.query = { status: "ALL", type: "", name: "Karen" }
 * eliminateObjectFalseValue(router.query);
 * => { status: "ALL", name: "Karen" }
 */

export default function eliminateObjectFalseValue<T = object>(query: Partial<T>) {
  if (!(query instanceof Object)) {
    throw new Error("query must be an object");
  }
  let data = {};
  
  Object.entries(query ?? {}).forEach(([key, value]) => (value !== "" && value !== null && value !== undefined) && (
    data = {
      ...data,
      [key]: value,
    }
  ));

  return data;
}
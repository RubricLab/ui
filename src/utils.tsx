export function getTupleFromObjectKeys<Obj extends { [key in keyof Obj]: unknown }>(obj: Obj) {
	type Keys = keyof Obj extends string ? keyof Obj : never
	return Object.keys(obj) as [Keys, ...Keys[]]
}

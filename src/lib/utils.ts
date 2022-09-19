import type { boolean } from 'fp-ts'

export const lerp = (A: number, B: number, t: number) => A + (B - A) * t

export const intersection = (
	A: XYPosition,
	B: XYPosition,
	C: XYPosition,
	D: XYPosition
): Intersection | null => {
	const tTop = (D[0] - C[0]) * (A[1] - C[1]) - (D[1] - C[1]) * (A[0] - C[0])
	const uTop = (C[1] - A[1]) * (A[0] - B[0]) - (C[0] - A[0]) * (A[1] - B[1])
	const bottom = (D[1] - C[1]) * (B[0] - A[0]) - (D[0] - C[0]) * (B[1] - A[1])

	if (bottom == 0) return null

	const t = tTop / bottom
	const u = uTop / bottom

	if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
		return {
			position: [lerp(A[0], B[0], t), lerp(A[1], B[1], t)],
			offset: t
		}
	}

	return null
}

export const polyIntersect = (poly1: Polygon, poly2: Polygon) =>
	poly1.reduce(
		(v1, point1, i1) =>
			v1 ||
			poly2.reduce(
				(v2, point2, i2) =>
					v2 ||
					intersection(point1, poly1[i1 % poly1.length], point2, poly2[i2 % poly2.length]) == null,
				false
			),
		false
	)

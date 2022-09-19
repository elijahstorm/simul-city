import { polyIntersect } from '$lib/utils'
import { cull } from '../Sensor.ts/collision'

export const polygon = (box: HitBox) => {
	const polygon: Polygon = []

	const rad = Math.hypot(box.width, box.height) / 2
	const alpha = Math.atan2(box.width, box.height)
	polygon.push([
		box.x - Math.sin(-box.angle - alpha) * rad,
		box.y - Math.cos(-box.angle - alpha) * rad
	])
	polygon.push([
		box.x - Math.sin(-box.angle + alpha) * rad,
		box.y - Math.cos(-box.angle + alpha) * rad
	])
	polygon.push([
		box.x - Math.sin(Math.PI - box.angle - alpha) * rad,
		box.y - Math.cos(Math.PI - box.angle - alpha) * rad
	])
	polygon.push([
		box.x - Math.sin(Math.PI - box.angle + alpha) * rad,
		box.y - Math.cos(Math.PI - box.angle + alpha) * rad
	])

	return { box, polygon }
}

export const collide = (borders: MapBorder) => (inputs: { box: HitBox; polygon: Polygon }) => {
	const { box, polygon } = inputs

	const poly = cull(box, borders)

	const crash = !poly.every((p) => polyIntersect(polygon, p))

	return { crash, box }
}
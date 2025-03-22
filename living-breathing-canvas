// @elle.f.l
// art.ellelm.com
// made for music <3

await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")

const t = [`living
breathing
canvas`, {
	font: "cormorant unicase",
	fontSize: "85%"
}]

osc(30, -0.2, () => a.fft[0] / 2 + 0.2)
	.hue(() => time / 2 + Math.PI / 2)
	.rotate(Math.PI / 4)
	// 	.modulate(noise(3, 20), () => a.fft[0] / 10)
	.kaleid(3)
	.rotate(Math.PI / 2)
	.brightness(() => a.fft[0] / 3)
	.blend(voronoi(30, 0.3, () => 10 - a.fft[0] * 8)
		.hue(() => time / 4)
		.scrollY(0, 0.001)
		.scale(() => a.fft[0] / 8 + 0.8), 0.5)
	.modulateScale(gradient()
		.color(0, 4, 0)
		.kaleid(1)
		.rotate(Math.PI / 2))
	.modulateScale(
		osc(Math.PI * 2, 0)
		.scrollX(-0.25)
		.rotate(Math.PI / 2)
		.brightness(-0.2)
		// 		.scrollY(() => Math.sin(time))
		// 		.scrollX(() => Math.cos(time))
		.mult(osc(Math.PI * 2, 0)
			.scrollX(-0.25)
			.brightness(-0.2)), () => a.fft[0] / -4)

	.out(o0)

src(o0)
	.repeat(3, 1, 0.5)
	// .rotate(Math.PI * -10/360)
	.out(o1)

src(o1)
	.modulateScale(
		osc(Math.PI * 4, 0)
		.scrollX(0.25)
		.rotate(Math.PI / 2)
		// 		.scrollY(() => Math.sin(time))
		// 		.scrollX(() => Math.cos(time))
		.mult(osc(Math.PI * 2, 0)
			.scrollX(-0.25)
			.brightness(-0.2)), () => a.fft[0] / -4)
	.rotate(Math.PI * -4 / 360)
	.modulateRotate(src(o3), 0.1)
	.add(text(...t)
         .scrollX(-0.25)
		// 		.repeat(1)
		.scale(() => a.fft[0] + 0.2), 1)
	.modulate(osc(3)
		.kaleid(2), 0.2)
	.blend(src(o2)
		.brightness(0.15)
		.saturate(2)
		.scale(() => 1 + Math.sin(time / 2) / 10)
		.modulateScale(gradient()
			.color(0, 1, 0)), () => a.fft[0] / 2 + 0.2)
	// 	// 	.mult(osc(Math.PI, 0.1), 1)
	.out(o2)

src(o2)
	.modulateScale(gradient()
		.color(0, () => Math.sin(time / 4) / 4 + 1, 0)
		.rotate(Math.PI)
		.rotate(() => time * Math.PI), -0.4)
	.scale(() => a.fft[0] + 1)
	.add(shape(40, 0.01, 0.5)
		.scale(() => a.fft[0] + 1)
		.modulateScale(noise(10), () => a.fft[0]), 0)
	.out(o3)

render(o3)

// gradient().color(0, 1, 0).kaleid(1).out(o1)
// render(o1)

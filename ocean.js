// @elle.f.l
// art.ellelm.com
// made for music <3

hush()

a.setSmooth(0.8)

await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")

const hearts = `hearts beat
while         the    
waves crash`

const pearls = `pearls
f  o  r
wine`

const t = [hearts, {
	font: "cormorant unicase",
	fontSize: "85%"
}]

hush()

gradient()
	.color(0, 1, 0)
	.saturate(0)
	.color(0, 0, 1)
	.saturate(1)
	.add(
		gradient()
		.color(0, 1, 1)
		.saturate(0)
		.color(() => 0.8 + a.fft[0], () => 1 + a.fft[1], () => 1.5 + a.fft[2])
		.saturate(() => 1 - a.fft[0] / 10)
		// 		.color(0, () => a.fft[6] * 1.5 + 1.5, 0)
		// 		.saturate(0.28)
		.rotate(Math.PI)
	)
	.scrollY(() => Math.sin(time / 2) / 3, 0.25)
	.modulate(voronoi(16, 0.3, 12)
		.modulateScale(noise(), 0.25)
	)
	// 	.hue(() => Math.sin(time / 10) / 2 + 0.5)
	// 	.color(() => Math.sin(time) / 2 + 0.5, () => Math.sin(time / 3) / 4 + 1, () => Math.sin(time / 2 + Math.PI) / 4 + 0.85)
	.mult(src(o0)
		.scrollY(() => -0.5)
		.scale(0.95)
		.scrollY(() => 0.5), 0.8)
	.modulateScale(osc(Math.PI * 2, 0)
		.scrollX(-0.25)
		.rotate(Math.PI / 2)
		.brightness(-0.2)
		// 		.scrollY(() => Math.sin(time))
		// 		.scrollX(() => Math.cos(time))
		.mult(osc(Math.PI * 2, 0)
			.scrollX(-0.25)
			.brightness(-0.2))
		.modulate(noise(1, 1), () => a.fft[2] + 0.1), () => -a.fft[2] + 0.2)
	.out(o0)

gradient()
	.color(0, () => Math.sin(time / 4) / 4 + 1, 0)
	.saturate(0)
	.rotate(() => Math.sin(time / 3) * Math.PI / 3)
	.scale(() => Math.sin(time / 3) / 4 + 1)
	.out(o1)

src(o0)
	.add(text(...t)
		.rotate(Math.PI))
.add(shape(40, 0.01, 0.25)
// 		.modulateScale(noise(10, 0.2), () => a.fft[1])
// 		.scale(() => a.fft[0] + 1)
        ).rotate(() => Math.sin(time / 4) * Math.PI * 1.1 + Math.PI)
	.modulateScale(src(o1), -1)
	.modulate(noise(1.5, 1)
		.modulateScale(src(o1), -1), () => a.fft[0] / 20 + a.fft[2] / 30 + 0.001)
	.add(src(o1)
		.thresh(0.9))
	.rotate(Math.PI)
	.sub(src(o2)
		.thresh(0.89), 0.01)
	.add(src(o2)
		.thresh(0.5)
		.scale(1.01), 0.4)
	
	// 	.add(src(o3).thresh(0.9).sub(src(o2).thresh(0.99)))
	.out(o2)

// shape(40, 0.01, 0.25).scale(1, 9/16).out(o3)
render(o2)

// @elle.f.l
// art.ellelm.com
// made for music <3

await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")

const textConfig = {
	font: "cormorant unicase",
	fontSize: "80%"
}

osc(40, 0.3, 0.5)
	.add(src(o0)
		.modulate(src(o0)
			.repeat(2)
			.color(1, 2.6, 1)
			.modulateScale(noise(2)), 0.01), 0.6)
	.repeat(1, 3, () => (Math.sin(time) + 1) / 3, () => Math.sin(time))
	.modulateScale(osc(20, 0.3, 0.1)
		.rotate(Math.sin(time)), () => a.fft[0] / 2 + 0.5)
	.brightness(-0.4)
	.contrast(1.5)
	.brightness(() => (a.fft[0] + a.fft[1]) / 2)
	.color(0.012, 0.8, 0.9)
	.out(o0)

src(o0)
	.add(shape(40, 0.2, 0.05)
		.color(0.5, 0.6, () => Math.sin(time / 3) / 4 + 0.5)
		.modulateScale(noise(3, 1.1), 3)
		.repeat(8, 12, () => a.fft[1] * 3 - 1.5), 0.8)
	.modulateScale(shape(40, 0.001, 1)
		.scale(() => a.fft[0] + 0.85))
	.modulateScale(voronoi()
		.modulateScrollY(osc(12, 0.4, 0.3), 0.5), 0.43)
	.out(o1)

src(o1)
	.add(text(`kill the
process
start anew`, textConfig)
		.scale(() => a.fft[0] + 0.67))
	.sub(src(o0)
		.scale(() => 1 - a.fft[0])
		.scrollY(0, 1.2)
		.rotate(() => Math.sin(time) * Math.PI), 0.5)
	.out(o2)

render(o2)

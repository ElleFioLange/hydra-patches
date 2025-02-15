// @elle.f.l
// art.ellelm.com
// made for music <3

await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")

const ts = {
	font: "cormorant unicase",
	fontSize: "85%"
}

shape(40, 0.5, 0.05)
	.scale(1, 9 / 16)
	.add(src(o0)
		.scroll(0, 0, () => Math.sin(time / 8) / 4, () => Math.sin(time / 8) / 4)
		.repeat(16, 9, 0.5, 1.5), 0.1)
	.modulateScale(noise(3, 0.2), () => a.fft[1])
	.out(o0)
render(o0)

src(o0)
	.diff(text(`good
robots
dance`, ts)
		.scale(() => 0.8 + a.fft[0]))
	.contrast(0.8)
	.brightness(-0.2)
	.contrast(() => a.fft[1] / 4 + 1)
	.brightness(() => a.fft[2] / 4)
	.out(o1)

render(o1)

osc(2, 0.2, 1.5)
	.blend(src(o2)
		.scale(() => Math.sin(time) / 10 + 1), () => a.fft[2] / 5 + 0.75)
	.modulate(src(o1), 1)
	.contrast(0.9)
	// 	.brightness(-0.1)
	.contrast(() => a.fft[1] / 4 + 1)
	.add(noise(2, 0.25), () => a.fft[0] / 4)
	.out(o2)
render(o2)

src(o2)
	.add(text(`good
robots

render(o3)

await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")

const ts = {
	font: "cormorant unicase",
	fontSize: "85%"
}

text(`be of
both
minds`, ts)
	.modulateScale(noise(13, 5)
		.pixelate(10), () => a.fft[0] / 2).scale(() => a.fft[0] / 3 + 1)
	.out(o3)

src(o0)
	.blend(osc(10, 0.2, 1.12)
		.scale(() => 1 - a.fft[0])
		.modulate(src(o0)
			.rotate(() => Math.sin(time / 4))
			.scroll(() => Math.sin(time / 4) * 2, () => Math.cos(time / 4) * 2)
			.modulateScale(src(o2)
				.rotate(() => Math.sin(time / 2) * 3), 2)
			.repeat(3, 3, 4, 2)), () => a.fft[0] / 3 + 0.15)
	.out(o0)

src(o0)
	.add(o3)
	.out(o1)

render(o1)

noise(6, 2)
	.color(0.23, 0.35, 0.62)
	.modulateRepeat(noise(4, 0.8), 2)
	.diff(src(o1), 0.2)
	.mult(src(o0)
		.scale(() => a.fft[0] * 2 + 1)
		.modulateHue(osc(12, 0.5, 1.2)
			.modulateScale(noise(64, 0.1)), 1.2), 0.65)
	.add(noise(2, 0.3), () => a.fft[0])
	.add(src(o3), () => a.fft[0])
	.blend(src(o2)
		.scale(0.99, 0.9995), () => a.fft[3] + 0.35).scale(() => 1 - a.fft[0] / 3)
	.out(o2)

render(o2)

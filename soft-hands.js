await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")

const tc = {
	font: "cormorant unicase"
}
// @elle.f.l
// art.ellelm.com
// made for music <3

gradient(2)
	.scroll(0.5, 0.5)
	.modulateScrollY(osc(20, 1.4)
		.modulate(noise(13, 1)), 0.25)
	.brightness(() => a.fft[0] / 4)
	.modulateScale(src(o0)
		.rotate(() => Math.sin(time / 24))
	)
	.add(src(o0)
		.repeat(20, 3)
		.modulateHue(gradient() 
			.modulatePixelate(voronoi(8), 6)
			.repeat(8), () => a.fft[0] / 5), 0.25)
	.scrollY(0, 0.25)
	.scrollX(() => Math.sin(time) * 0.25 + Math.sin(time) * a.fft[3] / 4)
	.modulateScale(noise(2), 1.5)
	.out(o0)

src(o0)
	.add(text(`soft are
the hands
that carry
the glass`, tc)
		.modulateScale(osc(20, 1.2), () => a.fft[0] / 10), 0.75)
	.out(o1)
render(o1)

osc(18, 4, 0.8)
	.modulateHue(src(o1)
		.scale(() => a.fft[1] / 5 + 0.8)
		.blend(src(o0)
			.rotate(() => Math.sin(time / 12)).scale(() => 1 + a.fft[1] / 4)
			.kaleid(4), 0.5)
		.out(o2))
render(o2)

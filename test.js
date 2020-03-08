/*
画面タッチでカラフルな線を描く
*/
var rat = 106.05
var canvas = document.getElementById('stage')
var ctx = canvas.getContext('2d')
function resize() {
	canvas.setAttribute('width', window.innerWidth*2)
	canvas.setAttribute('height', window.innerHeight * 2)
	ctx.font = '64px serif'
	ctx.fillText('ＰＩＰ', 100, 100)
	ctx.fillText('ＬＯＴ', 100, 200)
	ctx.fillText('ＬＳ注', 100, 300)
	ctx.lineWidth = 5
	ctx.scale(2, 2)
}
resize()
window.addEventListener('resize', resize)
window.addEventListener('orientationchange', resize)
canvas.addEventListener('mouseup', test, false)
canvas.addEventListener('touchend', test, false)
function test() {
	rat = rat + 0.1
	ctx.font = '64px serif'
	ctx.fillText('ＰＩＰ', 100, 100)
	ctx.fillText('ＬＯＴ', 100, 200)
	ctx.fillText('ＬＳ注', 100, 300)
	ctx.clearRect(200, 300, 300, 400)
	ctx.fillText(rat, 200, 300)
}
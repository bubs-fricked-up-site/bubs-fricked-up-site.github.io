const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

/*
const encoder = new GIFEncoder(300, 300);
encoder.start();
encoder.setRepeat(0);
encoder.setDelay(50);
encoder.setQuality(10);

function captureFrame() {
  encoder.addFrame(ctx);
}
*/

function valToImg(val) {
	let image = null;
	switch (val){
		case "flight":
			image = "image/geekedsteve.jpg"
			break;
		case "peak":
			image = "image/fullpeak.gif"
			break;
	}
	return image
}

function updateAnimStyle() {
  const anims = document.getElementsByName("anim"); // grab all radios
  const imgs = document.getElementsByName("photo"); // grab all radios
  let selectedanim = null;
  let selectedimg = null;
	
	for (const im of imgs) {
		if (im.checked) {
		  selectedimg = im.value; // store the picked value
		  img.src = valToImg(selectedimg);
		  console.log(selectedimg, "selected.")
		  break;
		}
	}
	
	for (const anim of anims) {	
		if (anim.checked) {
		  selectedanim = anim.value; // store the picked value
		  anim = selectedanim;
		  console.log(selectedanim, "selected.")
		  break;
		}
	}
	
	t = 0;
	cancelAnimationFrame(raf);
}

const sizeslider = document.getElementById("size-slider");

const img = new Image();
img.src = "image/geekedsteve.jpg"; // YOUR IMAGE HERE

let t = 0;

ctx.font = "16px fs-tahoma-8px";
ctx.fillText("loading...", 0, 0)
img.onload = () => {
	requestAnimationFrame(loop);
  //renderGif();
};

const imgSetting = {
	size: 1,
	nw: img.naturalWidth,
	nh: img.naturalHeight,
}

sizeslider.addEventListener("change", () => {
	imgSetting.size = parseFloat(sizeslider.value)
});

/*
function exportGif() {
	encoder.finish();
	const blob = new Blob([encoder.out.getData()], { type: "image/gif" });
	const url = URL.createObjectURL(blob);
	window.open(url);

}
*/

animNum = 0
raf = null;
function loop() {
  t += 0.06;

  // trailing fade (cool motion blur)
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();

  // center canvas
  ctx.translate(canvas.width/2, canvas.height/2);

  // effects ✨
  var scale = 1 + Math.sin(t) * 0.2;
  var rot   = 0;//t;
  var skewX = Math.sin(t*2) * 0.3;
	
	switch()
	
  ctx.rotate(rot);
  ctx.transform(1, 0, skewX, 1, 0, 0);
  ctx.scale(scale, scale);

  ctx.drawImage(
    img,
    (-img.width/2),
    (-img.height/2)
  );

  ctx.restore();

  raf = requestAnimationFrame(loop);
  //captureFrame();
}

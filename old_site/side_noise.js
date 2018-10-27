
var bg_sketch = function (p) {
    p.setup = function () {
        console.log('loading!');
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        // get_visible_divs();

    };

    p.draw = function () {

        p.background(255);

        scroll_location = getScroll();

        var c_h = document.body.clientHeight
        var loc = c_h / 2
        // console.log(frameRate())

        for (var location of header_locations) {
            p.line(0, location + 20 - window_offset, 200, location + 20 - window_offset)
        };

        p.noFill();
        p.beginShape();
        var xoff = (window_offset * .006);
        for (var y = 0; y < loc; y++) {
            p.stroke(0);
            var x = p.noise(xoff * 6) * 50;
            p.vertex(x, y);
            xoff += inc;
        };
        p.endShape();

        p.fill(255);
        p.ellipse(x, y, 10, 10);


        // console.log(p.frameRate());
    };
}

var p5_side = new p5(bg_sketch)
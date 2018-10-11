
var explode_sketch = function (p) {

    p.setup = function () {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        p.length = 200

        p.x_start = p.map(p.random(), 0, 1, 10, 20);
        p.y_start = p.map(p.random(), 0, 1, 10, 20);

        p.inc = .01

        p.element = ele;

    };

    p.draw = function () {
        // this will ensure that it doesn't run when the class is instatiated.
        // only when it is called explicitly with text.



        if (p.frameCount < 100) {
            // p.background(255)

            var viewportOffset = p.element.getBoundingClientRect()
            // these are relative to the viewport, i.e. the window
            var top = viewportOffset.top
            var left = viewportOffset.left

            // p.ellipse(20, 20, 20, 20)

            p.noFill();
            p.beginShape();
            var xoff = 0;
            console.log('drawing... ', top, left)
            for (var y = 0; y < p.frameCount; y++) {
                p.stroke(0);
                var x = p.noise(xoff * 6) * 50;
                p.vertex(x + left, y + top);
                xoff += p.inc;
            };

            p.endShape();

        }
        else {
            console.log('stopping!');
            p.remove();
            // p.noLoop();
        };
    }
}

// 
var ele;
// var explode_ele = null;
explode_text = function (element) {
    // explode_sketch.setup.element = element;
    ele = element
    new p5(explode_sketch);
}
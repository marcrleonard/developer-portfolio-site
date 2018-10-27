


all_chars = [];

var background_sketch = function (p) {

    p.setup = function () {
        canvas = p.createCanvas(p.windowWidth, document.body.scrollHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');

        canvas.style('position', 'absolute');

        p.angleMode(p.DEGREES);
        // p.rectMode(p.CENTER);

        p.chars = ['~', '|', '+', 'o', '"', '#', '!', '*']

        for (let i = 0; i < 40; i++) {
            for (let char of p.chars) {
                // console.log(char)
                p.textSize(32);
                p.fill(0, 20, 20, 20);

                var x = p.random(0, p.windowWidth);
                var y = p.random(0, document.body.scrollHeight);

                let obj = {
                    x: 0,
                    y: 0,
                    char: '',
                    rotation: 0
                }

                obj.x = x;
                obj.y = y;
                obj.char = char;

                // console.log(obj);
                all_chars.push(obj);




            }
        }


    };

    p.draw = function () {

        p.background(255);

        for (let item of all_chars) {

            // p.rotate(window_offset);
            // p.translate(item.x, item.y);
            // p.text(item.char, 0, 0);


            // p.rotateZ(time / 1234);
            p.push();
            p.textSize(40);
            p.textAlign(p.CENTER, p.CENTER);
            p.translate(item.x, item.y);
            p.rotate(window_offset * .5);
            p.text(item.char, 0, 0);
            p.pop();
            // p.text(item.char, 20, 20);




        }

        // for (let i = 0; i < 40; i++) {
        //     for (let char of p.chars) {
        //         console.log(char)
        //         p.textSize(32);
        //         p.fill(0, 20, 20, 20);

        //         var x = p.random(0, p.windowWidth);
        //         var y = p.random(0, document.body.scrollHeight);

        //         p.text(char, x, y);
        //     }
        // }


        // p.noLoop();
    }
}

// 

// var explode_ele = null;
function background() {
    // console.log('yo!')
    // explode_sketch.setup.element = element;
    new p5(background_sketch);
}
background()    
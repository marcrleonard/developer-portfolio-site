'use strict';
var y

function getScroll() {
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset]
    } else {
        var sx; var sy; var d = document;


        var r = d.documentElement;


        var b = d.body
        sx = r.scrollLeft || b.scrollLeft || 0
        sy = r.scrollTop || b.scrollTop || 0

        y = sy

        return { 'x': sx, 'y': sy }
    }
};

getScroll()

var header_locations = []

var window_offset = 0


var container_width = 0
var columns = 3


var nav;
var elemRect;
window.onload = function () {

    var container = document.querySelector('.container');
    container_width = container.clientWidth;

    if (container_width > 675) {
        columns = 3
    };
    if (675 > container_width > 475) {
        columns = 2
    };
    if (container_width < 475) {
        columns = 1
    }

    nav = document.getElementById('nav_bar');
    elemRect = nav.offsetTop;
    // elemRect = nav.offsetHeight;
    console.log(elemRect)
}();


var fullwidth = function (element) {
    var ele = document.getElementById('showcaseProject');
    ele.classList.add('expand');

    console.log(getPos(ele));



    // element.classList.add("fullWidthProject");
};


window.addEventListener('scroll', function (e) {
    var blah = getScroll()

    var c_h = document.body.clientHeight

    window_offset = blah[1]
    console.log('Absolute: ', window_offset)


    this.console.log(elemRect);

    if (elemRect < window_offset) {
        nav.classList.add("sticky")
    }
    else {
        // if ((nav.classList).includes('sticky')) {
        nav.classList.remove("sticky")
    };




    // };



})

function getPos(el) {
    // yay readability
    for (var lx = 0, ly = 0;
        el != null;
        lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return { x: lx, y: ly };
}


var all_projects = [
    {
        'name': 'PixelStrings',
        'tags': ['PaaS'],
        'desc': 'QD'
    },
    {
        'name': 'ArtStream',
        'tags': ['SaaS'],
        'desc': 'QD'
    },
    {
        'name': 'ImageToVideo',
        'tags': ['Library'],
        'desc': 'QD'
    },
    {
        'name': 'Photobooth',
        'tags': ['Application'],
        'desc': 'QD'
    },
    {
        'name': 'Topo Plotter',
        'tags': ['Art'],
        'desc': 'QD'
    },
    {
        'name': 'SimpleTimeOffset',
        'tags': ['Library', 'WIP'],
        'desc': 'QD'
    },
]


var project_location = document.getElementById('projectBoxes')
for (let project of all_projects) {
    var div = document.createElement('div');

    var center = document.createElement('center');
    var title = document.createElement('h3');
    title.innerHTML = project.name;
    var tags = document.createElement('h4');
    tags.innerHTML = project.tags;
    var desc = document.createElement('h5');
    desc.innerHTML = project.desc

    div.classList.add('projectBox');
    div.id = project.name;

    div.appendChild(center);
    center.appendChild(title)
    center.appendChild(tags);
    center.appendChild(desc);

    // var click_wrapper = document.createElement('a');

    div.onclick = function () {
        fullwidth(this);
    };
    // click_wrapper.appendChild(div);

    project_location.appendChild(div);

};





var start = 20
var inc = 0.006

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)

};


var load_github = function () {
    const Http = new XMLHttpRequest();
    const url = 'https://api.github.com/users/marcrleonard/repos';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
};







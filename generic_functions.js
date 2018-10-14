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
    // this functin runs when a project is clicked
    var project_idx = element.getAttribute('project-num');

    var full_project = all_projects[project_idx];
    console.log(full_project);

    var title_ele = document.getElementById('showcaseTitle');
    var text_ele = document.getElementById('showcaseText');
    var code_container = document.getElementById('showcaseCode-container');
    var image = document.getElementById('showcaseImage');

    code_container.style.visibility = "hidden";
    image.style.visibility = "hidden";
    document.getElementById('showcaseProject').style.backgroundImage = '';
    // image.removeAttribute('src');

    title_ele.innerHTML = full_project.name;
    text_ele.innerHTML = full_project.full_desc;

    if (full_project.hasOwnProperty('bg_img')) {
        document.getElementById('showcaseProject').style.backgroundImage = 'url(img/test_bg.jpg)';
    }

    if (full_project.hasOwnProperty('code')) {
        var code = document.getElementById('showcaseCode');
        code_container.style.visibility = "visible";
        code.innerHTML = full_project.code;
    }
    if (full_project.hasOwnProperty('full_media')) {
        image.style.visibility = "visible";
        image.src = 'img/pxs.png';
    }


};


window.addEventListener('scroll', function (e) {
    var blah = getScroll()

    var c_h = document.body.clientHeight

    window_offset = blah[1]
    console.log('Absolute: ', window_offset)


    this.console.log(elemRect);

    var top = this.document.getElementById('navContainer');

    if (elemRect < window_offset) {
        nav.classList.add("sticky");
        top.style.height = '50px'
    }
    else {
        // if ((nav.classList).includes('sticky')) {
        nav.classList.remove("sticky");
        top.style.height = '0px'
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
        'short_desc': 'QD',
        // 'bg_img': '',
        'full_desc': `Currently, I am a core backend developer of PixelStrings,
        a platform by <a class='whiteLink' href="http://cinnafilm.com">Cinnafilm</a> . <a class='whiteLink' href="http://pixelstrings.com"> PixelStrings</a>
            specializes cloud video processing and delivery.
        My job is two fold - automating the allocation and orcehstration cloud compute resources for
        processing and delivery, and creating APIs to enable different type of
        video conversion formats.
        These services are accesed by the front end UI, as well as our public API.`,
        'technologies': ['python'],
        'full_media': '',
        'links': ['http://pixelstrings.com']
    },
    {
        'name': 'ArtStream',
        'tags': ['SaaS'],
        'short_desc': 'QD',
        // 'bg_img': '',
        'full_desc': `ArtStream is a patform for artists to showcase their work via the ArtStream channel on Roku. I created the
        infrastructure and APIs to take a piece of artwork a user uploaded, and delivery it in video form with 'Ken Burns' style animations applied.`,
        'technologies': ['python', 'javascript', 'MySQL', 'ImageMagik', 'Digital Ocean', 'PIL', 'FFMPEG'],
        'full_media': '',
        'links': ['https://www.artstreamvideos.com/']
    },
    {
        'name': 'ImageToVideo',
        'tags': ['Library'],
        'short_desc': 'QD',
        // 'bg_img': '',
        'full_desc': `I created this to make a batteries included way to make an image into a video. ImageToVideo uses OpenCV/Numpy as a 'middle man'. It handles any zoom, resize, rotate functions (and eventually will power the plugin extensibility). All encoding is done via FFMPEG. In the future, I will be adding other imaging libraries. I have preliminary versions of using Pillow and Pyvips.`,
        'technologies': ['FFMPEG', 'PIL', 'Numpy', 'OpenCV'],
        'links': ['https://github.com/marcrleonard/ImageToVideo'],
        'code': `
class Hello(object):
    def __init__(input_stuff):
        self.input_stuff = input_stuff

>>> yooy = Hello('asda')`
    },
    {
        'name': 'Photobooth',
        'tags': ['Application'],
        'short_desc': 'QD',
        'bg_img': '',
        'full_desc': 'I created this app to use at my wedding. It was run on a Raspberry Pi, computer screen and a Canon 60d. Resulting photobooth image "strips" are texted to the subject!',
        'technologies': ['RaspberryPi', 'Twilio', 'Tkinter', 'FFMPEG', 'ImageMagik', 'gphoto2', 'python'],
        'full_media': 'img/pxs.png',
        'links': ['https://github.com/marcrleonard/Photobooth'],
    },
    {
        'name': 'Topo Plotter',
        'tags': ['Art'],
        'short_desc': 'QD',
        'bg_img': '',
        'full_desc': '',
        'technologies': '',
        'full_media': '',
        'links': [],
    },
    {
        'name': 'SimpleTimeOffset',
        'tags': ['Library', 'WIP'],
        'short_desc': 'QD',
        // 'bg_img': '',
        'full_desc': `
        This library provides a very simple way to add hour offsets to a given input time.While doing an iot project with micro python, I found that an internet connected device will get the correct time, but micropython would not give you the ability to add a timezone.So if you know(or figure out) the proper hourly offset, you can use this library to get the correct time.It has no dependencies(except the new_time method, so you can easily use in micro python.This does not do any other 'fancy' calculations like daylight savings time.`,
        'technologies': ['micropython', 'python', 'esp8266'],
        'links': ['https://github.com/marcrleonard/SimpleTimeOffset'],
        'code': `
class Hello(object):
    def __init__(input_stuff):
        self.input_stuff = input_stuff

>>> yooy = Hello('asda')`
    },
]


var project_location = document.getElementById('projectBoxes')
for (let [idx, project] of all_projects.entries()) {
    console.log(idx)
    var div = document.createElement('div');

    var center = document.createElement('center');
    var title = document.createElement('h3');
    title.innerHTML = project.name;
    var tags = document.createElement('h4');
    tags.innerHTML = project.tags;
    var desc = document.createElement('h5');
    desc.innerHTML = project.short_desc;

    div.setAttribute('project-num', idx);
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







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

var y;
var window_offset = 0;
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

var showCaseOpen = false;

var fullwidth = function (element) {
    // this functin runs when a project is clicked
    var project_idx = element.getAttribute('project-num');

    var full_project = all_projects[project_idx];
    console.log(full_project);


    // entrie.classList.add('showcaseContract');
    // await sleep(1500);

    // await sleep(1500);
    // entire.classList.remove('showcaseContract')


    var title_ele = document.getElementById('showcaseTitle');
    var text_ele = document.getElementById('showcaseText');
    var code_container = document.getElementById('showcaseCode-container');
    var image = document.getElementById('showcaseImage');
    var link = document.getElementById('showcaseLink');
    var tech = document.getElementById('showcaseTech');

    //removes all tags
    tech.innerHTML = ''


    // code_container.style.visibility = "hidden";
    // image.style.visibility = "hidden";

    code_container.style.display = "none";
    image.style.display = "none";

    // code_container.setAttribute("hidden", true);
    // image.setAttribute("hidden", true);

    document.getElementById('showcaseProject').style.backgroundImage = '';
    // image.removeAttribute('src');

    title_ele.innerHTML = full_project.name;
    text_ele.innerHTML = full_project.full_desc;
    link.innerHTML = full_project.links;
    link.href = full_project.links;
    link.target = "_blank";

    document.getElementById('showcaseProject').style.backgroundColor = '#233D4D';

    if (full_project.hasOwnProperty('technologies')) {
        for (let t of full_project.technologies) {
            let tech_tag = document.createElement('p');
            tech_tag.innerHTML = t;
            tech_tag.classList.add('techtag');
            tech.appendChild(tech_tag);
        }

        // tech.innerHTML = JSON.stringify(full_project.technologies);
        // tech.style.color = 'white';
    }


    if (full_project.hasOwnProperty('bg_img')) {
        document.getElementById('showcaseProject').style.backgroundImage = 'url(' + full_project.bg_img + ')';
        // document.getElementById('showcaseProject').style.backgroundColor = '#EAEAEA';
        document.getElementById('showcaseProject').style.backgroundRepeat = 'no-repeat';
        document.getElementById('showcaseProject').style.backgroundSize = 'auto 100%';
    }

    if (full_project.hasOwnProperty('code')) {
        var code = document.getElementById('showcaseCode');
        // code_container.style.visibility = "visible";
        code_container.style.display = "block";
        code.innerHTML = full_project.code;
    }
    if (full_project.hasOwnProperty('full_media')) {
        // image.style.visibility = "visible";
        image.style.display = "block";
        image.src = full_project.full_media;
    }
    Prism.highlightAll();


    var entire = document.getElementById('showcaseProject');
    if (!showCaseOpen) {
        entire.classList.add('showcaseExpand');
        entire.style.visibility = "visible";
        showCaseOpen = true;

    }

    entire.style.height = "auto";

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
        'full_media': 'img/pxs_screenshot.jpg',
        'links': ['http://pixelstrings.com']
    },
    {
        'name': 'ArtStream',
        'tags': ['Webapp'],
        'short_desc': 'QD',
        // 'bg_img': '',
        'full_desc': `ArtStream is a patform for artists to showcase their work via the ArtStream channel on Roku. I created the
        infrastructure and APIs to take a piece of artwork a user uploaded, and delivery it in video form with 'Ken Burns' style animations applied.`,
        'technologies': ['python', 'javascript', 'MySQL', 'ImageMagik', 'Digital Ocean', 'PIL', 'FFMPEG'],
        'full_media': 'img/asv_screenshot.jpg',
        'links': ['https://www.artstreamvideos.com/']
    },
    {
        'name': 'ImageToVideo',
        'tags': ['Library'],
        'short_desc': 'QD',
        // 'bg_img': '',
        'full_desc': `I created this to make a batteries included way to make an image into a video. ImageToVideo uses OpenCV/Numpy as a 'middle man'. It handles any zoom, resize, rotate functions (and eventually will power the plugin extensibility). All encoding is done via FFMPEG. Included in the class is a simple progress monitoring API. In the future, I will be adding other imaging libraries. I have preliminary versions of using Pillow and Pyvips.`,
        'technologies': ['FFMPEG', 'PIL', 'Numpy', 'OpenCV'],
        'links': ['https://github.com/marcrleonard/ImageToVideo'],
        'code': `from ImageToVideo import ImageToVideo

image_video = ImageToVideo(
    "test_image_sm.jpg", # input image
    1920,                # output width
    1080,                # output height
    2,                   # output clip duration (seconds)
    24,                  # fps
    image_lib='cv'       # image library
)

render_thread = threading.Thread(target=image_video.Render)
render_thread.start()

render_status = ''
prev_percentage = 0

while render_status != 'done':
    percentage_complete = int(image_video.percent_complete() * 100)
    render_status = image_video.render_status
    if percentage_complete != prev_percentage:
        print('{}% {}fps {} Remaining'.format(percentage_complete,
                                                image_video.render_fps, image_video.render_estimated_seconds_remaining))
    time.sleep(1)

# output ...

>>> 10% 5.81fps 0:00:07 Remaining
>>> 50% 5.7fps 0:00:02 Remaining
>>> 100% 5.24fps 0:00:00 Remaining
>>> Render Complete. 0.1884527666666667 minutes
`

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
from SimpleTimeOffset import SimpleTimeOffset

current_time = (2017, 10, 27, 10, 39, 23, 4, 300)

time_set = SimpleTimeOffset(start_time=current_time)
offset_hours = 26
time_set.offset_hours(offset_hours)

print('Offset   {}'.format(offset_hours))
print('Original {}:{:02d}:{:02d}'.format(time_set.hour_current, time_set.minute_current, time_set.second_current))
print('New      {}:{:02d}:{:02d}'.format(time_set.hour_new, time_set.minute_current, time_set.second_current))
print('Offset   {} Days, {} Hours'.format(time_set.day_offset, time_set.hour_remainder))

# output

>>> Offset   26
>>> Original 10:39:23
>>> New      12:39:23
>>> Offset   1 Days, 2 Hours`

    },
    {
        'name': 'Photobooth',
        'tags': ['Application'],
        'short_desc': 'QD',
        // 'bg_img': '',
        'full_desc': 'I created this app to use at my wedding. It was run on a Raspberry Pi, computer screen and a Canon 60d. Resulting photobooth image "strips" are texted to the subject!',
        'technologies': ['RaspberryPi', 'Twilio', 'Tkinter', 'FFMPEG', 'ImageMagik', 'gphoto2', 'python'],
        'full_media': 'img/photobooth_interface.jpg',
        'links': ['https://github.com/marcrleonard/Photobooth'],
    },
    {
        'name': 'Topo Plotter',
        'tags': ['Art'],
        'short_desc': 'QD',
        'bg_img': 'img/topo_bg.svg',
        'full_desc': 'I love taking the digital and making it phyical. ',
        'technologies': ['python', 'Inkscape', 'Plotter'],
        'full_media': 'img/plotter.jpg',
        'links': [],
    },

]


var project_location = document.getElementById('projectBoxes')
for (let [idx, project] of all_projects.entries()) {
    console.log(idx)
    var div = document.createElement('div');

    // var link = document.createElement('a');
    div.href = '#showcase';

    var center = document.createElement('center');
    var title = document.createElement('h3');
    title.innerHTML = project.name;
    var tags = document.createElement('h4');
    tags.innerHTML = project.tags;
    // var desc = document.createElement('h5');
    // desc.innerHTML = project.short_desc;

    div.setAttribute('project-num', idx);
    div.classList.add('projectBox');
    div.id = project.name;

    div.appendChild(center);
    center.appendChild(title)
    center.appendChild(tags);
    // center.appendChild(desc);

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


function decryptEmail(encoded) {

    var address = atob(encoded);
    window.location.href = "mailto:" + address;

}

var load_github = function () {
    const Http = new XMLHttpRequest();
    const url = 'https://api.github.com/users/marcrleonard/repos';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
};







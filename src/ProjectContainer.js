import SingleProject from './SingleProject.js'
import React, { Component } from 'react';


class ProjectContainer extends Component {
  constructor() {
    super()
    this.state = {};
    this.side = 'right';
  }

  render() {

    let projects = [

      {
        'name': 'ArtStream',
        'tags': 'Webapp',
        'short_desc': 'QD',
        // 'bg_img': '',
        'full_desc': `ArtStream is a patform for artists to showcase their work via the ArtStream channel on Roku. I created the
          infrastructure and APIs to take a piece of artwork a user uploaded, and delivery it in video form with 'Ken Burns' style animations applied.`,
        'technologies': ['python', 'javascript', 'MySQL', 'ImageMagik', 'Digital Ocean', 'PIL', 'FFMPEG'],
        'full_media': 'img/asv_screenshot.jpg',
        'links': ['artstreamvideos.com']
      },
      {
        'name': 'ImageToVideo',
        'tags': 'Library',
        'short_desc': 'QD',
        // 'bg_img': '',
        'full_desc': `I created this to make a batteries included way to make an image into a video. ImageToVideo uses OpenCV/Numpy as a 'middle man'. It handles any zoom, resize, rotate functions (and eventually will power the plugin extensibility). All encoding is done via FFMPEG. Included in the class is a simple progress monitoring API. In the future, I will be adding other imaging libraries. I have preliminary versions of using Pillow and Pyvips.`,
        'technologies': ['FFMPEG', 'PIL', 'Numpy', 'OpenCV'],
        'links': ['github.com/marcrleonard/ImageToVideo'],
        'full_media': 'img/pxs_screenshot.jpg', // TEMP
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
        'tags': 'Library',
        'short_desc': 'QD',
        // 'bg_img': '',
        'full_desc': `
          This library provides a very simple way to add hour offsets to a given input time.While doing an iot project with micro python, I found that an internet connected device will get the correct time, but micropython would not give you the ability to add a timezone.So if you know(or figure out) the proper hourly offset, you can use this library to get the correct time.It has no dependencies(except the new_time method, so you can easily use in micro python.This does not do any other 'fancy' calculations like daylight savings time.`,
        'technologies': ['micropython', 'python', 'esp8266'],
        'full_media': 'img/pxs_screenshot.jpg', // TEMP
        'links': ['github.com/marcrleonard/SimpleTimeOffset'],
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
        'tags': 'Application',
        'short_desc': 'QD',
        // 'bg_img': '',
        'full_desc': 'I created this app to use at my wedding. It was run on a Raspberry Pi, computer screen and a Canon 60d. Resulting photobooth image "strips" are texted to the subject!',
        'technologies': ['RaspberryPi', 'Twilio', 'Tkinter', 'FFMPEG', 'ImageMagik', 'gphoto2', 'python'],
        'full_media': 'img/photobooth_interface.jpg',
        'links': ['github.com/marcrleonard/Photobooth'],
      },
      {
        'name': 'Topo Plotter',
        'tags': 'Art',
        'short_desc': 'QD',
        'bg_img': 'img/topo_bg.svg',
        'full_desc': 'I love taking the digital and making it phyical. ',
        'technologies': ['python', 'Inkscape', 'Plotter'],
        'full_media': 'img/plotter.jpg',
        'links': [],
      },

    ]
    ////////////////////


    var side = 'right'

    let listItems = []

    for (let project of projects) {
      listItems.push(
        <SingleProject
          className='clear'
          key={project.name.toString()}
          side={side}
          project={project}
        />
      );
      // console.log(side)
      // if (side === 'left') {
      //   side = 'right'
      // }
      // else {
      //   side = 'left'
      // };
      side = ((side == 'right') ? 'left' : 'right');
    }

    // let listItems = projects.map((project) =>
    //   <SingleProject
    //     className='clear'
    //     key={project.name.toString()}
    //     side={side ? 'right' : 'left'}
    //     project={project}
    //   />
    // );



    return (
      <div>
        {listItems}
      </div>
    );





  }
}

export default ProjectContainer;

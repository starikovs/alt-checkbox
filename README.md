alt-checkbox
============

Style checkbox with CSS and Icon Fonts with help of alt-checkbox jQuery plugin.
It's a nice alternative for standard html checkbox.

[Demo and Home Page](http://alt-checkbox.starikovs.com "alt-checkbox")

Features:

- It hides standard html "input checkbox" but synchronizes with it
- It uses icon fonts
- It scales as you want. You just set up a font-size and that's all
- It can be styled as you wish with help of css
- It's possible to navigate and check with keyboard (tab and space)

Example of how to use it
========================

First, include some scripts and styles for alt-checkbox in `head` section.

    <head>
       <!-- 1. jQuery -->
       <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    
       <!-- 2. @import an icon font inside this file, Font Awesome is used by default -->
       <link rel="stylesheet" href="jquery.alt-checkbox.icon-font.css">
    
       <!-- 3. Style checkboxes if you want inside this file -->
       <link rel="stylesheet" href="jquery.alt-checkbox.css">
    
       <!-- 4. Include alt-checkbox jQuery plugin -->
       <script src="jquery.alt-checkbox.js"></script>
    </head>

Then, replace some standard HTML checkboxes with alt-checkbox.

    <body>
      <input type="checkbox" id="checkbox1">
      <label for="checkbox1">Check Me!</label>
 
      <script>
        jQuery("#checkbox1").altCheckbox({
          iconClass: "fa-thumbs-o-up"
          /* and some other options if you need */
        });
      </script>
    </body>

Release 2.0.0
=============

- Plugin refactoring, less number of files.
- Default flat background of checkboxes.
- cdnjs urls for jquery, font awesome, etc.
- New jquery, font awesome.

Browsers
============

Tested in the following browsers:

- Chrome 28
- FireFox 22
- Opera 12
- IE 9
- Safari 5

*alt-checkbox plugin is under the MIT license.*

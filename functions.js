/**
// * Contact the developer in case of Web page error.
// 
**/


/* ===================
Table Of Content
======================
01 PRELOADER
02 MEGA MENU
03 STICKY HEADER
04 TINY SLIDER
05 STICKY BAR
06 TOOLTIP
07 POPOVER
08 BACK TO TOP
09 GLIGHTBOX
10 CHOICES
11 AOS ANIMATION
12 QUILL EDITOR
13 STEPPER
14 PRICING
15 STICKY ELEMENT
16 FLATPICKER
17 SPLIDE SLIDER
18 NOUISLIDER
19 DROPZONE
20 FAKE PASSWORD
21 AUTO TAB
22 GUEST SELECTOR
23 PARALLAX BACKGROUND
24 OVERLAY SCROLLBAR
25 TRAFFIC CHART
26 TRAFFIC CHART 2
27 TRAFFIC CHART 3
28 TRAFFIC CHART 4
====================== */

"use strict";


// Get CSS var value
var ThemeColor = function () {
  return {
    getCssVariableValue: function (e) {
      var t = getComputedStyle(document.documentElement).getPropertyValue(e);
      return t && t.length > 0 && (t = t.trim()), t;
    }
  };
}();

var e = {
    init: function () {
        e.preLoader(),
        e.megaMenu(),
        e.stickyHeader(),
        e.tinySlider(),
        e.stickyBar(),
        e.toolTipFunc(),
        e.popOverFunc(),
        e.backTotop(),
        e.lightBox(),
        e.choicesSelect(),
        e.aosFunc(),
        e.quill(),
        e.stepper(),
        e.pricing(),
        e.stickyElement(),
        e.flatPicker(),
        e.splideSlider(),
        e.rangeSlider(),
        e.dropZone(),
        e.fakePwd(),
        e.autoTabinput(),
        e.trafficstatsChart(),
        e.trafficChart(),
        e.guestSelector(),
        e.parallaxBG(),
        e.overlayScrollbars(),
        e.trafficsplineChart(),
        e.trafficroomChart();
        
    },
    isVariableDefined: function (el) {
        return typeof !!el && (el) != 'undefined' && el != null;
    },
    getParents: function (el, selector, filter) {
        const result = [];
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        // match start from parent
        el = el.parentElement;
        while (el && !matchesSelector.call(el, selector)) {
            if (!filter) {
                if (selector) {
                    if (matchesSelector.call(el, selector)) {
                        return result.push(el);
                    }
                } else {
                    result.push(el);
                }
            } else {
                if (matchesSelector.call(el, filter)) {
                    result.push(el);
                }
            }
            el = el.parentElement;
            if (e.isVariableDefined(el)) {
                if (matchesSelector.call(el, selector)) {
                    return el;
                }
            }

        }
        return result;
    },
   
    // START: 06 Tooltip
    // Enable tooltips everywhere via data-toggle attribute
    toolTipFunc: function () {
        var tooltipTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    },
    // END: Tooltip

    // START: 07 Popover
    // Enable popover everywhere via data-toggle attribute
    popOverFunc: function () {
        var popoverTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
          return new bootstrap.Popover(popoverTriggerEl)
        })
    },
    // END: Popover

    // START: 08 Back to Top
 
    // START: 11 AOS Animation
    aosFunc: function () {
        var aos = e.select('.aos');
        if (e.isVariableDefined(aos)) {
            AOS.init({
                duration: 500,
                easing: 'ease-out-quart',
                once: true
            });
        }
    },
    // END: AOS Animation

    // START: 12 Quill Editor
      quill: function () {
        var ql = e.select('.quilleditor');
        if (e.isVariableDefined(ql)) {
            var element = e.selectAll('.quilleditor');
            element.forEach(function (item) {
                var t = item.previousElementSibling;
                var edt = new Quill(item, {
                    modules: { toolbar: t },
                    theme: 'snow'
                  });
            });
        }
    },
    // END: Quill Editor

    // START: 13 Stepper
    stepper: function () {
        var stp = e.select('#stepper');
        if (e.isVariableDefined(stp)) {
          var nxtBtn = document.querySelectorAll('.next-btn');
          var prvBtn = document.querySelectorAll('.prev-btn');

          var stepper = new Stepper(document.querySelector('#stepper'), {
            linear: false,
            animation: true
          });

          nxtBtn.forEach(function (button) {
            button.addEventListener("click", () =>{
            stepper.next()
          })
          });

          prvBtn.forEach(function (button) {
            button.addEventListener("click", () =>{
            stepper.previous()
          })
          });
        }
    },
    // END: Stepper

   
    // START: 16 Flatpicker
    flatPicker: function () {

      var picker = e.select('.flatpickr');
      if (e.isVariableDefined(picker)) {
        var element = e.selectAll('.flatpickr');
        element.forEach(function (item) {
          var mode = item.getAttribute('data-mode') == 'multiple' ? 'multiple' : item.getAttribute('data-mode') == 'range' ? 'range' : 'single';
          var enableTime = item.getAttribute('data-enableTime') == 'true' ? true : false;
          var noCalendar = item.getAttribute('data-noCalendar') == 'true' ? true : false;
          var inline = item.getAttribute('data-inline') == 'true' ? true : false;
          var dateFormat = item.getAttribute('data-date-format') ? item.getAttribute('data-date-format') : item.getAttribute('data-enableTime') == 'true' ? "h:i K" : "d M";

          flatpickr(item, {
            mode: mode,
            enableTime: enableTime,
            noCalendar: noCalendar,
            inline: inline,
            animate: "false",
            position: "top",
            dateFormat: dateFormat, //Check supported characters here: https://flatpickr.js.org/formatting/
            disableMobile: "true"
          });

        });
      }
    },
    // END: Flatpicker

    // START: 17 Splide slider
    splideSlider: function () {
      var splide1 = e.select('.splide-main');
        if (e.isVariableDefined(splide1)) {
          var secondarySlider = new Splide( '.splide-thumb', {
              rewind      : true,
              fixedWidth  : 200,
              fixedHeight : 120,
              isNavigation: true,
              gap         : 10,
              focus       : 'center',
              pagination  : false,
              cover       : true,
              breakpoints : {
                  '600': {
                      fixedWidth  : 150,
                      fixedHeight : 100,
                  }
              }
          } ).mount();

        // Create the main slider.
        var primarySlider = new Splide( '.splide-main', {
            type       : 'fade',
            heightRatio: 0.5,
            pagination : false,
            arrows     : false,
            autoplay    :true,
            cover      : true,
        } );
        
        // Set the thumbnails slider as a sync target and then call mount.
        primarySlider.sync( secondarySlider ).mount();

      }
    },
    // END: Splide slider

    // START: 18 noUislider
  / END: dropzone

    // START: 20 Fake Password
    fakePwd: function () {
      if (e.isVariableDefined(e.select('.fakepassword'))) {
        var password = document.querySelector('.fakepassword');
        var toggler = document.querySelector('.fakepasswordicon');
      
        var showHidePassword = () => {
          if (password.type == 'password') {
            password.setAttribute('type', 'text');
            toggler.classList.add('fa-eye');
          } else {
            toggler.classList.remove('fa-eye');
            password.setAttribute('type', 'password');
          }
        };
      
        toggler.addEventListener('click', showHidePassword);
      }
    },
    / END: Fake Password

    // START: 21 Auto tab
    autoTabinput: function () {
      var autb = document.getElementsByClassName("autotab")[0];
      if (e.isVariableDefined(autb)) {
        autb.onkeyup = function (e) {
          var target = e.srcElement;
          var maxLength = parseInt(target.attributes["maxlength"].value, 10);
          var myLength = target.value.length;
          if (myLength >= maxLength) {
            var next = target;
            while (next = next.nextElementSibling) {
              if (next == null)
                break;
              if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
              }
            }
          }
        }
      }
    },
    / END: Auto tab input

    // START: 22 Guest Selector
    guestSelector: function () {
      if (e.isVariableDefined(e.select('.guest-selector'))) {

      let adults = 2;
      let child = 0;
      let rooms =1;
      let totalAdults = 2;
    
      let selectionResult = document.querySelector('.selection-result');
    
      let adultValue = document.querySelector('.adults');
      let adultAdd = document.querySelector('.adult-add');
      let adultRemove = document.querySelector('.adult-remove');
    
      let childValue = document.querySelector('.child');
      let childAdd = document.querySelector('.child-add');
      let childRemove = document.querySelector('.child-remove');
    
      let roomValue = document.querySelector('.rooms');
      let roomAdd = document.querySelector('.room-add');
      let roomRemove = document.querySelector('.room-remove');
    
      function addElement(type){
        if(type == 'adult'){
          adults++;
          totalAdults = adults + child;
    
          showElements();
        }else if(type == 'child'){
          child = child + 1;
          console.log(child);
          totalAdults = adults + child;
    
          showElements();
        }else if(type == 'room'){
          rooms++;
          
          showElements();
        }
      }
    
      function showElements(){
        adultValue.innerText = adults;
        childValue.innerText = child;
        roomValue.innerText = rooms;
    
        let roomText = rooms > 1 ? 'Rooms' : 'Room';
        let guestText = totalAdults > 1 ? 'Guests': 'Guest';
    
        let resultText = totalAdults+' '+guestText+' '+rooms+' '+roomText;
    
        selectionResult.setAttribute('value', resultText);
      }
    
      function removeElement(type){
        if(type == 'adult'){
          adults = adults > 0 ?  adults - 1 : adults;
          totalAdults = adults + child;
    
          showElements();
        }else if(type == 'child'){
          child = child > 0 ? child - 1 : child;
          totalAdults = adults + child;
    
          showElements();
        }else if(type == 'room'){
          rooms = rooms > 0 ? rooms - 1 : rooms;
          
          showElements();
        }
      }
    
      adultAdd.addEventListener('click',function(){
        addElement('adult');
      });
    
      adultRemove.addEventListener('click',function(){
        removeElement('adult');
      });
    
      childAdd.addEventListener('click',function(){
        addElement('child');
      });
    
      childRemove.addEventListener('click',function(){
        removeElement('child');
      });
    
      roomAdd.addEventListener('click',function(){
        addElement('room');
      });
    
      roomRemove.addEventListener('click',function(){
        removeElement('room');
      });
      }
    },
     / END: Guest Selector

     // START: 23 Parallax Background
    parallaxBG: function () {
      var parBG = e.select('.bg-parallax');
      if (e.isVariableDefined(parBG)) {
          jarallax(e.selectAll('.bg-parallax'), {
              speed: 0.6
          });
      }
    },
    // END: Parallax Background

    // START: 24 Overlay scrollbar
    overlayScrollbars: function () {
      var os = e.select('.custom-scrollbar');
      if (os) {
        document.addEventListener("DOMContentLoaded", function() {
          var cs = document.querySelectorAll('.custom-scrollbar');
          cs.forEach(c => {
              OverlayScrollbars(c, {
                scrollbars: {
                  autoHide: 'leave',
                  autoHideDelay: 200
                },
                overflowBehavior : {
                    x : "visible-hidden",
                    y : "scroll"
                }
               });
          });
        });
      }
    },
    // END: Overlay scrollbars

    // START: 25 Traffic Chart
    trafficstatsChart: function () {
      var cpv = e.select('#apexChartTrafficStats');
      if (e.isVariableDefined(cpv)) {
        var options = {
          colors: [
            '#2163e8',
          ],
          series: [{
            name: 'Users',
            data: [100, 401, 305, 501, 409, 602, 609, 901, 848, 602, 809, 901]
          }],
          chart: {
            height: 320,
            type: 'area',
            toolbar: {
              show: false
            }
          },
          grid: {
            strokeDashArray: 4,
            position: 'back'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          legend: {
            show: true,
            horizontalAlign: 'right',
            position: 'top',
            labels: {
            },
            markers: {
              width: 8,
              height: 8
            }
          },
          xaxis: {
            labels: {
              show: true
            },
            axisBorder: {
              show: false
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        };
        var chart = new ApexCharts(document.querySelector("#apexChartTrafficStats"), options);
        chart.render();
      }
    },
    // END: Traffic Chart 

    // START: 26 Traffic Chart 2
    trafficChart: function () {
      var cpv = e.select('#ChartTrafficViews');
      if (e.isVariableDefined(cpv)) {
        // CHART: Page Views
        var options = {
          series: [70, 15, 10, 5],
          labels: ['Organic', 'Google', 'Social media', 'Referral'],
          chart: {
            height: 200,
            width: 200,
            offsetX: 0,
            type: 'donut',
            sparkline: {
              enabled: !0
            }
          },
          colors: [
            ThemeColor.getCssVariableValue('--bs-primary'),
            ThemeColor.getCssVariableValue('--bs-success'),
            ThemeColor.getCssVariableValue('--bs-warning'),
            ThemeColor.getCssVariableValue('--bs-danger')
          ],
          tooltip: {
            theme: "dark"
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
                height: 200,
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        };
        var chart = new ApexCharts(document.querySelector("#ChartTrafficViews"), options);
        chart.render();
      }
    },
    // END: Traffic Chart 2

    // START: 27 Traffic Chart 3
    trafficsplineChart: function () {
      var cpv = e.select('#ChartGuesttraffic');
      if (e.isVariableDefined(cpv)) {
        // CHART: Page Views
        var options = {
          series: [{
          name: 'Check-in',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'Check-out',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          height: 350,
          type: 'area'
        },
        colors: [
          ThemeColor.getCssVariableValue('--bs-primary'),
          ThemeColor.getCssVariableValue('--bs-info')
        ],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'day',
          categories: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
        },
        };

        var chart = new ApexCharts(document.querySelector("#ChartGuesttraffic"), options);
        chart.render();
      }
    },
    // END: Traffic Chart 3

    // START: 28 Traffic Chart 4
    trafficroomChart: function () {
      var cpv = e.select('#ChartTrafficRooms');
      if (e.isVariableDefined(cpv)) {
        // CHART: Page Views
        var options = {
          series: [70, 30],
          labels: ['Sold Out', 'Available'],
          chart: {
            height: 300,
            width: 300,
            offsetX: 0,
            type: 'donut',
            sparkline: {
              enabled: !0
            }
          },
          colors: [
            ThemeColor.getCssVariableValue('--bs-danger'),
            ThemeColor.getCssVariableValue('--bs-success')
          ],
          tooltip: {
            theme: "dark"
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
                height: 200,
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        };
        var chart = new ApexCharts(document.querySelector("#ChartTrafficRooms"), options);
        chart.render();
      }
    },
    // END: Traffic Chart 4

};
e.init();

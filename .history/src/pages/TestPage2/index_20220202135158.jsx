import React, { useEffect } from "react";
import gsap, { Linear, snap, TimelineMax, TweenLite } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { TweenMax } from "gsap/all";
import { Controller, Scene } from "scrollmagic";

import "./styles.scss";
export default function TestPage2() {
    useEffect(() => {
        var svg = document.querySelector("#Layer_1"),
          plane = document.querySelector(".plane"),
          pathString = document.querySelector("#pathCubic").attr("d"),
          pathCubic = snap.path.toCubic(pathString),
          arrayPath = [],
          quantity = 900,
          duration = svg.height(),
          position = {
            x: pathCubic[0].x,
            y: [pathCubic[0].y],
          },
          dot,
          i;
    
        var controller = new Controller();
    
        // function to measure how to keep element vertically centered
        function calcOffset() {
          var center =
              document.querySelector(window).scrollTop +
              window.innerHeight / 2 -
              plane.height() / 2,
            offset = plane.position().top,
            distance = center - offset;
        }
    
        // grab svg and turn it into x & y coords
        function setUpPoint(segment) {
          for (var i = 0; i < segment.length; i += 2) {
            //create a new object for the point so it can be passed to the bezier plugin
            var point = {};
            point.x = segment[i];
            point.y = segment[i + 1];
            //add the point to the array
            arrayPath.push(point);
          } //loop end
        }
    
        //set starting position for plane
        TweenLite.set(plane, {
          x: 0,
          y: -180,
        });
    
        // loop through the curves collection
        for (var i = 0; i < pathCubic.length; i++) {
          var segment = pathCubic[i],
            point;
          // 1st element returned in the array is a letter, remove it
          segment.shift();
          //call the function to set up the points based on the segment returned
          point = setUpPoint(segment);
        }
    
        // add looping plane to timeline
        var planeTL1 = new TimelineMax().add(
          TweenMax.to(plane, duration, {
            bezier: {
              values: arrayPath,
              type: "cubic",
              autoRotate: true,
            },
            ease: Linear.easeNone,
            onUpdate: calcOffset,
          })
        );
    
        var dotTweenTwo = TweenMax.to(position, quantity, {
          bezier: {
            values: arrayPath,
            type: "cubic",
          },
          ease: Linear.easeOut,
        });
    
        for (var i = 0; i < quantity; i++) {
          dotTweenTwo.time(i);
          //create each dot, add id, .dot class, set position, add it to the container.
          dot = document
            .querySelector("<div />", {
              id: "dot" + i,
            })
            .classList.add("dot")
            .css({
              left: position.x + "px",
              top: position.y + "px",
            })
            .appendTo(".container");
    
          planeTL1.set(
            dot,
            {
              visibility: "visible",
            },
            i * (duration / quantity) + 0.001
          );
        }
    
        // build scene
        var scene = new Scene({
          triggerElement: ".container",
          duration: duration,
        })
          .setTween(planeTL1)
          .addTo(controller)
          // when scroll direction changes, plane direction changes
          .addEventListener("update", function (e) {
            var st = e.target.controller().info("scrollDirection");
            if (st === "FORWARD") {
              plane.attr(
                "src",
                "http://static.indigoimages.ca/2016/shop/114450_img01_blueAirplane_45deg.png"
              );
            } else if (st === "REVERSE") {
              plane.attr(
                "src",
                "http://static.indigoimages.ca/114450_img01_blueAirplane_45deg__REVERSED.png"
              );
            }
          });
      });
  return (
    <div>
      <div className="">
        <div>
          <p className="scroll">scroll,</p>
          <div className="animated  bounce">
            <img
              src="http://static.indigoimages.ca/2016/shop/114450_img12_whiteAirplane_v3.png"
              alt="white plane"
              className="whitePlane"
            />
          </div>
          <div className="container" id="bezier">
            <img
              src="http://static.indigoimages.ca/2016/shop/114450_img01_blueAirplane_45deg.png"
              className="plane"
              id="plane"
            />
            <svg
              id="Layer_1"
              data-name="Layer 1"
              style={{ enableBackground: "new 0 0 940 3596.8" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 940 3596.8"
            >
              <path style={{ fill: "none", isolation: "isolate" }} />
              <path
                id="pathCubic"
                d="M-259.5,118.7c248.2,93.7,466.9,79.3,818.3,87.6c147.7,3.5,292.1,19.6,429.9,40.7s258.7,74.3,237.8,132
    c-24.1,66.6-208.5,101.6-368.4,125.2C608.5,541.2,359,578.1,109.4,614.9c-163.8,24.2-347.1,56-401.8,121.5
    c-68.4,81.8,114.5,166.5,318.8,197.3c204.3,30.8,431.3,27.9,642.5,50.3c211.2,22.5,426.3,86.1,423.7,172.2
    c-2.7,86.6-221.8,147.8-433,172s-442,28-630.7,72.5c-130.4,30.8-237.3,92.9-181.5,148.6c67.7,67.6,299.8,72.8,484.3,74.3
    c145.9,1.2,295.8,7.6,424.8,34.5s233.6,78,236.2,135.4c3.5,78.6-176.9,140.4-362.8,168.9c-185.9,28.6-391,36.4-569.8,71.3
    c-76.5,15-150,36.2-185,66.9c-52.6,46.3,0,103.6,98.2,136.4s231.2,45,359.8,47.1c174.1,2.9,350.4-10.4,521.9,1.7
    c171.5,12.2,346.7,61.4,352.8,130c7.2,81.7-211.2,134.1-399.5,168.5c-191.5,34.9-383.1,69.9-574.6,104.8
    C92,2715-70.3,2752.3-78.1,2813.6c-5.8,45.8,85,86.3,191.1,105.2c106,18.9,225.5,20.9,341.6,24.5c174.2,5.4,357.1,16.3,494.2,59
    c137.1,42.7,205.2,126.8,101.9,182.3c-83.4,44.8-365.8,105.6-498.2,124.8c-319.5,46.4-589.1,94.9-904,110.9"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

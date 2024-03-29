---
path: "/IBM-Crop-Simulator/"
date: 21/01/2024
title: "Crop Simulator"
skills: ["Python", "Blender", "Docker", "Stable Diffusion", "LoRA"]
thumbnail: "../images/crop.jpg"
featured: true
weblink: "https://github.com/Crop-Simulator/Python-API"
---

Working with a client from IBM, built a crop simulator for generating large, labelled datasets of cereal crops and weeds. Generated dataset was able to successfully train a computer vision system, MobileNetV3, to detect weeds and crops with 69.7% pixel accuracy.


The Crop Simulator consists of three sections: crop growth simulation, image rendering and image enhancemeng. The starting conditions consisting of crop field data, weather and season is fed into the simulator through a yaml file. This is used the procedurally generate an crop field to begin the crop simulation. Weather data is pulled from IBM's The Weather Company API to calculate daily precipitation, temperature and irradiance from a specified location.
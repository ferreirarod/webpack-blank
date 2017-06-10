/// <reference path="../node_modules/appstation/dist/index.d.ts" />

import "zone.js";
import "reflect-metadata";
import AppStation from "appstation";
import sampleAppInstance from "./ng-sample-app/app";
import Calculator from "./calculator";
import AccuWeather from "./accu-weather";

import "style-loader!appstation/dist/style.css";

new AppStation({
    apiKey: "AIzaSyAwqLT6tZ9eKRATdUqF8F9KztqtWw3ADN8",
    authDomain: "test-760a6.firebaseapp.com",
    databaseURL: "https://test-760a6.firebaseio.com",
    projectId: "test-760a6",
    storageBucket: "test-760a6.appspot.com",
    messagingSenderId: "956449971829"
}, [sampleAppInstance, new Calculator(), new AccuWeather()], { google: true });

console.log('webpack-blank sample app');
// https://michaelkolesidis.com
// Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

const projectList = [
    {
        name: 'cal',
        technologies: 'Typescript',
        summary: 'An interactive calendar used for producing the optimal fare(s) for my commute on NJ Transit rail.',
        repository: 'https://github.com/rgibbons-dev/cal',
        deployment: 'https://clevercommute.com/njt-ticket-picker/',
        visible: true
    },
    {
        name: 'monsweeper-ultra',
        technologies: 'React, Typescript, Zustand, Wouter',
        summary: 'A port of my `monsweeper` project to the browser.',
        repository: 'https://github.com/rgibbons-dev/monsweeper-ultra',
        deployment: '',
        visible: true
    },
    {
        name: 'rssed',
        technologies: 'Rust',
        summary: 'A CLI RSS feed reader.',
        repository: 'https://github.com/rgibbons-dev/rssed',
        deployment: '',
        visible: true,
    },
    {
        name: 'monsweeper',
        technologies: 'Elixir',
        summary: 'A CLI, minesweeper-inspired game demonstrating my knowledge of Elixir language features and capabilities.',
        repository: 'https://github.com/rgibbons-dev/monsweeper',
        deployment: '',
        visible: true
    },
    {
        name: 'five',
        technologies: 'Swift, SwiftUI',
        summary: 'A prototype of an app that serves to enhance Apple\'s built-in App Limits feature; instead of prompting the user with a screen that they can habitually bypass, you should "take five"! `five` runs on opening of your designated app that you\'d like to frequent less often, presenting a timer that the user must watch, with a button appearing once the countdown has completed. This button takes them to the app that they were initially intending to go to.',
        repository: 'https://github.com/rgibbons-dev/five',
        deployment: '',
        visible: true
    }
];
  
export default projectList;

// EMPTY PROJECT TEMPLATE

// {
//   name: "",
//   technologies: "",
//   summary: "",
//   repository: "",
//   deployment: "",
//   visible: true,
// },
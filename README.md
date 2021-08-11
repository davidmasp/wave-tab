# wave-tab

Wave tab is a mobile-first and computer compatible start
page for your favourite browser. It contains a
randomly generated wave in the top of the page making your
browser expirience a pleasant and relaxing and unique trip.

This page is hosted via github pages
[here](http://david.masponte.com/wave-tab).
You are also
free to fork or copy the code and include and personalize the
expirience.

## Preview

A mobile first starting page:


A capable desktop expirience:



## Usage

When launching the page your cursor will automatically be in the search bar.
You can type anything and press the enter key, then you will be redirected
to the search url from google.

The icons in the bottom part link common developer communities
like reddit, gmail, github and twitter. This might change in the future
and I want to provide the option to customize these icons.

### Commands

Currently, only 2 search commands are implemented. To run them use the keyword
`/<letter>` and type the rest of the string. Then press enter.

* `/g` Searchs in google search (also works as default)
* `/d` Searchs the input string in [DuckDuckGo](https://duckduckgo.com/)

![example gif](screenshots/ddg_example.gif)

## Tools used

To implement this start page I used basically HTML/CSS and Javascript.

To implement the wave pattern in the top I used the library
[p5js](https://github.com/processing/p5.js/) and
in particular took much of the concepts and inspiration from the
[coding train video about sin waves](https://www.youtube.com/watch?v=okfZRl4Xw-c).

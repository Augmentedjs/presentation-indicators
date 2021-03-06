# presentation-indicators

Augmented.js Next Presentation - Indicators Module

## Purpose

This is a small component that renders a loading bar (small animated line.)  There are multiple modes the component.  See the docs for more.  

_Note: Should use presentation-css 3.2.x or higher_

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [ProgressIndicator](#progressindicator)
    -   [Parameters](#parameters)
    -   [setInProgress](#setinprogress)
    -   [isInprogress](#isinprogress)
    -   [isComplete](#iscomplete)
    -   [setComplete](#setcomplete)
    -   [mode](#mode)
        -   [Properties](#properties)

## ProgressIndicator

**Extends View**

Progress Indicator class<br/>
Renders a progress indicator<br/>
Supports a mode option of

<ul>
<li>INDICATOR_MODE_INDETERMINATE</li>
<li>INDICATOR_MODE_DETERMINATE</li>
</ul>

### Parameters

-   `options`  

### setInProgress

Sets the state to in progress

### isInprogress

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if in progress

### isComplete

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if complete

### setComplete

Sets the state to complete

### mode

#### Properties

-   `mode` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The mode style of the Indicator

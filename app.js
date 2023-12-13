let defaultString = `

<p> Stories you click on will appear here. </p>


`

function clearView() {

    document.getElementById("current-view").innerHTML = defaultString;

}

function rng() {

    document.getElementById("rng-result").innerHTML =  Math.ceil(Math.random() * 100);
    
}


/*
Template Library Viewer

let displayString_ = `

<h3> Author </h3>
<p> Credits </p>
<br>
<hr>
<br>
<p>
Text Line
</p>
<br>
<p>

`

Template Script:

function _display() {

    document.getElementById("current-view").innerHTML = displayString;

}

*/
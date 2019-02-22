var textfield;
var output;
var submit;


function setup() {
    noCanvas();
    textfield = select("#input");
    output = select('#output');
    submit = select("#submit");
    submit.mousePressed(newText);
}

function  highlight() {
    //using 'this' identifies the actual thing that is triggering the event
    //and using .html() pulls out just the word in the element (instead of all of the code as well)
    console.log(this.html());

    //a variable to hold the word
    word = this.html();

    //if the word is more than 4 letters long, do the thing 
    if (word.length > 4) {

        //replace the word being hovered over with the new word 'rainbow'
        this.html('rainbow');
        //randomly set a color
        var c = color(random(255), random(255), random(255));
        //style rainbow with the new color style
        this.style('background-color', c);
    }
}

function newText() {
    var s = textfield.value();

    //anything that is not a letter or a number is the delimiter for the split
    // also includes periods and commas
    var words = s.split(/(\W+)/);
    //loop through the array of words
    for (var i = 0; i < words.length; i++) {
        //turns each word into a span element
        var span = createSpan(words[i]);
        //adds the span to an output paragraph (to make styling everyting easier)
        span.parent(output);

        //if the words[i] is a word (and not a space)
        if (!/\W+/.test(words[i])) {
            //styles the span in random colors
            //span.style('background-color', color(random(255), random(255), random(255)));

            //trigger the highlight function when the mouse is over the span
            span.mouseOver(highlight);
        }

    }
    console.log(words);


    //console.log(s);
    createP(s);

}

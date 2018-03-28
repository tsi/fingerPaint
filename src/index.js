var COLOURS = [ '#E3EB64', '#A7EBCA', '#FFFFFF', '#D8EBA7', '#868E80' ];
var radius = 0;
var drawing = false;

Sketch.create({

    container: document.getElementById( 'cnvs' ),
    autoclear: false,
    retina: 'auto',

    setup: function() {
        console.log( 'setup' );
    },

    update: function() {
        radius = 2 + abs( sin( this.millis * 0.003 ) * 50 );
    },

    // Event handlers
    keydown: function() {
        if ( this.keys.C ) this.clear();
    },

    touchstart: function() { drawing = true; },
    mousedown: function () { drawing = true; },
    touchend: function() { drawing = false; },
    mouseup: function() { drawing = false; },

    // Mouse & touch events are merged, so handling touch events by default
    touchmove: function() {
        if (drawing) {
            for ( var i = this.touches.length - 1, touch; i >= 0; i-- ) {

                touch = this.touches[i];

                this.lineCap = 'round';
                this.lineJoin = 'round';
                this.fillStyle = this.strokeStyle = COLOURS[ i % COLOURS.length ];
                this.lineWidth = radius;

                this.beginPath();
                this.moveTo( touch.ox, touch.oy );
                this.lineTo( touch.x, touch.y );
                this.stroke();
            }
        }
    }
});

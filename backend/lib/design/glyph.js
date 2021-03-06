const Hook = require('./hook');
const GlyphSelector = require('../svg_server/GlyphSelector');
const { link_length } = require('./properties');
/**
 * This class represents a glyph in a Visbol design
 */
class Glyph {

    /**
     * Below is the constructor for a glyph object.
     * @param {Object} glyphInfo - Instead of passing in separate parameters, I opted to pass
     * in a single glyph object referred to as glyphInfo. This is because I anticipate in some/many cases,
     * not all of the information will be present after parsing an SBOL file
     */
    constructor(glyphInfo) {
        if (glyphInfo.ranges) {
            this.ranges = glyphInfo.ranges.map((range) => [range.start, range.end]);
        }
        this.name = glyphInfo.name;
        this.id = glyphInfo.id;
        this.uri = glyphInfo.uri;
        this.type = glyphInfo.type;
        this.strand = glyphInfo.strand;
        this.isComposite = glyphInfo.isComposite;
        this.tooltip = glyphInfo.tooltip;
        this.hookedTo = glyphInfo.hookedTo;
        this.isMain = glyphInfo.isMain;
        this.root = glyphInfo.root;
        this.labelLocation = {
            x: 0,
            y: 0
        }
        this.isGlyph = true;
        this.glyphIndex = 0;
        this.coords = [0, 0];
        this.rendering = undefined;
        this.hooks = {
            north: null,
            south: null,
            east: null,
            west: null,
            link: null
        }
        this.visited = false;
        var glyph = GlyphSelector[this.type];
        if (!glyph) {
            glyph = GlyphSelector['no-glyph-assigned'];
        }
        this.dimensions = glyph.dimensions;
        this.defaultString = glyph.defaultString;
        this.inset = glyph.inset;
        this.link = glyph.link;
    }

    setCoords(x, y) {
        this.coords = [x, y];
    }

    /**
    * This is a recursive method that places all hooks and destination glyphs in the appropriate spot
    * @param {Display} display - the display that the glyph is in
    */
    placeSelfAndHooks(display, current_coords) {
        if(this.visited)
            return;
        this.visited = true;
        this.setLabelLocation();
        this.calibrateDisplay(display, this.inset);
        current_coords[0] = this.coords[0] + this.dimensions[0] + (link_length * 2);
        this.takenHooks().forEach(direction => {
            if (this.hooks[direction]) {
                const hook = this.hooks[direction];
                hook.placeHook(display);
                if (hook.destinationGlyph) {
                    hook.destinationGlyph.placeSelfAndHooks(display, current_coords);
                }
            }
        });
        display.toPlace.push(this);
    }

    setLabelLocation() {
        this.labelLocation.x = this.coords[0];
        this.labelLocation.y = this.coords[1] + this.dimensions[1] - this.inset;
        if (this.coords[1] !== 0) {
            this.labelLocation.y += this.inset;
        }
    }

    calibrateDisplay(display, inset) {
        var farthestX = this.coords[0] + this.dimensions[0];
        if (farthestX > display.width) {
            display.width = farthestX;
        }
        var farthestY = this.coords[1] + this.dimensions[1];
        if (farthestY > display.height) {
            display.height = farthestY;
        }
        if (inset) {
            if (inset > display.largestInset) {
                display.largestInset = inset;
            }
        }
    }

    connect(tip, direction) {
        // direction = direction the hook is facing.
        // for example, north would mean that the hook is connecting to the glyph's
        // southern link
        if(this.visited)
            return;
        switch (direction) {
            case 'north': {
                this.setCoords(tip.x - this.dimensions[0] / 2, tip.y);
                break;
            }
            default: {
                this.setCoords(tip.x, tip.y);
                break;
            }
        }
    }

    getLink(direction) {
        switch (direction) {
            case 'north': {
                if (this.coords[1] === 0) {
                    return { x: this.coords[0] + this.dimensions[0] / 2, y: this.coords[1] + this.dimensions[1] - this.inset };
                }
                return { x: this.coords[0] + this.dimensions[0] / 2, y: this.coords[1] + this.dimensions[1] };
            }
            case 'east': {
                return { x: this.coords[0] + this.dimensions[0], y: this.coords[1] + this.dimensions[1] / 2};
            }
            case 'link':
            default: {
                return { x: this.coords[0] + this.dimensions[0], y: this.coords[1] };
            }
        }
    }

    /**
     * This function hooks a glyph to another glyph
     * @param {Glyph} otherGlyph 
     * @param {string} direction 
     * @param {Hook} hook 
     */
    hookTo(otherGlyph, direction, type) {
        this.hooks[direction] = new Hook(this, otherGlyph, direction, type);
    }

    /**
     * This function returns a list of available hooks on the glyph
     */
    availableHooks() {
        const availableHooks = [];
        Object.keys(this.hooks).map(direction => {
            if (!this.hooks[direction]) {
                availableHooks.push(direction);
            }
        });
        return availableHooks;
    }

    /**
     * Returns a list of the hooks that have already been attached to the glyph
     */
    takenHooks() {
        const takenHooks = [];
        Object.keys(this.hooks).map(direction => {
            if (this.hooks[direction] != null) {
                takenHooks.push(direction);
            }
        });
        return takenHooks;
    }

    /**
     * Merges this glyph's hooks with other glyph's hooks
     * @param {Glyph} otherGlyph 
     */
    mergeHooks(otherGlyph) {
        const otherGlyphHooks = otherGlyph.takenHooks();
        otherGlyphHooks.map(direction => {
            if (this.hooks[direction] === null) {
                const hook = otherGlyph.hooks[direction];
                this.hookTo(hook.destinationGlyph, hook.direction, hook.type);
            }
        })
    }

    /**
     * 
     * @param {int} lowerBound - the lower bound glyph index (inclusive)
     * @param {int} upperBound - the upper bound glyph index (exclusive)
     */
    withinBounds(lowerBound, upperBound) {
        return this.glyphIndex >= lowerBound && this.glyphIndex < upperBound;
    }

}

module.exports = Glyph;
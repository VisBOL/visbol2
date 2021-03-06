const HookSelector = require('../svg_server/HookSelector');
const link_length = require('./properties').link_length;
/**
 * This class represents a hook, which represents any arrows or chainlink in the Visbol rendering
 */
class Hook {
    /**
     * Below is a constructor for a Hook object
     * @param {Glyph} startGlyph - the glyph where the start of the hook is attached
     * @param {Glyph} destinationGlyph  - the glyph where the end of the hook is attached
     * @param {String} direction - the direction the hook will be facing
     * @param {Object} type - the hook type
     */
    constructor(startGlyph, destinationGlyph, direction, type) {
        this.startGlyph = startGlyph;
        this.destinationGlyph = destinationGlyph;
        this.direction = direction;
        this.type = type;
        this.length = 0;
        this.lower = 0;
        this.rendering = undefined;
        this.name = 'hook';
        this.start = {
            x: 0,
            y: 0
        }
        this.tip = {
            x: 0,
            y: 0
        }
        if (this.destinationGlyph) {
            this.destinationGlyph.hookedTo = {
                startGlyph,
                direction,
            }
        }
        this.rotation = this.getRotation();
    }

    /**
     * This places the hook in the appropriate position
     */
    placeHook(display) {
        if (!(this.type === 'link')) {
            const hook = HookSelector[this.type];
            this.defaultString = hook.defaultString;
            this.length = hook.length;
            display.toPlace.push(this);
        }
        if (this.destinationGlyph && this.destinationGlyph.root === undefined)
            this.destinationGlyph.root = this.startGlyph.root;
        if(!this.startGlyph.root.updatedPos && this.destinationGlyph && this.destinationGlyph.root.id !== this.startGlyph.root.id) {
            this.connectRoots(display, this.destinationGlyph.root, this.startGlyph.root);
        }
        this.start = this.startGlyph.getLink(this.direction);
        this.tip = this.getTip(this.destinationGlyph);
        if (this.destinationGlyph) {
            this.destinationGlyph.connect(this.tip, this.direction);
            this.setDestinationGlyphIndex();
        }
        this.calibrateDisplay(display);
    }

    connectRoots(display, destinationRoot, startRoot) {
        if(!startRoot.updatedPos) {
            destinationRoot.connected.push(startRoot);
            startRoot.updatedPos = true;
            display.updatedRootLocation = true;
            display.roots = display.roots.filter(root => {
                return !(root.id === startRoot.id && root.uri === startRoot.uri);
            });
        }
        else if(!destinationRoot.updatedPos) {
            startRoot.connected.push(destinationRoot);
            destinationRoot.updatedPos = true;
            display.updatedRootLocation = true;
            display.roots = display.roots.filter(root => {
                return !(root.id === destinationRoot.id && root.uri === destinationRoot.uri);
            });
        }
    }

    getTip(destinationGlyph) {
        if (destinationGlyph && destinationGlyph.visited) {
            switch (this.direction) {
                case 'north': {
                    return { x: destinationGlyph.coords[0] + destinationGlyph.dimensions[0] / 2, y: destinationGlyph.coords[1] };;
                }
                default: {
                    return { x: destinationGlyph.coords[0], y: destinationGlyph.coords[1] };
                }
            }
        }
        switch (this.direction) {
            case 'link': {
                return {x: this.start.x + link_length, y: this.start.y};
            }
            case 'north': {
                return { x: this.start.x, y: this.start.y + this.length + this.startGlyph.inset };
            }
            default: {
                return { x: this.start.x + this.length, y: this.start.y };
            }
        }
    }

    /**
     * Returns the amount of degrees the hook should be rotated
     */
    getRotation() {
        switch (this.direction) {
            case 'north': {
                return 0;
            }
            case 'east': {
                return 90;
            }
            case 'south': {
                return 270;
            }
            case 'west': {
                return 180;
            }
        }
    }

    calibrateDisplay(display) {
        var farthestX = Math.max(this.tip.x, this.start.x);
        if (farthestX > display.width) {
            display.width = farthestX;
        }
        var farthestY = Math.max(this.tip.y, this.start.y);
        if (farthestY > display.height) {
            display.height = farthestY;
        }
    }

    /**
     * Sets the index of destination glyph in the display
     */
    setDestinationGlyphIndex() {
        switch (this.direction) {
            case 'east': {
                this.destinationGlyph.glyphIndex = this.startGlyph.glyphIndex + 1;
                break;
            }
            case 'west': {
                this.destinationGlyph.glyphIndex = this.startGlyph.glyphIndex - 1;
                break;
            }
            case 'north':
            case 'south': {
                this.destinationGlyph.glyphIndex = this.startGlyph.glyphIndex;
                break;
            }
        }
    }

    /**
     * Determines if hook's destination is within the bounds
     * @param {int} lowerBound - the lower bound of the interval (inclusive)
     * @param {int} upperBound - the upper bound of the interval (exclusive)
     */
    withinBounds(lowerBound, upperBound) {
        return this.startGlyph.withinBounds(lowerBound, upperBound) &&
            this.destinationGlyph.withinBounds(lowerBound, upperBound);
    }
}

module.exports = Hook;
/**
 * This class represents the Visbol rendered display. It allows to deletion and adding of glyphs
 */
class Display {
    constructor(glyphDictionary, roots, topologies) {
        this.glyphDictionary = glyphDictionary;
        this.roots = roots;
        this.topologies = topologies;
        this.height = 0;
        this.width = 0;
        this.largestInset = 0;
        this.toPlace = [];
        this.backbones = [];
        this.updatedRootLocation = false;
    }

    /**
     * Return the glyph dictionary
     */
    getGlyphDictionary() {
        return this.glyphDictionary;
    }

    /**
     * Return toPlace array
     */
    getToPlace() {
        return this.toPlace();
    }

    /**
     * This method configures the glyphs for rendering
     */
    renderGlyphs() {
        var current_coords = [0, 0];
        this.backbones = [];
        this.roots.forEach(root => {
            this.renderRootsRecursively(root, current_coords);
        });
        if(this.updatedRootLocation) {
            this.updatedRootLocation = false;
            this.toPlace.forEach(placement => {
                if (placement.visited)
                    placement.visited = false;
            });
            this.renderGlyphs();
        }

        // stretch backbones
        this.toPlace.forEach(item => {
            if(item.root) {
                if((item.root.backbone.end !== undefined) && (item.root.backbone.end < item.coords[0] + item.dimensions[0])) {
                    item.root.backbone.end = item.coords[0] + item.dimensions[0];
                }
                this.backbones.push(item.root.backbone);
            }
        });
    }

    renderRootsRecursively(root, current_coords) {
        var found = false;
        this.glyphDictionary[root.uri].forEach(glyph => {
            if (!found && root.id === glyph.id) {
                if (!glyph.visited)
                    glyph.setCoords(current_coords[0], current_coords[1]);
                glyph.placeSelfAndHooks(this, current_coords);
                if(glyph.hooks['link']) {
                    root.backbone.start = glyph.coords[0];
                    root.backbone.end = glyph.coords[0];
                }
                found = true;
            }
            
        });
        root.connected.forEach(otherRoot => {
            this.renderRootsRecursively(otherRoot, current_coords);
        });
    }

}

module.exports = Display;
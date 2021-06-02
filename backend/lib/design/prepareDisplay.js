const Display = require('./display');
const Glyph = require('./glyph');
const prepareInfo = require('../gatherInfo/prepareInfo');

/**
 * This function creates a Display instance, which is used to edit/render all relevant glyphs
 * @param {Object} displayInfo - the information needed to construct the display
 */
function prepareDisplay(displayInfo) {
    const extractedInfo = prepareInfo(displayInfo);
    const glyphDictionary = {};
    extractedInfo.glyphList.forEach(glyphInfo => {
        addGlyphToDictionary(glyphInfo, glyphDictionary);
    });
    const checkHookedToAfterHookingFinished = [];
    extractedInfo.hookList.forEach(hookInfo => {
        hookGlyphsTogether(hookInfo, glyphDictionary, checkHookedToAfterHookingFinished);
    });
    mergeAllQuestionableHooks(checkHookedToAfterHookingFinished, glyphDictionary);
    extractedInfo.rootList = reviewRootList(extractedInfo.rootList, glyphDictionary);
    return new Display(glyphDictionary, extractedInfo.rootList, extractedInfo.topologies);
}

function addGlyphToDictionary(glyphInfo, glyphDictionary) {
    if (!glyphDictionary[glyphInfo.uri])
    {
        glyphDictionary[glyphInfo.uri] = [];
        glyphDictionary[glyphInfo.uri].push(new Glyph(glyphInfo));
    }
    else
    {
        glyphDictionary[glyphInfo.uri].forEach(glyph => {
            if (glyph.id === glyphInfo.id)
                return;
        })
        glyphDictionary[glyphInfo.uri].push(new Glyph(glyphInfo));
    }
}

function hookGlyphsTogether(hookInfo, glyphDictionary, checkHookedToAfterHookingFinished) {
    const potentialStartGlyphs = glyphDictionary[hookInfo.startGlyph];
    const potentialDestinationGlyphs = glyphDictionary[hookInfo.destinationGlyph];
    var startGlyph = undefined;
    var destinationGlyph = undefined;
    potentialStartGlyphs.forEach(glyph => {
        if (glyph.id === hookInfo.startGlyphId) {
            startGlyph = glyph;
            if (potentialStartGlyphs.length > 1 && !startGlyph.isMain)
                checkHookedToAfterHookingFinished.push(startGlyph);
        }
    });
    if (potentialDestinationGlyphs) {
        potentialDestinationGlyphs.forEach(glyph => {
            if (glyph.id === hookInfo.destinationGlyphId) {
                destinationGlyph = glyph;
            }
        });
    }
    startGlyph.hookTo(destinationGlyph, hookInfo.direction, hookInfo.type);
}

function mergeAllQuestionableHooks(checkHookedToAfterHookingFinished, glyphDictionary) {
    checkHookedToAfterHookingFinished.forEach(glyph => {
        if(glyph.hookedTo === undefined) {
            mergeHooksWithMainGlyph(glyph, glyphDictionary);
        }
    })
}

function mergeHooksWithMainGlyph(questionable_glyph, glyphDictionary) {
    const potentialNewStartGlyphs = glyphDictionary[questionable_glyph.uri];
    potentialNewStartGlyphs.forEach(glyph => {
        if (glyph.isMain) {
            glyph.mergeHooks(questionable_glyph);
        }
    });
}

function reviewRootList(rootList, glyphDictionary) {
    rootList = rootList.filter(root => {
        const glyphInstances = glyphDictionary[root.uri];
        return !glyphHookedToAnything(glyphInstances, root.id);
    });
    return rootList;
}

function glyphHookedToAnything(glyphs, id=undefined) {
    var hookedToAnything = false;
    var specificFound = false;
    glyphs.forEach(glyph => {
        if (!specificFound && glyph.hookedTo !== undefined) {
            hookedToAnything = true;
        }
        else if (glyph.id === id && glyph.hookedTo === undefined && glyph.takenHooks().length > 0) {
            specificFound = true;
            hookedToAnything = false;
        }
        else if (specificFound) {
            if (glyph.id === id) {
                hookedToAnything = true;
            }
        }
    });
    return hookedToAnything;
}

module.exports = prepareDisplay;
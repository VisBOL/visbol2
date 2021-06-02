const SBOLDocument = require('sboljs');
const getDisplayListComponents = require('visbol').getDisplayList;
const getInteractionList = require('visbol').getInteractionList;

const getDisplayList = getDisplayListComponents.getDisplayList;

function createDisplay(source) {
   var promise = new Promise(function(resolve, reject) {
       SBOLDocument.loadRDF(source, function (err, sbol) {
           if (err) {
               console.log('error occured: ');
               console.log(err);
               reject(err);
           }
           else {
   
               var component = {
                   segments: []
               }
   
               sbol.componentDefinitions.forEach(function (componentDefinition) {
   
                   component.segments = component.segments.concat(getDisplayList(componentDefinition).components[0].segments[0])
               });
   
               var interactions = [];
   
               //processing module definition
               sbol.moduleDefinitions.forEach(function (moduleDefinition) {
                   let currentInteractions = getInteractionList(moduleDefinition);
                   for (let i in currentInteractions) {
                       interactions.push(currentInteractions[i]);
                   }
               });
   
               const displayList = {
                   version: 1,
                   components: [
                       component
                   ],
                   interactions,
               }

               resolve(displayList);
           }})
   });
   return promise;
}

module.exports = {
   createDisplay: createDisplay
}
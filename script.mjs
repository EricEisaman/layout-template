'use strict';

import {simpleHeading, colorHeading} from './templates.mjs';

var config = {
    content: [{
        type: 'row',
        content: [{
            title: 'Simple Tool',
            type:'component',
            componentName: 'simple',
            componentState: { text: 'Component 1' }
        },
        {
            title: 'Simple Tool',
            type:'component',
            componentName: 'simple',
            componentState: { text: 'Component 2' }
        }]
    }]
};

var myLayout = new window.GoldenLayout( config, $('#layoutContainer') );




myLayout.registerComponent( 'simple', function( container, state ){
    container.getElement().html(simpleHeading(state));
});

myLayout.registerComponent( 'color', function( container, state ){
    container.getElement().html(colorHeading(state));
});

myLayout.init();

var addMenuItem = function( title, type, text='Default text.' ) {
    var element = $( '<li>' + title + '</li>' );
    $( '#menuContainer' ).append( element );

   var newItemConfig = {
        title: title,
        type: 'component',
        componentName: type,
        componentState: { text: text }
    };
  
    myLayout.createDragSource( element, newItemConfig );
};

addMenuItem( 'Color Tool', 'color' );
addMenuItem( 'Simple Tool', 'simple' );


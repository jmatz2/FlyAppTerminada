$.mobile.document.on( "listviewcreate", "#filter-menu-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        
        if ( !form ) {
            input = $( "<input data-type='search'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        
        listview.filterable({ input: input });
    })
    
    .on( "pagebeforeshow pagehide", "#filter-menu-dialog", function( e ) {
        var form = $( "#filter-menu-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });
    
    
$.mobile.document.on( "listviewcreate", "#filter-menu1-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu1-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        
        if ( !form ) {
            input = $( "<input data-type='search'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu1-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        
        listview.filterable({ input: input });
    })
    
    .on( "pagebeforeshow pagehide", "#filter-menu1-dialog", function( e ) {
        var form = $( "#filter-menu1-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu1-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });

    
$.mobile.document.on( "listviewcreate", "#filter-menu2-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu2-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        
        if ( !form ) {
            input = $( "<input data-type='search'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu2-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        
        listview.filterable({ input: input });
    })
    
    .on( "pagebeforeshow pagehide", "#filter-menu2-dialog", function( e ) {
        var form = $( "#filter-menu2-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu2-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });


$.mobile.document.on( "listviewcreate", "#filter-menu3-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu3-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        
        if ( !form ) {
            input = $( "<input data-type='search'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu3-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        
        listview.filterable({ input: input });
    })
    
    .on( "pagebeforeshow pagehide", "#filter-menu3-dialog", function( e ) {
        var form = $( "#filter-menu3-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu3-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });


$.mobile.document.on( "listviewcreate", "#filter-menu4-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu4-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        
        if ( !form ) {
            input = $( "<input data-type='search'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu4-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        
        listview.filterable({ input: input });
    })
    
    .on( "pagebeforeshow pagehide", "#filter-menu4-dialog", function( e ) {
        var form = $( "#filter-menu4-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu4-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });



$.mobile.document.on( "listviewcreate", "#filter-menu5-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu5-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        
        if ( !form ) {
            input = $( "<input data-type='search'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu5-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        
        listview.filterable({ input: input });
    })
    
    .on( "pagebeforeshow pagehide", "#filter-menu5-dialog", function( e ) {
        var form = $( "#filter-menu5-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu5-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });



$.mobile.document.on( "listviewcreate", "#filter-menu6-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu6-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        
        if ( !form ) {
            input = $( "<input data-type='search'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu6-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        
        listview.filterable({ input: input });
    })
    
    .on( "pagebeforeshow pagehide", "#filter-menu6-dialog", function( e ) {
        var form = $( "#filter-menu6-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu6-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });



$.mobile.document.on( "listviewcreate", "#filter-menu7-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu7-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        
        if ( !form ) {
            input = $( "<input data-type='search'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu7-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        
        listview.filterable({ input: input });
    })
    
    .on( "pagebeforeshow pagehide", "#filter-menu7-dialog", function( e ) {
        var form = $( "#filter-menu7-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu7-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });



$.mobile.document.on( "listviewcreate", "#filter-menu8-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu8-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        
        if ( !form ) {
            input = $( "<input data-type='search'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu8-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        
        listview.filterable({ input: input });
    })
    
    .on( "pagebeforeshow pagehide", "#filter-menu8-dialog", function( e ) {
        var form = $( "#filter-menu8-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu8-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });



$.mobile.document.on( "listviewcreate", "#filter-menu9-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu9-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        
        if ( !form ) {
            input = $( "<input data-type='search'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu9-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        
        listview.filterable({ input: input });
    })
    
    .on( "pagebeforeshow pagehide", "#filter-menu9-dialog", function( e ) {
        var form = $( "#filter-menu9-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu9-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });    



$.mobile.document.on( "listviewcreate", "#filter-menu10-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu10-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        
        if ( !form ) {
            input = $( "<input data-type='search'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu10-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        
        listview.filterable({ input: input });
    })
    
    .on( "pagebeforeshow pagehide", "#filter-menu10-dialog", function( e ) {
        var form = $( "#filter-menu10-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu10-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });    


$.mobile.document.on( "listviewcreate", "#filter-menu11-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu11-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );
        
        if ( !form ) {
            input = $( "<input data-type='search'></input><br>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu11-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }
        
        listview.filterable({ input: input });
    })
    
    .on( "pagebeforeshow pagehide", "#filter-menu11-dialog", function( e ) {
        var form = $( "#filter-menu11-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu11-listbox" );
        form
            .find( "input" )
            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });    
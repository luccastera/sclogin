// ==========================================================================
// Project:   Login - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Login */

// This page describes the main user interface for your application.  
Login.mainPage = SC.Page.design({

  toolbar: SC.outlet('mainPane.toolbar'),

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    
    defaultResponder: 'Login.statechart',
    
    childViews: 'toolbar mainView'.w(),
    
    toolbar: Toolbar.design({
      layout: {top: 0, left: 0, right: 0, height: 40, centerY: 0 },
      title: 'Login States',
    }),
    
    mainView: SC.View.design({
      layout: {top: 40, left: 0, right: 0, bottom: 0},
      backgroundColor: '#fff'
    })

  }),
  
  loginPane: SC.Pane.design({
  })

});

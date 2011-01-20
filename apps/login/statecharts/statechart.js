Login.statechart = Ki.Statechart.create({

  rootState: Ki.State.design({
    initialSubstate: 'loggedOut',
    
    /********************************** loggedOut state **********************************/
    loggedOut: Ki.State.design({
    
      enterState: function() {
        if (Login.getPath('mainPage.mainPane.toolbar')) { 
         Login.getPath('mainPage.mainPane.toolbar').goLoggedOut();
        }
      },
      
      exitState: function() {
        
      }
    
    }),
    
    /********************************** loggedIn state **********************************/
    loggedIn: Ki.State.design({
      enterState: function() {
        Login.getPath('mainPage.mainPane.toolbar').goLoggedIn();
      },
      
      exitState: function() {
        
      }
    }),
    
    /********************************** loginIn state **********************************/
    loginIn: Ki.State.design({
      enterState: function() {
        Login.getPath('loginPage.mainPane').append();
        Login.getPath('mainPage.mainPane.toolbar').goLoginIn();
        Login.getPath('loginPage.mainPane.contentView').gotoReady();
      },
      
      exitState: function() {
        Login.getPath('loginPage.mainPane').remove();
      }
    })
  })

});

Login.statechart.initStatechart();

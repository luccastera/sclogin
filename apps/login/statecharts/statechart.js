Login.statechart = Ki.Statechart.create({

  rootState: Ki.State.design({
    initialSubstate: 'loggedOut',
    
    /********************************** loggedOut state **********************************/
    loggedOut: Ki.State.design({
    
      enterState: function() {
        if (Login.mainPage ) {
         Login.mainPage.get('toolbar').goLoggedOut();
        }
      },
      
      exitState: function() {
        
      }
    
    }),
    
    /********************************** loggedIn state **********************************/
    loggedIn: Ki.State.design({
      enterState: function() {
        Login.mainPage.get('toolbar').goLoggedIn();
      },
      
      exitState: function() {
        
      }
    }),
    
    /********************************** loginIn state **********************************/
    loginIn: Ki.State.design({
      enterState: function() {
        Login.loginPage.get('mainPane').append();
        Login.mainPage.get('toolbar').goLoginIn();
        Login.loginPage.get('contentView').gotoReady();
      },
      
      exitState: function() {
        Login.loginPage.get('mainPane').remove();
      }
    })
  })

});

Login.statechart.initStatechart();

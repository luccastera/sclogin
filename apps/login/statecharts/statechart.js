Login.statechart = Ki.Statechart.create({
  
  // statechart below

  rootState: Ki.State.design({
    initialSubstate: 'loggedOut',

    /********************************** loggedOut state **********************************/
    loggedOut: Ki.State.design({

      enterState: function() {
        if (Login.mainPage ) {
         Login.mainPage.get('toolbar').logout();
        }
      },

      beginLogin: function() {
        this.gotoState('loginIn');
      }
    
    }),
    
    /********************************** loggedIn state **********************************/
    loggedIn: Ki.State.design({
      enterState: function() {
        Login.mainPage.get('toolbar').endLogin();
      },
      logout: function() {
        this.gotoState('loggedOut');
      }
    }),
    
    /********************************** loginIn state **********************************/
    loginIn: Ki.State.design({

      enterState: function() {
        Login.loginPage.get('mainPane').append();
        Login.mainPage.get('toolbar').beginLogin();
        Login.loginPage.get('contentView').ready();
      },
      
      exitState: function() {
        Login.loginPage.get('mainPane').remove();
      },
      
      endLogin: function() {
        this.gotoState('loggedIn');
      },
      logout: function() {
        this.gotoState('loggedOut');
      }
    })
  })

});

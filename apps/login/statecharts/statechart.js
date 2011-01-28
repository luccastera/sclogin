Login.statechart = Ki.Statechart.create({

  // external API
  beginLogin: function() {
      this.gotoState('loginIn');
  },
  endLogin: function() {
    this.gotoState('loggedIn');
  },
  logout: function() {
    this.gotoState('loggedOut');
  },
  
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
      
      exitState: function() {
        
      }
    
    }),
    
    /********************************** loggedIn state **********************************/
    loggedIn: Ki.State.design({
      enterState: function() {
        Login.mainPage.get('toolbar').endLogin();
      },
      
      exitState: function() {
        
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
      }
    })
  })

});

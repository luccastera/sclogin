Login.loginPage = SC.Page.design({

  contentView: SC.outlet('mainPane.contentView'),

  mainPane: SC.PanelPane.design({
  
    defaultResponder: 'Login.statechart',
  
    layout: { centerX: 0, centerY: 0, width: 400, height: 250},
    contentView: Login.LoginForm.design({
      backgroundColor: '#333',
      loginAction: 'endLogin',
      logoutAction: 'logout'
    })
  })

});

Login.loginPage = SC.Page.design({

  mainPane: SC.PanelPane.design({
    layout: { centerX: 0, centerY: 0, width: 400, height: 250},
    contentView: LoginForm.design({
      backgroundColor: '#333'
    })
  })

});

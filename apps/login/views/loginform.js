Login.LoginForm = SC.View.extend({

  classNames: ['login-form'],
  
  state: 'ready',
  logState: NO,
  
  loginTarget: null,
  loginAction: null,
  logoutTarget: null,
  logoutAction: null,
  
  // external API
  ready: function() {
    this.gotoReady();
  },
  
  // internal API
  
  gotoSubmitted: function() {
    this.state = 'submitted';
    if (this.logState) console.log(this.state);
    var email = SC.CoreQuery('#user_email').val();
    var password = SC.CoreQuery('#user_password').val();
    this.fakeLogin(email, password);
    this.displayDidChange();
  },
  
  gotoReady: function() {
    this.state = 'ready';
    if (this.logState) console.log(this.state);
    this.displayDidChange();
  },
  
  gotoError: function() {
    this.state = 'error';
    if (this.logState) console.log(this.state);
    this.displayDidChange();
  },
  
  fakeLogin: function(email,password) {
    var form = this;
    this.invokeLater(function() {
      if (parseInt(Date.now().toString()[10]) > 5 /* fake/randomize login is successful */) {
        form.gotoReady();
        var rootResponder =  this.getPath('pane.rootResponder');
        this.target = this.get('loginTarget') || null;
        this.action = this.get('loginAction');
        if(rootResponder) {
          rootResponder.sendAction(this.action, this.target, this, this.get('pane'));
        }
      } else {
        form.gotoError();
      }
    }, 2000);
  },
  
  render: function(context,firstTime ) {
    if (firstTime) {
		  context.push('<div id="loginLoading" style="display:none">please wait...</div><h3>Log In</h3>',
		    '<div id="loginError" style="display:none">Invalid Login</div>',
		    '<table>',
		    '<tr><td>Email</td><td><input id="user_email" type="text" /></td></tr>',
		    '<tr><td>Password</td><td><input id="user_password" type="password" /></td></tr>',
		    '</table>',
		    '<button id="loginButton">Log In</button>&nbsp;&nbsp;<span id="cancelSpan">Cancel</span>');
      }
      
      if (this.state === 'submitted') {
        SC.CoreQuery('div#loginLoading').show();
        SC.CoreQuery('div#loginError').hide();
        SC.CoreQuery('button#loginButton').addClass('disabled');
        SC.CoreQuery('span#cancelSpan').hide();
      } else if (this.state === 'ready') {
        SC.CoreQuery('span#cancelSpan').show();
        SC.CoreQuery('button#loginButton').removeClass('disabled');
        SC.CoreQuery('div#loginLoading').hide();
        SC.CoreQuery('div#loginError').hide();
      } else if (this.state === 'error') {
        SC.CoreQuery('span#cancelSpan').show();
        SC.CoreQuery('div#loginLoading').hide();
        SC.CoreQuery('div#loginError').show();
        SC.CoreQuery('button#loginButton').removeClass('disabled');
      }
  },
  
  click: function(evt) {
    var target = evt.target;
    if (target.id === 'loginButton') {
      if (this.state === 'ready' || this.state === 'error') {
        this.gotoSubmitted();
      }
    } else if (target.id === 'cancelSpan') {
      this.gotoReady();
      var rootResponder = this.getPath('pane.rootResponder');
      this.target = this.get('logoutTarget') || null;
      this.action = this.get('logoutAction');
      if(rootResponder) {
        rootResponder.sendAction(this.action, this.target, this, this.get('pane'));
      }
    }
  }

});

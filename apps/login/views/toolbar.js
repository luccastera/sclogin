Login.Toolbar = SC.View.extend({

  classNames: ['toolbar'],
  title: "default title",
  state: null,
  logState: NO,
  
  logoutTarget: null,
  logoutAction: null,
  
  loginTarget: null,
  loginAction: null,
  
  init: function() {
    sc_super();
    this.goLoggedOut();
  },
  
  
  // Public API
  
  logout: function() {
    this.goLoggedOut();
  },
  
  beginLogin: function() {
    this.goLoginIn();
  },
  
  endLogin: function() {
    this.goLoggedIn();
  },
  
  // Internal API
  
  goLoggedOut: function() {
    this.state = 'loggedOut';
    if (this.logState) console.log(this.state);
    this.displayDidChange();
  },
  
  goLoginIn: function() {
    this.state = 'loginIn';
    if (this.logState) console.log(this.state);
    this.displayDidChange();
  },
  
  goLoggedIn: function() {
    this.state = 'loggedIn';
    if (this.logState) console.log(this.state);
    this.displayDidChange();
  },
  
  render: function(context, firstTime) {
    if (firstTime) {
      context.push('<div id="loggedIn-status"><span id="login">Log in</span></div>').push('<h2>' , this.title , '</h2>');
    }
    var state = this.state;
    if (state === 'loggedOut') {
      SC.CoreQuery('span#login').html("Log in");
      SC.CoreQuery('span#login').removeClass('notclickable');
    } else if (state === 'loginIn') {
      SC.CoreQuery('span#login').html("");
      SC.CoreQuery('span#login').addClass('notclickable');
    } else if (state === 'loggedIn') {
      SC.CoreQuery('span#login').html("Log out");
      SC.CoreQuery('span#login').removeClass('notclickable');
    }
  },
  
  mouseDown: function(evt) {
    var target = SC.CoreQuery(evt.target);
    var state = this.state;
    var rootResponder = this.getPath('pane.rootResponder');
    if (target.attr('id') === 'login') {
      if (state === 'loggedOut') {
        this.target = this.get('loginTarget') || null;
        this.action = this.get('loginAction');
      } else if (state === 'loggedIn') {
        this.target = this.get('logoutTarget') || null;
        this.action = this.get('logoutAction');
      }
      
      if(rootResponder) {
        rootResponder.sendAction(this.action, this.target, this, this.get('pane'));
      }
      
    }
  }
  
});

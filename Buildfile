# ===========================================================================
# Project:   Login
# Copyright: ©2011 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => [:sproutcore, :ki]

proxy "/login", :to => "localhost:4567"

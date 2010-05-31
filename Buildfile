# ===========================================================================
# Project:   AddressBook
# Copyright: ©2010 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore
proxy "/contacts", :to => "10.95.67.11:8080"
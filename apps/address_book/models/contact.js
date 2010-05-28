// ==========================================================================
// Project:   AddressBook.Contact
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
AddressBook.Contact = SC.Record.extend(
/** @scope AddressBook.Contact.prototype */ {
    firstName: SC.Record.attr(String),
    lastName: SC.Record.attr(String),
    mobileNo: SC.Record.attr(String),
    emailId: SC.Record.attr(String),
    age: SC.Record.attr(Number),
    state: SC.Record.attr(String),
    country: SC.Record.attr(String),
    fullName: function () {
        return "%@ %@".fmt(this.get('firstName'), this.get('lastName'));
    } .property('firstName', 'lastName').cacheable()
}) ;

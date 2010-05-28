// ==========================================================================
// Project:   AddressBook.addContactController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
AddressBook.addContactController = SC.ObjectController.create(
/** @scope AddressBook.addContactController.prototype */{

// TODO: Add your own code here.
storeKeyForContact: "",
firstName: "",
lastName: "",
mobileNo: "",
emailId: "",
age: "",
state: "",
country: "",
addContactVisible: NO,
addNew: YES,

saveBtnText: function () {
    return (this.addNew) ? "Save Contact" : "Update Contact";
} .property('addNew').cacheable(),

showAddContact: function () {
    this.resetValues();
    this.set('addContactVisible', YES);
    AddressBook.contactsController.set('showContactDetails', NO);
    return YES;
},

resetValues: function () {
    this.set('firstName', '');
    this.set('lastName', '');
    this.set('mobileNo', '');
    this.set('emailId', '');
    this.set('age', '');
    this.set('state', '');
    this.set('country', '');
    this.set('storeKeyForContact', '');
    this.set('addNew', YES);
},

cancelSave: function () {
    this.set('addContactVisible', NO);
    AddressBook.contactsController.set('showContactDetails', YES);
    this.resetValues();
    return YES;
},

saveContact: function () {
    if (this.addNew) {
        AddressBook.store.createRecord(AddressBook.Contact, { firstName: this.get('firstName'), lastName: this.get('lastName'), country: this.get('country'), mobileNo: this.get('mobileNo'), emailId: this.get('emailId'), state: this.get('state'), age: this.get('age') });
    }
    else {
        var rec = AddressBook.store.find(AddressBook.Contact, AddressBook.store.idFor(this.storeKeyForContact));
        rec.set('firstName', this.get('firstName'));
        rec.set('lastName', this.get('lastName'));
        rec.set('mobileNo', this.get('mobileNo'));
        rec.set('emailId', this.get('emailId'));
        rec.set('age', this.get('age'));
        rec.set('state', this.get('state'));
        rec.set('country', this.get('country'));
        rec.commitRecord();
        AddressBook.contactsController.selectObject(AddressBook.contactsController.objectAt(-1));
    }
    this.set('addContactVisible', NO);
    AddressBook.contactsController.set('showContactDetails', YES);
    this.resetValues();
    return YES;
},

addressCount: function () {
    return this.length();
} .property('content').cacheable()

});

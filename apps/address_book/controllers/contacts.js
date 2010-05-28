// ==========================================================================
// Project:   AddressBook.contactsController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
AddressBook.contactsController = SC.ArrayController.create({
    /** @scope AddressBook.contactsController.prototype */

    firstTime: YES,

    isEditVisible: function () {
        if (this.get('firstTime')) {
            var sel = this.get('selection').get('firstObject');
            if (sel != undefined) {
                this.set('firstTime', NO);
                return YES;
            }
            return NO;
        } else {
            return YES;
        }
    } .property('selection').cacheable(),
    showEditContact: function () {
        var sel = this.get('selection').get('firstObject');
        var key = sel.get('storeKey');
        AddressBook.addContactController.set('firstName', this.get('firstName'));
        AddressBook.addContactController.set('lastName', this.get('lastName'));
        AddressBook.addContactController.set('mobileNo', this.get('mobileNo'));
        AddressBook.addContactController.set('emailId', this.get('emailId'));
        AddressBook.addContactController.set('state', this.get('state'));
        AddressBook.addContactController.set('age', this.get('age'));
        AddressBook.addContactController.set('country', this.get('country'));
        AddressBook.addContactController.set('storeKeyForContact', key);
        AddressBook.addContactController.set('addContactVisible', YES);
        this.set('showContactDetails', NO);
        AddressBook.addContactController.set('addNew', NO);
        return YES;
    },
    deleteContact: function () {
        var sel = this.get('selection').get('firstObject');
        if (sel != undefined) {
            var key = sel.get('id');
            AddressBook.store.destroyRecord(AddressBook.Contact, key);
            this.selectObject(this.objectAt(0));
        }
    },
    showContactDetails: YES,
    allowEdit: NO,
    firstName: function () {
        var sel = this.get('selection').get('firstObject');
        if (sel != undefined) {
            return sel.get('firstName');
        }
        return "";
    } .property('selection').cacheable(),

    lastName: function () {
        var sel = this.get('selection').get('firstObject');
        if (sel != undefined) {
            return sel.get('lastName');
        }
        return "";
    } .property('selection').cacheable(),

    mobileNo: function () {
        var sel = this.get('selection').get('firstObject');
        if (sel != undefined) {
            return sel.get('mobileNo');
        }
        return "";
    } .property('selection').cacheable(),
    emailId: function () {
        var sel = this.get('selection').get('firstObject');
        if (sel != undefined) {
            return sel.get('emailId');
        }
        return "";
    } .property('selection').cacheable(),
    age: function () {
        var sel = this.get('selection').get('firstObject');
        if (sel != undefined) {
            return sel.get('age');
        }
        return "";
    } .property('selection').cacheable(),
    state: function () {
        var sel = this.get('selection').get('firstObject');
        if (sel != undefined) {
            return sel.get('state');
        }
        return "";
    } .property('selection').cacheable(),
    country: function () {
        var sel = this.get('selection').get('firstObject');
        if (sel != undefined) {
            return sel.get('country');
        }
        return "";
    } .property('selection').cacheable(),

    addressCount: function () {
        var len = this.get('length'), ret;
        if (len && len > 0) {
            ret = len === 1 ? "1 Contact" : "%@ Contacts".fmt(len);
        } else ret = "No Contats Available";
        return ret;
    }.property('length').cacheable()

});

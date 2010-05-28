// ==========================================================================
// Project:   AddressBook.ContactDataSource
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
AddressBook.ContactQuery = SC.Query.remote(AddressBook.Contact);

AddressBook.ContactDataSource = SC.DataSource.extend(
/** @scope AddressBook.ContactDataSource.prototype */{

fetch: function (store, query) {
    if (query === AddressBook.ContactQuery) {
        SC.Request.getUrl('/contacts/AddressBookServlet').json()
    	      .notify(this, 'didFetchContacts', store, query)
    	      .send();
        return YES; 
    }
    return NO;
},

didFetchContacts: function (response, store, query) {
    if (SC.ok(response)) {
        var storeKeys = store.loadRecords(AddressBook.Contact, response.get('body'));
        store.loadQueryResults(query, storeKeys);
    } else store.dataSourceDidErrorQuery(query, response);
},

retrieveRecord: function (store, storeKey) {
    if (SC.kindOf(store.recordTypeFor(storeKey), AddressBook.Contact)) {
        var url = "/contacts/AddressBookServlet?id=" + AddressBook.store.idFor(storeKey);
        SC.Request.getUrl(url).json()
            .notify(this, 'didRetrieveContact', store, storeKey)
            .send();
        return YES;
    } else return NO;
},

didRetrieveContact: function (response, store, storeKey) {
    if (SC.ok(response)) {
        var dataHash = response.get('body');
        store.dataSourceDidComplete(storeKey, dataHash);
    } else store.dataSourceDidError(storeKey, response);
},

createRecord: function (store, storeKey) {
    SC.Request.postUrl('/contacts/AddressBookServlet').json()
    	      .notify(this, 'didCreateContact', store, storeKey)
    	      .send(store.readDataHash(storeKey));
    return YES;
},

didCreateContact: function (response, store, storeKey) {
    if (SC.ok(response)) {
        var id = response.header('id');
        store.dataSourceDidComplete(storeKey, null, id);
    } else store.dataSourceDidError(storeKey, response);
    var updated = AddressBook.store.find(AddressBook.Contact);
    AddressBook.contactsController.set('content', updated);
},

updateRecord: function (store, storeKey) {
    if (SC.kindOf(store.recordTypeFor(storeKey), AddressBook.Contact)) {
        var url = "/contacts/AddressBookServlet?id=" + store.idFor(storeKey);
        SC.Request.putUrl(url).json()
            .notify(this, this.didUpdateContact, store, storeKey)
            .send(store.readDataHash(storeKey));
        return YES;
    } else return NO;
},

didUpdateContact: function (response, store, storeKey) {
    if (SC.ok(response)) {
        var data = response.get('body');
        store.dataSourceDidComplete(storeKey, data);
    } else store.dataSourceDidError(storeKey);
},

destroyRecord: function (store, storeKey) {
    if (SC.kindOf(store.recordTypeFor(storeKey), AddressBook.Contact)) {
        SC.Request.deleteUrl("/contacts/AddressBookServlet?id=" + store.idFor(storeKey)).json()
                 .notify(this, this.didDestroyContact, store, storeKey)
                 .send();
        return YES;
    } else return NO;
},

didDestroyContact: function (response, store, storeKey) {
    if (SC.ok(response)) {
        store.dataSourceDidDestroy(storeKey);
    } else store.dataSourceDidError(response);
}
});

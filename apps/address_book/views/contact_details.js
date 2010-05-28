// ==========================================================================
// Project:   AddressBook.ContactDetails
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
AddressBook.ContactDetailsView = SC.WellView.extend(
/** @scope AddressBook.ContactDetails.prototype */ {
    layout: {top: 36, bottom: 50, left: 275, width: 500 },
    
    contentView: SC.View.extend({
        childViews: 'firstName lastName mobileNo emailId age state country firstNameTF lastNameTF mobileNoTF emailIdTF stateTF ageTF countryTF editContactBtn'.w(),
        firstName: SC.LabelView.design({
            value: 'First Name',
            layout : {top: 20, height: 25, left: 25, width: 125 }
        }),
        lastName: SC.LabelView.design({
            value: 'Last Name',
            layout : {top: 50, height: 25, left: 25, width: 125 }
        }),        
        mobileNo: SC.LabelView.design({
            value: 'Mobile Number',
            layout: {top: 80, height: 25, left: 25, width: 125 }
        }),
        emailId: SC.LabelView.design({
            value: 'Email ID',
            layout : {top: 110, height: 25, left: 25, width: 125 }
        }),       
        age: SC.LabelView.design({
            value: 'Age',
            layout : {top: 140, height: 25, left: 25, width: 125 }
        }),
        state: SC.LabelView.design({
            value: 'State',
            layout : {top: 170, height: 25, left: 25, width: 125 }
        }),
        country: SC.LabelView.design({
            value: 'Country',
            layout : {top: 200, height: 25, left: 25, width: 125 }
        }),
        firstNameTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.contactsController.firstName',
            layout : {top: 20, height: 25, left: 160, width: 200 },
            isEnabledBinding: 'AddressBook.contactsController.allowEdit'
        }),
        lastNameTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.contactsController.lastName',
            layout : {top: 50, height: 25, left: 160, width: 200 },
            isEnabledBinding: 'AddressBook.contactsController.allowEdit'
        }),            
        mobileNoTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.contactsController.mobileNo',
            layout : {top: 80, height: 25, left: 160, width: 200 },
            isEnabledBinding: 'AddressBook.contactsController.allowEdit'
        }),
        emailIdTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.contactsController.emailId',
            layout : {top: 110, height: 25, left: 160, width: 200 },
            isEnabledBinding: 'AddressBook.contactsController.allowEdit'
        }),
        ageTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.contactsController.age',
            layout : {top: 140, height: 25, left: 160, width: 200 },
            isEnabledBinding: 'AddressBook.contactsController.allowEdit'
        }),
        stateTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.contactsController.state',
            layout : {top: 170, height: 25, left: 160, width: 200 },
            isEnabledBinding: 'AddressBook.contactsController.allowEdit'
        }),
        countryTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.contactsController.country',
            layout : {top: 200, height: 25, left: 160, width: 200 },
            isEnabledBinding: 'AddressBook.contactsController.allowEdit'
        }),
        editContactBtn: SC.ButtonView.design({
            title: 'Edit Contact',
            isVisibleBinding: 'AddressBook.contactsController.isEditVisible',
            target: 'AddressBook.contactsController',
            action: 'showEditContact',
            layout: {top: 240, height: 25, left: 150, width: 140}
        })
    })
});

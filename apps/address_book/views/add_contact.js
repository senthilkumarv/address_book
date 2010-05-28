// ==========================================================================
// Project:   AddressBook.AddContact
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
AddressBook.AddContactView = SC.WellView.extend({
    classNames: 'addcontact'.w(),
    layout: {left: 400, right: 400, top: 100, height: 320 },
    isVisibleBinding: 'AddressBook.addContactController.addContactVisible',
    contentView: SC.View.extend({
        childViews: 'heading firstName lastName mobileNo emailId age state country firstNameTF lastNameTF mobileNoTF emailIdTF ageTF stateTF countryTF saveButton cancelButton'.w(),
        heading: SC.LabelView.extend({
            value: 'Add New Contact',
            layout: {top:5, height: 20, centerX:0, width: 500},
            classNames: 'heading'.w(),
            textAlign: SC.ALIGN_CENTER,
            fontWeight: SC.BOLD_WEIGHT
        }),
        firstName: SC.LabelView.design({
            value: 'First Name',
            layout : {top: 50, height: 25, left: 25, width: 125 }
        }),
        lastName: SC.LabelView.design({
            value: 'Last Name',
            layout : {top: 80, height: 25, left: 25, width: 125 }
        }),            
        mobileNo: SC.LabelView.design({
            value: 'Mobile No',
            layout : {top: 110, height: 25, left: 25, width: 125 }
        }),
        emailId: SC.LabelView.design({
            value: 'Email ID',
            layout : {top: 140, height: 25, left: 25, width: 125 }
        }),
        age: SC.LabelView.design({
            value: 'Age',
            layout : {top: 170, height: 25, left: 25, width: 125 }
        }),
        state: SC.LabelView.design({
            value: 'State',
            layout : {top: 200, height: 25, left: 25, width: 125 }
        }),
        country: SC.LabelView.design({
            value: 'Country',
            layout : {top: 230, height: 25, left: 25, width: 125 }
        }),
        firstNameTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.addContactController.firstName',
            layout : {top: 50, height: 25, left: 160, width: 200 },
            hint: 'Enter First Name'
        }),
        lastNameTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.addContactController.lastName',
            layout : {top: 80, height: 25, left: 160, width: 200 },
            hint: 'Enter Last Name'
        }),            
        mobileNoTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.addContactController.mobileNo',
            layout : {top: 110, height: 25, left: 160, width: 200 },
            hint: 'Enter Mobile No'
        }),
        emailIdTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.addContactController.emailId',
            layout : {top: 140, height: 25, left: 160, width: 200 },
            hint: 'Enter Email'
        }),
        ageTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.addContactController.age',
            layout : {top: 170, height: 25, left: 160, width: 200 },
            hint: 'Enter Age'
        }),
        stateTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.addContactController.state',
            layout : {top: 200, height: 25, left: 160, width: 200 },
            hint: 'Enter State'
        }),
        countryTF: SC.TextFieldView.design({
            valueBinding: 'AddressBook.addContactController.country',
            layout : {top: 230, height: 25, left: 160, width: 200 },
            hint: 'Enter Country'
        }),
        saveButton: SC.ButtonView.design({
            titleBinding: 'AddressBook.addContactController.saveBtnText',
            layout: {left: 50, width: 150, top: 260},
            target: 'AddressBook.addContactController',
            action: 'saveContact'
        }),
        cancelButton: SC.ButtonView.design({
            title: 'Cancel',
            layout: {left: 210, width: 150, top: 260},
            target: 'AddressBook.addContactController',
            action: 'cancelSave'
        })
    })
});

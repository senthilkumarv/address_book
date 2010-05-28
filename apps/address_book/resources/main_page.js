// ==========================================================================
// Project:   AddressBook - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

// This page describes the main user interface for your application.  
AddressBook.mainPage = SC.Page.design({
    mainPane: SC.MainPane.design({
        childViews: 'middleView topView bottomView'.w(),
        topView: SC.ToolbarView.design({
            layout: { top: 0, left: 0, right: 0, height: 36 },
            childViews: 'labelView'.w(),
            anchorLocation: SC.ANCHOR_TOP,

            labelView: SC.LabelView.design({
                layout: { centerX:0, centerY: 0, height: 24, width: 200 },
                textAlign: SC.ALIGN_CENTER,
                controlSize: SC.LARGE_CONTROL_SIZE,
                fontWeight: SC.BOLD_WEIGHT,
                value: 'Address Book'
            })
        }),

        middleView: SC.View.design({
            childViews: 'addressBook addContactView'.w(),            
            classNames: 'middleview'.w(),
            addressBook: SC.WellView.design({
                isVisibleBinding: 'AddressBook.contactsController.showContactDetails',
                
                layout: {top:75, bottom:75, left: 75, right: 75},
                contentView: SC.View.design({
                    childViews: 'middleView controlsView detailsView'.w(),
                    middleView: SC.ScrollView.design({
                        hasHorizontalScroller: NO,
                        layout: { top: 36, bottom: 70, left: 30, width: 200 },
                        backgroundColor: 'white',
                        contentView: SC.ListView.design({
                            contentBinding: 'AddressBook.contactsController.arrangedObjects',
                            selectionBinding: 'AddressBook.contactsController.selection',
                            contentValueKey: "fullName",
                            rowHeight: 21,
                            showAlternatingRows: YES
                        }),
                    }),
                    controlsView: SC.View.design({
                        layout: {bottom: 30, height: 40, left: 30, width: 200},
                        childViews: 'addContactBtn deleteContactBtn'.w(),
                        addContactBtn: SC.ButtonView.design({
                            target: 'AddressBook.addContactController',
                            action: 'showAddContact',
                            classNames: 'smallbtn'.w(),
                            title: '+',
                            layout: {left: 5, width: 40},
                            textAlign: SC.ALIGN_LEFT,
                            fontWeight: SC.BOLD_WEIGHT
                        }),
                        deleteContactBtn: SC.ButtonView.design({
                            target: 'AddressBook.contactsController',
                            action: 'deleteContact',
                            classNames: 'smallbtn'.w(),
                            title: '--',
                            layout: {left: 45, width: 40},
                            textAlign: SC.ALIGN_LEFT,
                            fontWeight: SC.BOLD_WEIGHT
                        }),
                    }),
                    detailsView: AddressBook.ContactDetailsView
                })
            }),                                    
            addContactView: AddressBook.AddContactView
        }),      

        bottomView: SC.ToolbarView.design({
            layout: { bottom: 0, left: 0, right: 0, height: 32 },
            childViews: 'countValue'.w(),
            anchorLocation: SC.ANCHOR_BOTTOM,
            countValue: SC.LabelView.design({
                layout: {height: 18, left: 20, right: 20, centerY: 0 },
                textAlign: SC.ALIGN_CENTER,
                valueBinding: "AddressBook.contactsController.addressCount",
            })
        })
    })        
});

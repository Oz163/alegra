/**
 * This view is an example list of people.
 */
Ext.define('Alegra.frontend.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Alegra.frontend.store.Contactos'
    ],

    title: 'Contactos',

    store: {
        type: 'contactos'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 100 },
        { text: 'Email', dataIndex: 'email', width: 230 },
        { text: 'Phone', dataIndex: 'phonePrimary', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

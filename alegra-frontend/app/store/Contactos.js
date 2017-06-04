Ext.define('Alegra.frontend.store.Contactos', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    autoSync: true,
    autoDestroy: true,

    alias: 'store.contactos',

    model: 'Alegra.frontend.model.Contacto',

    proxy: {
        type: 'rest',
        url : '../alegra-backend/public',

    }

});
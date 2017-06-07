Ext.define('Alegra.frontend.store.Contactos', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    autoSync: true,
    autoDestroy: true,
    pageSize: 10,
    remoteSort: true,
    proxy: {
        type: 'rest',
        url : '../alegra-backend/public/cliente',
        writer: {
                type: 'json'
            },
        reader: {
            type: 'json'
        }

    },

    alias: 'store.contactos',

    model: 'Alegra.frontend.model.Contacto',

});
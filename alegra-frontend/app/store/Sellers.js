Ext.define('Alegra.frontend.store.Sellers', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    autoSync: true,
    autoDestroy: true,
    pageSize: 10,
    remoteSort: true,
    proxy: {
        type: 'rest',
        url : '../alegra-backend/public/seller',
        writer: {
                type: 'json'
            },
        reader: {
            type: 'json'
        }

    },

    alias: 'store.sellers',

    model: 'Alegra.frontend.model.Seller',

});
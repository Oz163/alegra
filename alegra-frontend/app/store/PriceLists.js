Ext.define('Alegra.frontend.store.PriceLists', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    autoSync: true,
    autoDestroy: true,
    pageSize: 10,
    remoteSort: true,
    proxy: {
        type: 'rest',
        url : '../alegra-backend/public/priceList',
        writer: {
                type: 'json'
            },
        reader: {
            type: 'json'
        }

    },

    alias: 'store.priceLists',

    model: 'Alegra.frontend.model.PriceList',

});
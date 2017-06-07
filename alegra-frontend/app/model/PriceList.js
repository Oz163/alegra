Ext.define('Alegra.frontend.model.PriceList', {
    extend: 'Ext.data.Model',
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
    fields: [
        { name: 'id', type: 'int', persist: false },
        { name: 'name', type: 'string' }

    ],

    validators: {
        name: [
            'presence',
            { type: 'length', max:90 },
        ]
    },
    

});
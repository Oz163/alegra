Ext.define('Alegra.frontend.model.Seller', {
    extend: 'Ext.data.Model',
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
    fields: [
        { name: 'id', type: 'int', persist: false },
        { name: 'name', type: 'string' },
        { name: 'identificacion', type: 'string' },
        { name: 'observations', type: 'string' },

    ],

    validators: {
        name: [
            'presence',
            { type: 'length', max:90 },
        ],
        identificacion: [
            { type: 'length', max:45 },
        ],
        observations: [
            { type: 'length', max:500 },
        ],
    },
    

});
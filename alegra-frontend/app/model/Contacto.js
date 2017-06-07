Ext.define('Alegra.frontend.model.Contacto', {
    extend: 'Ext.data.Model',
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
    fields: [
        { name: 'id', type: 'int', persist: false },
        { name: 'name', type: 'string' },
        { name: 'identificacion', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phonePrimary', type: 'string' },
        { name: 'phoneSecundary', type: 'string' },
        { name: 'fax', type: 'string' },
        { name: 'mobile', type: 'string' },
        { name: 'observations', type: 'string' },
        { name: 'priceList', type: 'int', reference: 'Alegra.frontend.model.PriceList', defaultValue: null },
        { name: 'seller', type: 'int', reference: 'Alegra.frontend.model.Seller', defaultValue: null },
        { name: 'term', type: 'int', reference: 'Alegra.frontend.model.Term', defaultValue: null },
        { name: 'address', type: 'string' },
        { name: 'type', type: 'int' },
        { name: 'internalContacts', type: 'int' }

    ],

    validators: {
        name: [
            'presence',
            { type: 'length', max:90 },
        ],
        identificacion: [
            { type: 'length', max:45 },
        ],
        email: [
            { type: 'length', max:100 },
        ],
        phonePrimary: [
            { type: 'length', max:45 },
        ],
        phoneSecundary: [
            { type: 'length', max:45 },
        ],
        fax: [
            { type: 'length', max:45 },
        ],
        mobile: [
            { type: 'length', max:45 },
        ],
        observations: [
            { type: 'length', max:500 },
        ],
    },
    

});

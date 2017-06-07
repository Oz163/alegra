/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Alegra.frontend.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires:[
        'Alegra.frontend.model.Contacto'
    ],
    alias: 'controller.main',

    onEditClick: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        var contacto = Alegra.frontend.model.Contacto.load(rec.get('id'));
        var panel = Ext.create('Ext.window.Window',{
            title: 'Actualizar Contacto',
             viewModel : {
                    data: {
                        contacto: contacto
                    }
                },
            height: 600,
            width: 800,
            floating: true,
            centered: true,
            closable: true,
            modal: true,

            items: [{
                xtype: 'panel',
                requires: [
                    'Ext.layout.container.Column'
                ],


                layout: 'column',
                defaults: {
                    bodyPadding: 15
                },

                items: [
                    {
                        columnWidth: 0.5,
                        items: [
                            {
                                xtype: 'fieldset',

                                defaultType: 'textfield',
                                defaults: {
                                    anchor: '100%'
                                },

                                items: [{
                                    fieldLabel: 'Nombre',
                                    emptyText: 'Nombre',
                                    name: 'name',
                                    bind: '{contacto.name}'
                                }, {
                                    fieldLabel: 'Identificación',
                                    emptyText: 'Identificación',
                                    bind: '{contacto.identification}',
                                    name: 'mobile'
                                }, {
                                    fieldLabel: 'Dirección',
                                    emptyText: 'Dirección'
                                },{
                                    fieldLabel: 'Ciudad',
                                    emptyText: 'Ciudad'
                                }, {
                                    fieldLabel: 'Email',
                                    emptyText: 'Email',
                                    bind: '{contacto.email}',
                                    vtype: 'email',
                                    name: 'email'
                                }, {
                                    fieldLabel: 'Teléfono 1',
                                    emptyText: 'Teléfono 1',
                                    bind: '{contacto.phonePrimary}',
                                    name: 'phonePrimary'
                                },
                                {
                                    fieldLabel: 'Teléfono 2',
                                    emptyText: 'Teléfono 2',
                                    bind: '{contacto.phoneSecundary}',
                                    name: 'phoneSecundary'
                                },
                                {
                                    fieldLabel: 'Fax',
                                    emptyText: 'Fax',
                                    bind: '{contacto.fax}',
                                    name: 'fax'
                                },{
                                    fieldLabel: 'Celular',
                                    emptyText: 'Celular',
                                    bind: '{contacto.identificacion}',
                                    name: 'mobile'
                                },]
                            }
                        ]
                    },
                    {
                        columnWidth: 0.5,
                        items: [
                            {
                                xtype: 'fieldset',

                                defaultType: 'textfield',
                                defaults: {
                                    anchor: '100%'
                                },

                                items: [{
                                    xtype: 'combobox',
                                    fieldLabel: 'Lista de Precios',
                                    name: 'priceListId',
                                    /*store: {
                                        type: 'states'
                                    },
                                    valueField: 'abbr',
                                    displayField: 'state',*/
                                    typeAhead: true,
                                    //queryMode: 'local',
                                    emptyText: 'Seleccione una lista de precios...'
                                }, {
                                    xtype: 'combobox',
                                    fieldLabel: 'Vendedor',
                                    name: 'sellerId',
                                    /*store: {
                                        type: 'states'
                                    },
                                    valueField: 'abbr',
                                    displayField: 'state',*/
                                    typeAhead: true,
                                    //queryMode: 'local',
                                    emptyText: 'Seleccione un vendedor...'
                                }, {
                                    xtype: 'combobox',
                                    fieldLabel: 'Términos de pago',
                                    name: 'termId',
                                    /*store: {
                                        type: 'states'
                                    },
                                    valueField: 'abbr',
                                    displayField: 'state',*/
                                    typeAhead: true,
                                    //queryMode: 'local',
                                    emptyText: 'Seleccione un término de pago...'
                                },{
                                    xtype:'checkbox',
                                    fieldLabel: 'Cliente',
                                    name: 'cliente',
                                }, {
                                    xtype:'checkbox',
                                    fieldLabel: 'Proveedor',
                                    name: 'proveedor',
                                }, {
                                     xtype: 'textareafield',
                                    fieldLabel: 'Observaciones',
                                    bind: '{contacto.observations}',
                                    name: 'observations'
                                },
                                {
                                    xtype:'checkbox',
                                    fieldLabel: 'Incluir estado de cuenta',
                                    name: 'account',
                                }]
                            }
                        ]
                    }
                ]
            }],

            buttons: [{
                text: 'Actualizar contacto',
                disabled: false,
                width: 200,
                height: 50,
                handler: function() {
                    contacto.save({
                        success: function() {
                            Ext.Msg.alert('Actualización exitosa','Contacto actualizado exitósamente');
                            grid.getStore().load();
                            panel.close();
                        }

                    });
                }
            }]
        });
        panel.show();
    },

    onViewClick: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        var contacto = Alegra.frontend.model.Contacto.load(rec.get('id'));
        var panel = Ext.create('Ext.window.Window',{
            title: 'Información de Contacto',
             viewModel : {
                    data: {
                        contacto: contacto
                    }
                },
            height: 500,
            width: 400,
            floating: true,
            centered: true,
            closable: true,
            modal: true,

            items: [{
                xtype: 'panel',
                requires: [
                    'Ext.layout.container.Column'
                ],


                layout: 'column',
                defaults: {
                    bodyPadding: 15
                },

                items: [
                    {
                        columnWidth: 1,
                        items: [
                            {
                                xtype: 'fieldset',

                                defaultType: 'field',

                                defaults: {
                                    anchor: '100%',
                                    readOnly: true
                                },

                                items: [{
                                    fieldLabel: 'Nombre',
                                    emptyText: 'Nombre',
                                    name: 'name',
                                    bind: '{contacto.name}'
                                }, {
                                    fieldLabel: 'Identificación',
                                    emptyText: 'Identificación',
                                    bind: '{contacto.identification}',
                                    name: 'mobile'
                                }, {
                                    fieldLabel: 'Dirección',
                                    emptyText: 'Dirección'
                                },{
                                    fieldLabel: 'Ciudad',
                                    emptyText: 'Ciudad'
                                }, {
                                    fieldLabel: 'Email',
                                    emptyText: 'Email',
                                    bind: '{contacto.email}',
                                    vtype: 'email',
                                    name: 'email'
                                }, {
                                    fieldLabel: 'Teléfono 1',
                                    emptyText: 'Teléfono 1',
                                    bind: '{contacto.phonePrimary}',
                                    name: 'phonePrimary'
                                },
                                {
                                    fieldLabel: 'Teléfono 2',
                                    emptyText: 'Teléfono 2',
                                    bind: '{contacto.phoneSecundary}',
                                    name: 'phoneSecundary'
                                },
                                {
                                    fieldLabel: 'Fax',
                                    emptyText: 'Fax',
                                    bind: '{contacto.fax}',
                                    name: 'fax'
                                },{
                                    fieldLabel: 'Celular',
                                    emptyText: 'Celular',
                                    bind: '{contacto.identificacion}',
                                    name: 'mobile'
                                },]
                            }
                        ]
                    }
                ]
            }],

            buttons: [{
                text: 'Cerrar',
                disabled: false,
                background: 'red',
                width: 200,
                height: 50,
                handler: function() {
                    panel.close();
                }
            }]
        });
        panel.show();
    },

    onDeleteClick: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        rec.erase({
            success: function() {
                Ext.Msg.alert('Eliminar', 'Contacto eliminado exitósamente.');
                grid.getStore().load();
            }
        });
    },

    onAddClick: function(grid) {;
        var contacto = new Alegra.frontend.model.Contacto();
        var panel = Ext.create('Ext.window.Window',{
            title: 'Actualizar Contacto',
             viewModel : {
                    data: {
                        contacto: contacto
                    }
                },
            height: 600,
            width: 800,
            floating: true,
            centered: true,
            closable: true,
            modal: true,

            items: [{
                xtype: 'panel',
                requires: [
                    'Ext.layout.container.Column'
                ],


                layout: 'column',
                defaults: {
                    bodyPadding: 15
                },

                items: [
                    {
                        columnWidth: 0.5,
                        items: [
                            {
                                xtype: 'fieldset',

                                defaultType: 'textfield',
                                defaults: {
                                    anchor: '100%'
                                },

                                items: [{
                                    fieldLabel: 'Nombre',
                                    emptyText: 'Nombre',
                                    name: 'name',
                                    bind: '{contacto.name}'
                                }, {
                                    fieldLabel: 'Identificación',
                                    emptyText: 'Identificación',
                                    bind: '{contacto.identification}',
                                    name: 'mobile'
                                }, {
                                    fieldLabel: 'Dirección',
                                    emptyText: 'Dirección'
                                },{
                                    fieldLabel: 'Ciudad',
                                    emptyText: 'Ciudad'
                                }, {
                                    fieldLabel: 'Email',
                                    emptyText: 'Email',
                                    bind: '{contacto.email}',
                                    vtype: 'email',
                                    name: 'email'
                                }, {
                                    fieldLabel: 'Teléfono 1',
                                    emptyText: 'Teléfono 1',
                                    bind: '{contacto.phonePrimary}',
                                    name: 'phonePrimary'
                                },
                                {
                                    fieldLabel: 'Teléfono 2',
                                    emptyText: 'Teléfono 2',
                                    bind: '{contacto.phoneSecundary}',
                                    name: 'phoneSecundary'
                                },
                                {
                                    fieldLabel: 'Fax',
                                    emptyText: 'Fax',
                                    bind: '{contacto.fax}',
                                    name: 'fax'
                                },{
                                    fieldLabel: 'Celular',
                                    emptyText: 'Celular',
                                    bind: '{contacto.identificacion}',
                                    name: 'mobile'
                                },]
                            }
                        ]
                    },
                    {
                        columnWidth: 0.5,
                        items: [
                            {
                                xtype: 'fieldset',

                                defaultType: 'textfield',
                                defaults: {
                                    anchor: '100%'
                                },

                                items: [{
                                    xtype: 'combobox',
                                    fieldLabel: 'Lista de Precios',
                                    name: 'priceListId',
                                    /*store: {
                                        type: 'states'
                                    },
                                    valueField: 'abbr',
                                    displayField: 'state',*/
                                    typeAhead: true,
                                    //queryMode: 'local',
                                    emptyText: 'Seleccione una lista de precios...'
                                }, {
                                    xtype: 'combobox',
                                    fieldLabel: 'Vendedor',
                                    name: 'sellerId',
                                    /*store: {
                                        type: 'states'
                                    },
                                    valueField: 'abbr',
                                    displayField: 'state',*/
                                    typeAhead: true,
                                    //queryMode: 'local',
                                    emptyText: 'Seleccione un vendedor...'
                                }, {
                                    xtype: 'combobox',
                                    fieldLabel: 'Términos de pago',
                                    name: 'termId',
                                    /*store: {
                                        type: 'states'
                                    },
                                    valueField: 'abbr',
                                    displayField: 'state',*/
                                    typeAhead: true,
                                    //queryMode: 'local',
                                    emptyText: 'Seleccione un término de pago...'
                                },{
                                    xtype:'checkbox',
                                    fieldLabel: 'Cliente',
                                    name: 'cliente',
                                }, {
                                    xtype:'checkbox',
                                    fieldLabel: 'Proveedor',
                                    name: 'proveedor',
                                }, {
                                     xtype: 'textareafield',
                                    fieldLabel: 'Observaciones',
                                    bind: '{contacto.observations}',
                                    name: 'observations'
                                },
                                {
                                    xtype:'checkbox',
                                    fieldLabel: 'Incluir estado de cuenta',
                                    name: 'account',
                                }]
                            }
                        ]
                    }
                ]
            }],

            buttons: [{
                text: 'Registrar',
                disabled: false,
                width: 200,
                height: 50,
                handler: function() {
                    contacto.save({
                        success: function() {
                            Ext.Msg.alert('Registro exitosa','Contacto registrado exitósamente');
                            Ext.getCmp('grid-contactos').getStore().load();
                            panel.close();
                        }

                    });
                }
            }]
        });
        panel.show();
    },

    onDeleteMultipleClick:function() {;
        Ext.Msg.alert('Eliminar', 'Eliminación multiple ');
        var grid = Ext.getCmp('grid-contactos');
        var selection = grid.getView().getSelectionModel().getSelection();
                    if (selection) {
                        grid.getStore().remove(selection,);
                    }
    },
});


/*
{
                xtype: 'fieldset',
                title: 'Contact Information',

                defaultType: 'textfield',
                defaults: {
                    anchor: '50%'
                },

                items: [{
                    fieldLabel: 'Nombre',
                    emptyText: 'Nombre',
                    name: 'name',
                    bind: '{contacto.name}'
                }, {
                    fieldLabel: 'Last Name',
                    emptyText: 'Last Name',
                    name: 'last'
                }, {
                    fieldLabel: 'Company',
                    name: 'company'
                }, {
                    fieldLabel: 'Email',
                    name: 'email',
                    vtype: 'email'
                }, {
                    xtype: 'combobox',
                    fieldLabel: 'State',
                    name: 'state',
                    store: {
                        type: 'states'
                    },
                    valueField: 'abbr',
                    displayField: 'state',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select a state...'
                }, {
                    xtype: 'datefield',
                    fieldLabel: 'Date of Birth',
                    name: 'dob',
                    allowBlank: false,
                    maxValue: new Date()
                }]
            }

*/
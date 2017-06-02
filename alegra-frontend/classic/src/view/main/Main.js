/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('Alegra.frontend.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border'
    ],
    layout: 'border',
    width: 100,
    height: 400,

    bodyBorder: false,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

    items: [
        {
            xtype: 'panel',
            layout: 'column',
            title: 'Ayuda',
            region: 'south',
            height: 250,
            minHeight: 75,
            maxHeight: 250,
            items: [
                {
                    xtype: 'panel',
                    layout: 'column',
                    height: 400,
                    columnWidth: 1,
                    layout: 'column',

                    bodyPadding: 5,

                    defaults: {
                        bodyPadding: 15
                    },

                    items: [
                        {
                            columnWidth: 0.33,
                            html: '<div id="ayuda" class="box"><h4>Ayudas paso a paso</h4><ul class="vineta"><li><a href="http://ayuda.alegra.com/hc/es/articles/205798409-C%C3%B3mo-hacer-una-Factura-de-venta-" class="initWalkthru" data-walktrhu-name="createInvoice" data-walkthru-id="17946" target="_blank">Cómo crear una factura de venta</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/206509365--C%C3%B3mo-crear-una-Factura-de-Proveedor-" class="initWalkthru" data-walktrhu-name="createBill" data-walkthru-id="18401" target="_blank">Cómo crear una factura de proveedor</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/206509615--C%C3%B3mo-importar-contactos-" class="initWalkthru" data-walktrhu-name="createClient" data-walkthru-id="18066" target="_blank">Cómo importar contactos</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/206512955--C%C3%B3mo-crear-un-Banco-" class="initWalkthru" data-walktrhu-name="createAccount" data-walkthru-id="18065" target="_blank">Cómo crear una cuenta de Banco</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/206509105-Agregar-un-pago-a-una-factura" class="initWalkthru" data-walktrhu-name="createInvoicePayment" data-walkthru-id="18475" target="_blank">Cómo registrar un pago a una factura de venta</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/205798349--C%C3%B3mo-crear-una-Nota-Cr%C3%A9dito-" class="initWalkthru" data-walktrhu-name="createCreditNote" data-walkthru-id="18116" target="_blank">Cómo crear una nota crédito</a></li></ul></div>'
                        },
                        {
                            columnWidth: 0.33,
                            html: '<div id="support" class="box"><h4>Soporte</h4><ul><li id="support-link2">Contáctanos</li><li><a href="http://ayuda.alegra.com/hc/es" target="_blank">Centro de ayuda</a></li><li><a href="http://www.alegra.com/manual.pdf" target="_blank">Manual de primeros pasos en Alegra</a></li><li><a href="http://www.alegra.com/acrecer-con-alegra" target="_blank">Plan de referidos</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/205761789-Caso-de-%C3%A9xito" target="_blank">Comparte tu historia</a></li></ul></div>'
                        },
                        {
                            columnWidth: 0.33,
                            html: '<div id="masAyudas" class="box"><h4>Contactos</h4><ul><li><a href="http://ayuda.alegra.com/hc/es/articles/206509595--C%C3%B3mo-crear-un-cliente-y-o-proveedor-" target="_blank">¿Cómo crear un Cliente?</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/206509615--C%C3%B3mo-importar-contactos-" target="_blank">¿Cómo importar contactos?</a></li></ul></div>'
                        }
                    ]
 
                }

            ]
        },
        {
            title: 'Menú',
            region:'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 125,
            minWidth: 100,
            maxWidth: 250,
            items: [
                {
                    xtype: 'button',
                    text: 'Inicio',
                    scale: 'small',
                    cls: 'btn-navbar',
                },
                {
                    xtype: 'button',
                    text: 'Ingresos',
                    scale: 'small',
                    cls: 'btn-navbar',
                    menu: [{
                        text:'Facturas de Venta'
                    },{
                        text:'Faturas recurrentes'
                    },{
                        text:'Pagos recibidos'
                    },{
                        text:'Notas de crédito'
                    },{
                        text:'Cotizaciones'
                    },{
                        text:'Remisiones'
                    },{
                        text:'POS'
                    }]
                },
                {
                    xtype: 'button',
                    text: 'Gastos',
                    scale: 'small',
                    cls: 'btn-navbar',
                    menu: [{
                        text:'Pagos'
                    },{
                        text:'Facturas de proveedores'
                    },{
                        text:'Pagos recurrentes'
                    },{
                        text:'Notas de débito'
                    },{
                        text:'Ordenes de compra'
                    }]
                },
                {
                    xtype: 'button',
                    text: 'Contactos',
                    scale: 'small',
                    cls: 'btn-navbar',
                    menu: [{
                        text:'Todos'
                    },{
                        text:'Clientes'
                    },{
                        text:'Proveedores'
                    }]
                },
                {
                    xtype: 'button',
                    text: 'Inventario',
                    scale: 'small',
                    cls: 'btn-navbar',
                    menu: [{
                        text:'Items de venta'
                    },{
                        text:'Valor de inventario'
                    },{
                        text:'Ajustes a inventario'
                    },{
                        text:'Gestión de items'
                    },{
                        text:'Listas de precios'
                    },{
                        text:'Bodegas'
                    }]
                },
                {
                    xtype: 'button',
                    text: 'Bancos',
                    scale: 'small',
                    cls: 'btn-navbar',
                    
                },
                {
                    xtype: 'button',
                    text: 'Categorias',
                    scale: 'small',
                    cls: 'btn-navbar',
                    menu: [{
                        text:'Categorías'
                    },{
                        text:'Ajustes de Categorías'
                    }]
                },
                {
                    xtype: 'button',
                    text: 'Reportes',
                    scale: 'small',
                    cls: 'btn-navbar',
                    
                },

            ]
        },
        {
            title: {
                        xtype: 'panel',
                        layout: 'column',
                        bodyPadding: 5,
                        items: [
                                {
                                        xtype: 'image',
                                        src: 'https://cdn1.alegra.com/images/logo_alegra.png',
                                        width: 200,
                                        height: 50
                                },
                                {
                                        xtype: 'textfield',
                                        value: 'Buscar..',
                                        name: 'busqueda',
                                        width: 200,
                                        height: 20,
                                        margin: '10 0 10 50',
                                        cls: 'input-search'
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'fa fa-info-circle',
                                    text: 'Ayuda',
                                    width: 80,
                                    height: 30,
                                    margin: '10 0 10 50'
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'fa fa-question-circle',
                                    text: 'Soporte',
                                    width: 100,
                                    height: 30,
                                    margin: '10 0 10 10'
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'fa fa-user',
                                    text: 'usuario@gmail.com',
                                    width: 200,
                                    height: 30,
                                    margin: '10 0 10 10'
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'fa fa-cog',
                                    text: 'Configuración',
                                    width: 120,
                                    height: 30,
                                    margin: '10 0 10 10'
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'fa fa-sign-out',
                                    text: 'Salir',
                                    width: 80,
                                    height: 30,
                                    margin: '10 0 10 10'
                                },

                        ] 
            },
            cls: 'panelheader',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            items: [{
                xtype: 'panel',
                layout: 'border',
                height: 400,
                bodyBorder: false,
                items: [
                    {
                        title: 'Perfil',
                        region: 'north',
                        height: 600,
                        minHeight: 75,
                        maxHeight: 800,
                        html: '<p>Perfil content</p>'
                    }
                ]
            }]
        }
    ]

});


/*Ext.define('Alegra.frontend.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',


    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Alegra.frontend.view.main.MainController',
        'Alegra.frontend.view.main.MainModel',
        'Alegra.frontend.view.main.List'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    }
});*/


/*Ext.onReady(function(){

    var store = Ext.create('Alegra.frontend.store.Contactos', {

    });
    
    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
        listeners: {
            cancelEdit: function(rowEditing, context) {
                // Canceling editing of a locally added, unsaved record: remove it
                if (context.record.phantom) {
                    store.remove(context.record);
                }
            }
        }
    });
    
    var grid = Ext.create('Ext.grid.Panel', {
        id: 'panel-contenido-central',
        renderTo: 'sitio',
        autoScroll: true,
        plugins: [rowEditing],
        height: 330,
        frame: false,
        title: 'Contactos',
        store: store,
        iconCls: 'icon-user',
        columns: [{
            text: 'ID',
            width: 50,
            sortable: true,
            dataIndex: 'id',
            renderer: function(v, meta, rec) {
                return rec.phantom ? '' : v;
            }
        }, {
            text: 'Email',
            flex: 1,
            sortable: true,
            dataIndex: 'email',
            field: {
                xtype: 'textfield'
            }
        }, {
            header: 'First',
            width: 120,
            sortable: true,
            dataIndex: 'first',
            field: {
                xtype: 'textfield'
            }
        }, {
            text: 'Last',
            width: 120,
            sortable: true,
            dataIndex: 'last',
            field: {
                xtype: 'textfield'
            }
        }],
        dockedItems: [{
            xtype: 'toolbar',
            items: [{
                text: 'Add',
                iconCls: 'icon-add',
                handler: function(){
                    // empty record
                    store.insert(0, new Person());
                    rowEditing.startEdit(0, 0);
                }
            }, '-', {
                itemId: 'delete',
                text: 'Delete',
                iconCls: 'icon-delete',
                disabled: true,
                handler: function(){
                    var selection = grid.getView().getSelectionModel().getSelection()[0];
                    if (selection) {
                        store.remove(selection);
                    }
                }
            }]
        }]
    });
    grid.getSelectionModel().on('selectionchange', function(selModel, selections){
        grid.down('#delete').setDisabled(selections.length === 0);
    });
});*/

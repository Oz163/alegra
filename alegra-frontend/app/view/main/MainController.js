/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Alegra.frontend.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            alert("hola");
        }
    },

     onViewClick: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        Ext.Msg.alert('Ver', 'Ver ' + rec.get('name'));
    },

    onEditClick: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        Ext.Msg.alert('Editar', 'Editar ' + rec.get('name'));
    },

    onDeleteClick: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        Ext.Msg.alert('Eliminar', 'Eliminar ' + rec.get('name'));
    },

    onAddClick: function(grid) {;
        Ext.Msg.alert('Nuevo', 'Nuevo contacto ');
    },

    onDeleteMultipleClick:function(grid) {;
        Ext.Msg.alert('Eliminar', 'Eliminación multiple ');
        /*
        var selection = grid.getView().getSelectionModel().getSelection()[0];
                    if (selection) {
                        store.remove(selection);
                    }
        */
    },
});

Ext.define('Alegra.frontend.view.main.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form',

    cancelUpdate: function () {
        var view = this.getView();

        view.destroy();
    },

    submitUpdate: function(me) {
        var view = this.getView();

        view.destroy();
    }
});
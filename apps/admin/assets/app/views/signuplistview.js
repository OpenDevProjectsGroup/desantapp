Airstrip.Admin.SignupsListView = Backbone.View.extend({
    el: '#content',
    template: JST['templates/admin/signups_list'],

    render: function() {
        this.$el.html(this.template({
            
        }))
        return this
    },
})
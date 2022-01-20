
Vue.component('name', {
    data: function (){
        return {
            name: 'Sqiud game',
        }
    },
    template:
        '<div>' +
        '<h3> {{ name }} </h3>' +
        '</div>'
})

Vue.component('button-enter', {
    data: function () {
        return {
            name: "begin",
            show: false,
            option1: "GAME",
            option2: "BET",
            option3: "BLACK ORGAN MARKET"
        }
    },
    template:
        '<div>' +
            '<button v-on:click ="showOptions"> {{name}} </button>'+
            '<template  v-if="show">'+
            '<h4> <a href="http://localhost:63343/squid_game/src/main/webapp/gameauth.html"> {{option1}} </a> </h4>' +
            '<h4> <a href=""> {{option2}} </a> </h4>' +
            '<h4> <a href=""> {{option3}} </a> </h4>' +
            '</template>'+
        '</div>',
    methods : {
        showOptions: function () { //
            this.show = true;
            //alert(this.show);
        }
    }
});

new Vue({
    el: '#window-header'})


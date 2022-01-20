Vue.component('login-form', {
    data: function (){
        return {
            login: "",
            password: "",
            error: "",
        }
    },
    methods: {
        checkForm: function (e) {
            this.error = "";
            if (this.login == "" | this.password == "" | this.login == null | this.password == null) {
                this.error = 'Try it again';
                e.preventDefault();
            } deleteForm;
        }
    },
        deleteForm: function() {

        },
    template: '<form method="post" id="form" @submit="checkForm" action="hello">'+
        '<p v-if="error.length">\n' +
        ' {{ error }}\n' +
        ' </p>' +
        '<p> Login: </p>'+
        '<input type="text" name="login" @input="login = $event.target.value">'+
        '<p> Password: </p>'+
        '<input type="password" name="password" @input="password=$event.target.value">'+
        '<p></p>'+
        '<button value="sign up" type="submit" name="but">sign up</button>'+
        '<button value="log in" type="submit" name="but">log in</button> '+
        '</form>'
});

new Vue({
    el: '#app'});

Vue.component('game-head',{
    data: function() {
        return {
            head: 'Squid Game'
        }
    },
    template:
        "<div id='game-header'><p> {{head}}</p></div>"

})

new Vue({
    el:"#head"
})
//fixme add function of choosen participant
/**Vue.component('table-ex', {
    data: function () {
        return {
            //fixme add axious get query
            result: [{id:1, name:'Masha', debt:100}, {id:2, name: 'pimpa', debt:100}, {id:2, name: 'pimpa', debt:100}, {id:2, name: 'pimpa', debt:100}, {id:2, name: 'pimpa', debt:100}, {id:2, name: 'pimpa', debt:100}, {id:2, name: 'pimpa', debt:100}, {id:2, name: 'pimpa', debt:100}],
        }
    },
    template: "<div class='scroll-table'>" +
        "<table> "
        +"<thead>"+
        "     <th> id  </th>" +
        "     <th> name </th>" +
        "     <th> debt </th>" +
        "</thead>"+
        "</table>" +
        "<div class='scroll-table-body'>"+
        "<table >" +
            "<tr v-for='r in result'>" +
                "<th> {{r.id}} </th>" +
                "<th> {{r.name}} </th>" +
                "<th> {{r.debt}}</th>" +
            "</tr>" +
        "</table>" +
    "</div>"+
        "</div>"
});
 **/

/**Vue.component('table-ex', {
    data: function() {
        return {
            pageNumber: 0
        }
    },
    props: {
        listData: {
            type: Array,
            required: true
        },
        size: {
            type: Number,
            required: false,
            default: 10
        }
    },
    methods: {
        nextPage: function() {
            this.pageNumber ++;
        },
        prevPage: function () {
            this.pageNumber --;
        }
    },
    computed: {
        pageCount(){
            let l = this.listData.length,
                s = this.size;
            return Math.ceil(1/s);
        },
        paginatedData(){
            let start = this.pageNumber * this.size,
                end = start + this.size;
            return this.listData.slice(start, end);
        }
    }, template :
    "<div>" +
        "<ul>" +
            "<li v-for='p in paginatedData'>" +
                "{{p.id}}" +
                "{{p.name}}" +
            "{{p.debt}}" +
            "</li>" +
        "</ul>" +
        "<button :disabled = 'PageNumber === 0' @click='prevPage'> Previous</button>" +
        "<button :disabled = 'PageNumber >= PageCount -1' @click='nextPage'> Next</button>" +
        "</div>"
})

Vue.component('new-stage', {
    data: function (){
        return {
            numberOfStage: 1,
        }
    },
    methods: {
        endOfStage: function (){
            this.numberOfStage++;
        },
    },
    template: "<div>" +
        "<p> Завершить этап № {{numberOfStage}}</p><button v-on:click='endOfStage'>end</button>" +
        "</div>"
});



Vue.component('menu-s', {
    data:function () {
        return {
            //option1: "Kill",
            //option2: "Stage",
            text: "",
        }
    },
    methods: {
        change(item) {
            this.text = item.target.innerHTML;
            document.getElementById("fix").value = this.text;
            item.target.style.background="darkseagreen";

            //item.target.style.background="#eee";

            // document.getElementsByClassName(this.text).background = 'lime';
        }
    },
    template:"<div id='code'>" +
    "<ul :class='text.toLocaleLowerCase()'>" +
        "<li @click='change'>Kill</li>"+
        "<li @click='change'>Stage </li>"+
        "</ul>" + "</div>"
})
var vm = new Vue({el:'#try',
data: {
    people: createFakeData(),

}})

function checkMenu(){
    return document.getElementById("fix").value === 'Kill';
} **/

function createFakeData(){
    //fixme axious get
    let data = [];
    for(let i = 0; i < 100; i++){
        data.push({id: i,
            name:'Masha',
            debt: i,
        alive: true});
    }
    return data;
}

new Vue({el:"#dyn",
    data: {
     current: ''
    },
    methods: {
        switchCurr: function (curr) {
            this.current = curr;
        }
    },
    components: {
        example: {
            data: function () {
                return {
                    numberOfStage: 1,
                }
            },
            methods: {
                endOfStage: function () {
                    this.numberOfStage++;
                },
            },
            template: "<div>" +
                "<p> Завершить этап № {{numberOfStage}}</p><button v-on:click='endOfStage'>end</button>" +
                "</div>"
        },
        pips :{
            template: "<p> mashusik</p>"
        },

        tableEx: {
            data: function() {
                return {
                    pageNumber: 0,
                    listData: createFakeData(),
                    size:10
                }
            },
            methods: {
                nextPage: function() {
                this.pageNumber ++ },

                sending: function(e){
                           /** axios({
                                method: 'post',
                                data: {delX: this.delX, delY: this.delY, delR: this.delR},
                                url: 'http://127.0.0.1:11910/gazprom2/checkresult',

                            })
                                .then(function (response) {
                                    //alert(response.data)
                                    console.log(response)
                                    console.log(response.data)
                                    addSuperTable(response.data)
                                })
                                .catch(function (error) {
                                    console.log(error)
                                }) **/
                           alert(data);
                       // e.preventDefault();
                    }
        ,
        prevPage: function () {
            this.pageNumber --;
        }
    },
    computed: {
        pageCount(){
            let l = this.listData.length,
                s = this.size;
            return Math.ceil(1/s);
        },
        paginatedData(){
            let start = this.pageNumber * this.size,
                end = start + this.size;
            return this.listData.slice(start, end);
        }
    }, template :

        "<div id='table'>" +
        "<table>"+
                "<tr>" +
                "<td> </td>" +
                "<td> Id </td>" +
                "<td> Name </td>" +
                "<td> Debt </td>" +
                "</tr>" +
        "</table>" +
                "<form method='POST' name='killForm' action='sending'>" +
                "<table id='tbl' > " +
                "<tr v-for='p in paginatedData'>" +
                "<td><input type='button' value='Kill'> </td>" +
                "<td> {{p.id}}</td>"+
                "<td>{{p.name}} </td>" +
                "<td>{{p.debt}} </td>" +
                "</tr>" +

                "</table>" +
                "</form>" +
        /**"<li v-for='p in paginatedData'>" +
        "{{p.id}}" +
        "{{p.name}}" +
        "{{p.debt}}" +
        "</li>" +
        "</ul>" + **/
        "<button :disabled = 'PageNumber<= 0' @click='prevPage'> Previous</button>" +
        "<button :disabled = 'PageNumber >= PageCount-1' @click='nextPage'> Next</button>" +
        "</div>"

        },
        addPart: {
            data: function(){
                return {
                    name: "",
                    job: "",
                    debt:"",
                    date:"",
                    error: "",
                }
            },
            methods: {
                checkForm: function (e) {
                    this.error = "";
                    if (this.name == "" || this.job == "" || this.debt == "" || this.debt < 0 ) {
                        this.error = 'Try it again';
                        console.log("here");
                        e.preventDefault();
                    }
                }
            },
            template:
            "<form method='post' action='' name='newPart' @submit='checkForm'>" +
                "<p v-if='error.length'> " +
                "         {{ error }}" +
                "         </p>"+
                "<p>Add new participant of game</p>" +
                "<p>Name: <input name='name'  @input='name = $event.target.value'> </p>"+
                "<p>Job: <input name='job' @input='job = $event.target.value'> </p>"+
                "<p>Debt: <input name='debt' @input='debt = $event.target.value'> </p>"+
                "<p>Date of birth: <input type='date' name='date' max ='2022-01-21' @input='date = $event.target.value'> </p>"+
                "<input type='submit' value='send' >" +
                "</form>"

        }
    }

})




// register the grid component
Vue.component("demo-grid", {
    template: "#grid-template",
    props: {
        heroes: Array,
        columns: Array,
        filterKey: String
    },
    size: {
        type: Number,
        required:false,
        default: 10,
    },
    data: function() {
        var sortOrders = {};
        this.columns.forEach(function(key) {
            sortOrders[key] = 1;
        });
        return {
            sortKey: "",
            sortOrders: sortOrders
        };
    },
    computed: {
        filteredHeroes: function() {
            var sortKey = this.sortKey;
            var filterKey = this.filterKey && this.filterKey.toLowerCase();
            var order = this.sortOrders[sortKey] || 1;
            var heroes = this.heroes;
            if (filterKey) {
                heroes = heroes.filter(function(row ) {
                    return Object.keys(row).some(function(key) {
                        return (
                            String(row["id"])
                                .toLowerCase()
                                .indexOf(filterKey) > -1
                        );
                    });
                });
            }
            if (sortKey) {
                heroes = heroes.slice().sort(function(a, b) {
                    a = a[sortKey];
                    //b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                });
            }
            return heroes;
        }
    },
    filters: {
        capitalize: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    methods: {
        sortBy: function(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        },

        prevPage: function(){
            this
        }

    }
});

// bootstrap the demo
var demo = new Vue({
    el: "#demo",
    data: {
        searchQuery: "",
        gridColumns: ["id", "name", "debt"],
        gridData: [
            { id:1, name: "Chuck Norris", debt: 1000 },
            { id:2, name: "Chuck Norris", debt: 1000 },
            { id:3, name: "Chuck Norris", debt: 1000 },
            { id:4, name: "Chuck Norris", debt: 1000 }
        ]
    }
});

function getParticipant(){
    let but = document.getElementById("but");

    but.addEventListener('click', alert("here"));
    //alert("here");
    //document.getElementsById("but").addEventListener("click").alert("here");
    //let participant = document.getElementsByName("query")
}

function send(){
    //fixme
    //add axios to send async query
}


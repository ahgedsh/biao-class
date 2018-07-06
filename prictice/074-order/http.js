window.http = {
    post: function (url, data) {
        data = data || {};
        console.log(data)
        data.app_key = 'bee2d60ed616969547647cc12983c9416fc6048e3cf934c7b81245bac3dff6e5';
        data.timestamp = (new Date).getTime();
        data.signature = this.sign(data.app_key, data.timestamp);

        return axios
            .post('http://mock.biaoyansu.com/api/' + url, data)
            .then(function (res) {
                return res;
            });
    },

    sign: function (app_key, timestamp) {
        return btoa(app_key + timestamp);
    },
};

// var data = {
//     name      : "order", // 模型名称
//     structure:[{
//             name:'dish_info',
//             type:'text',
//             nullable:false
//         },{
//             name:'table_id',
//             type:'integer',
//             nullable:false
//         },{
//             name:'price',
//             type:'integer',
//             nullable:true
//         },
//     ]
// }
// http.post('MODEL/CREATE',data)

// http.post('MODEL/UPDATE_PROPERTY', {
//   model     : 'order',
//   property  : 'dish_info',
//   structure : {
//     type     : 'json',
//     nullable : true,
//   },
// });
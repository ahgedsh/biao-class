window.http = {
    post: function (url, data) {
        data = data || {};
        console.log(data)
        data.app_key = 'c306bc38a8a72adc566da0dd710f4101a25540806db0ec09dc64cad503528dec';
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
//     name      : "article", // 模型名称
//     structure:[{
//             name:'title',
//             type:'string',
//             nullable:false
//         },{
//             name:'content',
//             type:'text',
//             nullable:false
//         },{
//             name:'author',
//             type:'string',
//             nullable:false
//         }
//     ]
// }
// http.post('MODEL/CREATE',data)


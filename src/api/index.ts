// import 'whatwg-fetch'

// export default {
//     post ({
//           method = 'POST',
//           api = '',
//           body = {},
//           header = {'Content-Type': 'application/json;charset=UTF-8'},
//           onSuccess: successCb = res => {},
//           onErr: errCb = err => {
//               console.log(err)
//               let msg = '请求失败'
//               message.info(msg);
//           },
//           errCodes = {},
//           isCostom = false
//     }) {
//         let param
//         if (isCostom) {
//             param = body
//         } else {
//             param = {
//                 b: body,
//                 c: {}
//             }
//             console.log('Request URL:' + api, method, param)
//             param = JSON.stringify(param)
//         }
//         fetch(api, {
//                 method: method,
//                 header: header,
//                 credentials: 'include',
//                 body: param
//             }
//         ).then((res) => {
//             if (res.ok) {
//                 return res.json()
//             } else {
//                 return Promise.reject('something went wrong!')
//             }
//         }).then(res => {
//             let {data, success, err_code} = res
//             if (success) {
//                 console.log('Response: ', data)
//                 successCb(data)
//             } else {
//                 if (err_code === -2) {
//                     message.info('请先登录')
//                     hashHistory.push('/Login')
//                 } else if (err_code in errCodes) {
//                     console.log(err_code)
//                     let msg = '请求失败'
//                     msg = errCodes[err_code]
//                     console.log(msg)
//                     message.info(msg);
//                 }
//             }
//         }, err => {
//             errCb(err)
//         })
//     },

//     asyncPost(params) {
//         return new Promise((resolve, reject) => {
//             this.post({
//                 ...params,
//                 onSuccess: (data) => {
//                     return resolve(data)
//                 },
//                 onErr: (err)=>{
//                     return reject(err)
//                 },
//             })
//         }
//     )}
// }

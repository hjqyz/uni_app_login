// 全局请求封装
const token = ''
// 主域名
const apiUrl = ''

const baseRequest = (url,method,params) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: apiUrl + url,
			data:params,
			method:method,
			header: {
				'Content-Type':'application/x-www-form-urlencoded' //自定义请求头信息
			},
		}).then((response)=>{
			let [error, res] = response;
			resolve(res.data);
			// console.log(response[1].header.token) //获取请求头token
		}).catch(error => {
            let [err, res] = error;
            reject(err)
        })
	 });
}

module.exports ={
	baseRequest
}
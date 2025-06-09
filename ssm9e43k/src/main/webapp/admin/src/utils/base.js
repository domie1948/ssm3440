const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm9e43k/",
            name: "ssm9e43k",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm9e43k/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校试题管理系统"
        } 
    }
}
export default base

import observer from 'riot-observable'
import axios from 'axios'

function projectWatcher() {
    observer(this)

    this.posts=[]

    this.url=process.env.NODE_ENV==='development'?'http://localhost:2019':'https://ashenphoenix-portfolio-backend.herokuapp.com'
    this.con=axios
    this.con.defaults.baseURL=this.url

    this.on('load', async location=>{
        if(location=='project'){
            try {
                const data = await this.con.get('/projects/list')
                this.posts=data.data
                this.trigger('loaded')
            } catch (error) {
                console.error('error loading projects');
                console.error({...error});
            }
        }else{
            try {
                const data = await this.con.get('/blogs/list')
                this.posts=data.data
                this.trigger('loaded')
            } catch (error) {
                console.error(error);
            }
        }
    })

    this.on('login',async creds=>{
        if('username' in creds){
            try {
                
                const getCreds = await this.con.post(`/login?grant_type=password&username=${creds.username}&password=${creds.password}`,null,{
                    headers:{
                        Authorization: `Basic ${btoa(`${process.env.USER_CLIENT}:${process.env.USER_SECRET}`)}`,
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                const token = await getCreds.data
                
                this.con.defaults.headers.common['Authorization']=`Bearer ${token.access_token}`;
                
                localStorage.setItem('token',token.access_token)
                this.trigger('logged',{status:true})
            } catch (error) {
                console.log(error);
                this.con.defaults.headers.common['Authorization']=undefined
                this.trigger('logged',{status:false})
            }
        }else{
            this.con.defaults.headers.common['Authorization']=`Bearer ${localStorage.getItem('token')}`;
            try {
                const self = await this.con.get('/users/self')
                const data = await self.data
                if('userid' in data){
                    this.trigger('logged',{status:true})
                }
            } catch (err) {
                console.error(err);
                this.trigger('logged',{status:false})
            }
        }
    })

    this.on('post',async post=>{
        try {
            const temp = await this.con.post(`/${post.type}s/`,{post:post.post,stub:post.stub,title:post.title})
            
            this.trigger('accepted',{status:true})
        } catch (error) {
            this.trigger('accepted',{status:false})
        }
    })
}

var OBS = new projectWatcher();

export default OBS;
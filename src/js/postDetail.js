import axios from 'axios'
import {mapGetters} from "vuex"
export default {
        name:'DetailPage',
        data () {
            return {
                post: {},
                postId:'',
                viewCount:0
            }
        },
        methods: {
            detailPost(){
                let id= {
                    key:this.postId

                }
                axios.post('http://localhost:8000/api/detailPost',id).then((response)=>{
                    response.data.post[0].image = "http://localhost:8000/postImage/"+response.data.post[0].image
                    this.post = response.data.post[0]
                    // console.log(this.post)
    
                }).catch((e)=>console.log(e))
            },
            back(){
                history.back()
            },
            goLogin(){
                if(this.getToken){
                    
                    console.log(this.getToken)
                }else{
                    this.$router.push("/login")
                }
            },
            goAction(){
                let data ={
                    userId : this.getUser.id,
                    postId : this.$route.params.id
                }
                axios.post('http://localhost:8000/api/action',data).then((response)=>{
                    this.viewCount = response.data.data.length
    
                }).catch((e)=>console.log(e))
            }
        },
        computed: {
            ...mapGetters(["getToken","getUser"])
        },
        mounted(){
            // this.goLogin()
            this.goAction()
            this.postId = this.$route.params.id
            this.detailPost()
        }
}
// import "../../public/assets/css/style.css";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name:"HomePage",
    data(){
        return{
            posts : {},
            categoryData : {},
            searchKey:"",
            tokenStatus:false

        }
    },
    methods:{
        getAllPosts(){
            axios.get("http://localhost:8000/api/post").then((response)=>{
                // this.posts = response.data.posts
                for(let i=0;response.data.posts.length > i;i++){
                    response.data.posts[i].image = "http://localhost:8000/postImage/"+response.data.posts[i].image
                }
                this.posts = response.data.posts 
    
            }).catch((e)=>console.log(e))
        },
        searchPosts(){
            let search = {
                key:this.searchKey
            };
            axios.post('http://localhost:8000/api/postSearch',search).then((response)=>{
                for(let i=0;response.data.posts.length > i;i++){
                    response.data.posts[i].image = "http://localhost:8000/postImage/"+response.data.posts[i].image
                }
                this.posts = response.data.posts 

            }).catch((e)=>console.log(e))
        },
        loadCategory(){
            axios.get('http://localhost:8000/api/category').then((response)=>{
                this.categoryData = response.data.category
            })
        },
        categorySearch(id){
            let search = {
                key:id
            }
            // console.log(search)
            axios.post('http://localhost:8000/api/categorySearch',search).then((response)=>{
                for(let i=0;response.data.posts.length > i;i++){
                    response.data.posts[i].image = "http://localhost:8000/postImage/"+response.data.posts[i].image
                }
                this.posts = response.data.posts 

            }).catch((e)=>console.log(e))
        },
        postDetail(id){
            // console.log(id)
            this.$router.push(
                {
                    name:'DetailPage',
                    params: {id},
                }
            )
            
        },
        changeTokenStatus(){
            if(this.getToken != null && this.getToken != undefined && this.getToken != ""){
                this.tokenStatus = true
            }else{
                this.tokenStatus = false
            }
        },
        logOut(){
            this.$store.dispatch("setToken",null)
            this.goLogin()
            console.log(this.getToken)
            
        },
        goLogin(){
            this.$router.push("/login")
        }
    },
    computed: {
        ...mapGetters(["getToken"])
    },
    mounted(){
        this.changeTokenStatus()
        this.getAllPosts()
        this.loadCategory()
    }
}
import axios from "axios"
export default {
    name:'LoginPage',
    data(){
        return{
            userData:{
                email:'',
                password:'',
                
            },
            loginError:false
        }
            
    },
    methods:{
        login(){
            axios.post('http://localhost:8000/api/login',this.userData).then((response)=>{
                if(response.data.token){

                    this.$store.dispatch("setToken",response.data.token)
                    this.$store.dispatch("setUser",response.data.user)
                    // console.log(response.data.user)
                    this.goHome();
                }else{
                    this.loginError = true
                }
                // console.log(this.post)

            }).catch((e)=>console.log(e))
        },
        goHome(){
            this.$router.push({
                name:'home',
            })
        },
        goBack(){
            history.back()
        }
    },
    mounted(){
        // this.login() 
    }
}
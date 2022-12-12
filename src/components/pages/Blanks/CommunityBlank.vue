<template>
    <p></p>
    </template>
    <script>
    export default{
        created(){
            this.setpath()
        },
        methods:{
            setpath(){
                this.$router.push("/index/community");
            }
        }
    }
    </script>
    <style scoped></style>
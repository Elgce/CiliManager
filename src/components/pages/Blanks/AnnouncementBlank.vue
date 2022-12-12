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
                this.$router.push("/index/announcement/view");
            }
        }
    }
    </script>
    <style scoped></style>
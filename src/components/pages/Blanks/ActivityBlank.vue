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
                this.$router.push("/index/activities/view");
            }
        }
    }
    </script>
    <style scoped></style>
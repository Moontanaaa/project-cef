<template>
    <div class="main">
        <h1>Hello World!</h1>
        <p class="pHome">Je suis Developpeur WEB FULL-STACK</p>
        <div>
            <a href="https://www.instagram.com/moontanaaa_/" target="_blank"><img src="../assets/img/instagram_black.png" alt="instagram"></a>
            <a href="https://github.com/Moontanaaa" target="_blank"><img src="../assets/img/signe-github.png" alt="gitHub"></a>
            <a href="https://discord.com/channels/Mamouthzzz" target="_blank"><img src="../assets/img/discorde.png" alt="discord"></a>
            <a href="mailto:montanafabio@icloud.com" ><img src="../assets/img/email.png" alt="email"></a>
            <a href="tel:+33768606917" ><img src="../assets/img/appel-telephonique.png" alt="call"></a>
         </div>
            
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped >
h1{
    color:#007BFF;
    font-size: 80px;
    
}
.pHome{
    font-size: 60px;
}
.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
}
.main a img{
    height: 40px;
    width: 40px;
}
.main a img:hover{
    opacity: 80%;
    background-color: #007BFF;
    border-radius: 50%;
}
</style>
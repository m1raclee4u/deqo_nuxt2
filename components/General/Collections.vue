<template>
    <section>
        <div class="collections">
            <div class="collection_left">
                <img src="../../assets/img/collections/bc0e3668564533.5b6171f3d0b17.jpg" alt="">
                <div class="text">
                    <h3 class="left">Living large in a <br> small space</h3>
                    <p class="left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum totam ipsa dolorem facilis temporibus quam, inventore nostrum accusantium nesciunt fugiat cum aperiam id provident ex praesentium quibusdam optio molestias, unde consequatur. Eum necessitatibus natus maiores eveniet quidem sapiente illo?</p>
                </div>
            </div>
            <div class="collection_right">
                <img src="../../assets/img/collections/bc0e3668564533.5b6171f3d0b17.jpg" alt="">
                <div class="text">
                    <h3 class="right">We’ve got some ideas <br>
                    on how to decorate 
                    </h3>
                    <p class="right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum totam ipsa dolorem facilis temporibus quam, inventore nostrum accusantium nesciunt fugiat cum aperiam id provident ex praesentium quibusdam optio molestias, unde consequatur. Eum necessitatibus natus maiores eveniet quidem sapiente illo?</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
section{
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding: 100px 60px;

}
.collections{
    display: flex;
    gap: 100px;
}
.collection_right{
    display: flex;
    flex-direction: column-reverse;
}
.collection_left{
    display: flex;
    flex-direction: column;
    img{}
}
img{
    width: 100%;
    height: auto;
}
.left{
    margin: 70px 0 -24px 0;
}
.right {
    margin: -24px 0 80px 0;
}
.text{   
    h3{
       
        font-size: 82px;
        letter-spacing: -0.04em;
    }
    p{
        font-size: 18px;
        letter-spacing: -0.025em;
        line-height: 30px;
    }
}
</style>
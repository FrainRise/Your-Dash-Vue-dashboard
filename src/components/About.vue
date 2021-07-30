<template>
    <div class="about">
        <div class="background-rectangle"></div>
        <div class="about__wrapper">
            <div class="text-wrapper">
                <h2 class="about-title"> What is Your Dash?</h2>
                <p class="about-descrp">
                    Your Dash is universal and unique dashboard. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <img src="@/assets/img/about-dash.png" alt="dash" class="about-image">
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.about {
    padding: 25px;
    position: relative;
    width: 100%;
    height: 80vh;
}

.background-rectangle {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 300px;
    background: #ACEB98;
    z-index: -1;
}

.about__wrapper{
    display: flex;
    justify-content: space-evenly;
    height: 100%;
}

.text-wrapper {
    padding: 3% 5%;
    height: 500px;
    width: 40%;
    background: #fff;
    align-self: center;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
}

.about-title {
    font-size: 25px;
    text-transform: uppercase;
}

.about-descrp {
    padding-top: 15px;
    font-size: 16px;
    font-style: italic;
    line-height: 25px;
}

.about-image {
    align-self: flex-start;
    max-width: 40%;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
}
</style>
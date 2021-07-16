<template>
    <div class="main-header">
        <div class="search">
            <font-awesome-icon class="header-icons search-icon" icon="search" />
            <input class="search-input" type="text" placeholder="Search here..." />
        </div>
        <div class="user-profile">
            <font-awesome-icon class="header-icons" icon="bell" />
            <div class="user-settings">
                <font-awesome-icon class="header-icons" icon="user-alt" />
                <font-awesome-icon class="header-icons small-icon" icon="angle-down" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ACEB98;
    width: 100%;
    height: 90px;
    padding-left: 50px;
}

.search {
    position: relative;
    width: 400px;
}

.search-input {
    background: #f1f1f1;
    padding: 15px;
    border: none;
    border-radius: 15px;
    width: 100%;
    text-align: center;
    color: #2A2B2E;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.search-input:hover,
.search-input:focus,
.search-input:active {
    border: 2px solid #2A2B2E;
}

.search-icon {
    opacity: .5;
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
}

.user-profile {
    width: 15%;
    display: flex;
    justify-content: space-evenly;
}

.user-profile .header-icons:hover,
.user-profile .user-settings:hover {
    color: #000;
}

.header-icons {
    font-size: 25px;
    cursor: pointer;
}

.small-icon {
    font-size: 20px;
}

</style>
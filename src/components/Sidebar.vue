<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <h2 class="sidebar-header__title">Your Dash</h2>
        </div>
        <div class="sidebar-content">
            <ul class="sidebar-list">
                <router-link to="/" class="sidebar-list__links">
                    <font-awesome-icon class="sidebar-icons" icon="home"/>
                    <a class="sidebar-links">Dashboard</a>
                </router-link>
                <router-link to="/todos" class="sidebar-list__links"> 
                    <font-awesome-icon class="sidebar-icons" icon="list-ul"/>
                    <a class="sidebar-links">MyTodos</a>
                </router-link>
                <li  class="sidebar-list__links">
                    <font-awesome-icon class="sidebar-icons" icon="signal"/>
                    <a class="sidebar-links">Stats</a>
                </li>
                <li  class="sidebar-list__links">
                    <font-awesome-icon class="sidebar-icons" icon="chart-bar"/>
                    <a class="sidebar-links">Charts</a>
                </li>
                <li  class="sidebar-list__links">
                    <font-awesome-icon class="sidebar-icons" icon="info-circle"/>
                    <a class="sidebar-links">Information</a>
                </li>
                <li  class="sidebar-list__links">
                    <font-awesome-icon class="sidebar-icons" icon="sign-out-alt"/>
                    <a class="sidebar-links">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.sidebar {
    position: fixed;
    background: #2A2B2E;
    width: 300px;
    height: 100%;
    overflow: auto;
}

.sidebar-header {
    padding: 25px 10px;
    font-size: 23px;
    color: #87FF65;
    text-transform: uppercase;
    box-shadow: 1px 1px 4px rgb(78, 78, 78);
}

.sidebar-content {
    position: relative;
    width: 100%;
    height: 80%;
}

.sidebar-list {
    position: absolute;
    width: 60%;
    list-style-type: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.sidebar-list__links {
    display: flex;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #87FF65;
    text-transform: uppercase;
    padding: 25px 0;
    cursor: pointer;
    text-decoration: none;
    transition: color .25s linear;
}

.sidebar-list__links:hover {
    color:#fff;
}

.sidebar-list__links.router-link-active {
    color:#fff;
}

.sidebar-list__links .sidebar-icons {
    width: 33%;
}

.sidebar-list__links .sidebar-links {
    width: 33%;
}


</style>
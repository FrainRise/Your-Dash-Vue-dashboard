<template>
    <div class="user-settings">
        <div class="user__icons-group" @click.stop="showDropdown">
            <font-awesome-icon class="header-icons" icon="user-alt" />
            <font-awesome-icon class="header-icons small-icon" icon="angle-down" :class="isShownProfile ? 'icon-rotation': null"/>
        </div>
        <transition name="dropdown">
        <div class="user__dropdown" v-if="isShownProfile">
            <div class="dropdown__header">
                <h2 class="username">Andrew Kovalenko</h2>
                <p class="position">Frontend Developer</p>
            </div>
            <div class="dropdown__body">
                <ul class="dropdown-list">
                    <li class="dropdown-list__links">Profile</li>
                    <li class="dropdown-list__links">Settings</li>
                    <li class="dropdown-list__links">Logout</li>
                </ul>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        isShownProfile: {
            type: Boolean
        },
        showDropdown: {
            type: Function
        },
        closeDropdown: {
            type: Function
        }
    }
}
</script>

<style >


.header-icons {
    font-size: 25px;
    cursor: pointer;
    transition: all .25s ease-in-out;
}

.small-icon {
    font-size: 20px;
}

.user-settings {
    position: relative;
}

.user__dropdown {
    position: absolute;
    top: 50px;
    right: 0;
    width: 250px;
    font-weight: bold;
    background: #fff;
    border-radius: 25px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
    z-index: 2;
}

.user__dropdown::before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    top: -10px;
    right: 15px;
    border-width: 0 11px 15px 11px;
    border-color: transparent transparent #5A5A66 transparent;
    z-index: 2;
}

.dropdown__header {
    background: #5A5A66;
    border-radius: 25px 25px 0 0;
    padding: 15px 25px;
    color: #ACEB98;
}

.dropdown__header h2 {
    font-size: 22px;
    margin: 10px 0;
}

.dropdown__header p {
    font-size: 18px;
    margin: 20px 0 10px 0;
    text-align: justify;
}

.dropdown-list {
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    letter-spacing: 2px;
}

.dropdown-list li {
    margin: 10px;
    list-style-type: none;
    cursor: pointer;
    transition: color .25s linear;
}

.dropdown-list li:hover {
    color: #000;
}

.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity .5s;
}
.dropdown-enter, .dropdown-leave-to {
  opacity: 0;
}

.icon-rotation {
    transform: rotate(180deg);
}
</style>
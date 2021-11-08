<template>
    <div class="main-header">
        <div class="search">
            <font-awesome-icon class="header-icons search-icon" icon="search" />
            <input class="search-input" type="text" placeholder="Search here..." />
        </div>
        <div class="user-profile">
            <notification-list />
            <user-profile />
        </div>
    </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue'
import NotificationList from '@/components/NotificationList.vue'

export default {
    components: {
        UserProfile,
        NotificationList
    }
}
</script>

<style >
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
    justify-content: space-around;
    align-items: center;
}

.user-profile .header-icons:hover,
.user-profile .user__icons-group:hover,
.notification-group:hover .notification {
    color: #000;
}

@media (max-width: 850px) {
    .search {
        position: relative;
        width: 200px;
    }
    
    .user-profile {
        width: 30%;
    }
}
@media (max-width: 650px) {
    .main-header {
        flex-direction: column;
        justify-content: space-evenly;
        height: 130px;
        padding-left: 25px;
    }

    .search {
        position: relative;
        width: 250px;
    }

    .user-profile {
        width: 30%;
    }
}
</style>
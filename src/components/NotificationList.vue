<template>
    <div class="notification-group">
        <div class="notify-wrapper" @click="toggleNotificationList">
            <font-awesome-icon class="header-icons notification" icon="bell" />
            <div class="notification-alert" v-if="this.notifications.length > 0">
                <h6 class="notification-number">{{ notificationsAmount }}</h6>
            </div>
        </div>
        <transition name="notify">
            <div class="notification-list" v-if="isShownNotifications">
                <div class="notification-list__header">
                    <h2 class="notification-list__title">Notifications</h2>
                </div>
                <div class="notification-list__body">
                    <div class="notifications-list__item-wrapper" v-if="!isSeen">
                        <div 
                            class="notifcation-list__item" 
                            v-for="(notification, index) in notifications" 
                            :key="notification.id"
                            @click="handleMarkerSingle(index)"
                        >
                            <div class="notification-icon">
                                <font-awesome-icon class="icon" icon="user-tie" />
                            </div>  
                            <div class="text-wrapper">
                                <h2 class="item__title">
                                    {{ notification.notifTitle }}
                                </h2>
                                <p class="item__descr">
                                    {{ notification.notifBody }}
                                </p>
                            </div>  
                        </div>
                    </div>
                    <p class="notification__empty" v-else>There are no notifications yet...</p>
                </div>
                <div class="notification-list__footer">
                    <button class="btn__read" @click="handleMarkerAll">Mark as seen</button>
                </div>
            </div>
        </transition>   
    </div>
</template>

<script>
import { notificationList } from '@/localdata/index.js'

export default {
    data() {
        return {
            isShownNotifications: false,
            notifications: notificationList,
            isSeen: false
        }
    },
    methods: {
        toggleNotificationList() {
            return this.isShownNotifications = !this.isShownNotifications
        },
        handleMarkerAll() {
            if(this.notifications.length === 0) {
                return alert('You have no notifications...')
            } else {
                this.notifications.splice(0, this.notifications.length)
                this.isSeen = true
            } 
        },
        handleMarkerSingle(index) {
            this.notifications.splice(index, 1)
            if(this.notifications.length === 0) {
                this.isSeen = true
            }
        }
    },
    computed: {
        notificationsAmount() {
            return this.notifications.length
        }
    }
}
</script>

<style>
.notification-group {
    position: relative;
}

.notification-alert {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
    border: 2px solid #ACEB98;
    cursor: pointer;
}

.notification-number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    text-align: center;
}

.notification-list {
    width: 350px!important;
    position: absolute;
    top: 40px;
    right: -20px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
    z-index: 2;
}

.notification-list__header {
    width: 100%;
    background-color: #2A2B2E;
    color: #ACEB98;
    border-radius: 15px 15px 0 0;
}

.notification-list__title {
    padding: 15px 25px;
    text-align: justify;
}

.notification-list__body {
    overflow: auto;
    width: 100%;
    height: 300px;
}

.notifcation-list__item {
    padding: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.notification-icon {
    position: relative;
    width: 40px;
    height: 40px;
    padding: 15px;
    background-color: #c2e5e5;
    color: #000;
    border-radius: 50%;
}

.notification-icon .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
    text-align: justify;
}

.text-wrapper h2 {
    font-size: 18px;
    margin-bottom: 5px;
}

.text-wrapper {
    font-size: 15px;
}
.notification__empty {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-style: italic;
}
.notification-list__footer {
    background-color: #d8d8d8;
    border-radius: 0 0 15px 15px;
}

.btn__read {
    margin: 15px 10px;
    padding: 15px;
    background-color: #5A5A66;
    color: #ACEB98;
    border: 1px solid #5A5A66;
    border-radius: 15px;
    font-size: 15px;
    text-transform: capitalize;
    cursor: pointer;
    transition: all .25s linear;
}

.btn__read:hover {
    color: #5A5A66;
    background: transparent;
}

.notify-enter-active, .notify-leave-active {
  transition: opacity .5s;
}

.notify-enter, .notify-leave-to {
  opacity: 0;
}
</style>
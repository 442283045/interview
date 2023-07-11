<template>
    <div text-gray-500 text-sm cursor-pointer text-right pt-5 pr-5 block hover:text-blue-600 @click="handelLogout">退出登录
    </div>
    <ul my-10 class="flex justify-center flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li class="mr-2">
            <a @click="handleClick(TransactionPanel, $event)" href="#"
                class="navigation inline-block px-4 py-3 rounded-lg   active">交易板块
            </a>
        </li>
        <li class="mr-2">
            <a href="#" @click="handleClick(ServerPanel, $event)"
                class="navigation inline-block px-4 py-3 rounded-lg inactive">
                服务器板块</a>
        </li>
        <li class="mr-2">
            <a href="#" @click="handleClick(DataTransPanel, $event)" class="navigation inline-block px-4 py-3 rounded-lg">
                数据传输板块</a>
        </li>

    </ul>

    <div px-20 pb-20 class="relative overflow-x-auto  sm:rounded-lg">
        <component :is="ActivePanel"></component>

    </div>
</template>
<script lang="ts" setup>
import ServerPanel from '@/components/ServerPanel.vue'
import TransactionPanel from '@/components/TransactionPanel.vue'
import DataTransPanel from '@/components/DataTransPanel.vue'
import { shallowRef } from 'vue'
import router from '@/router';

let ActivePanel = shallowRef(TransactionPanel)
function handleClick(component: typeof ServerPanel, event: Event) {
    ActivePanel.value = component
    const active = document.querySelector('.active')
    if (active) {
        active.classList.remove('active')
        active.classList.add('inactive')
    }
    (event.target as HTMLElement).classList.remove('inactive')
        ; (event.target as HTMLElement).classList.add('active')

}

// login guard

let isLogin = false
for (let cookie of document.cookie.split(';')) {
    if (cookie.includes('email')) {
        isLogin = true
        console.log(cookie)
    }
}
if (!isLogin) {
    router.push('/login')
}
function handelLogout() {
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    router.push('/login')
}
</script>
<style scoped>
.active {
    background-color: rgba(37, 99, 235);
    color: white;
}

.inactive:hover {
    color: rgba(17, 24, 39);
    background-color: rgba(243, 244, 246);
}
</style>
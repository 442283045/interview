<template>
    <table border-solid border-gray-200 border-1 shadow-md
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">服务器IP</th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        运行情况
                        <a @click="handleSort" href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg></a>
                    </div>
                </th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id" hover:bg-gray-100
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.ip }}
                </th>
                <td class="px-6 py-4" flex items-center justify-start>
                    <span v-if="item.status" w-3 h-3 bg-green inline-block rounded-1.5></span>
                    <span v-else w-3 h-3 bg-red inline-block rounded-1.5></span>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts" setup>
import serverData from '@/data/server'
import { reactive } from 'vue'
const data = reactive(serverData)
let trend = ''
// sort the boolean type
function handleSort() {
    if (trend === '') {
        data.sort((a, b) => {
            return Number(a.status) - Number(b.status)
        })
        trend = 'ascending'
    } else if (trend === 'ascending') {
        data.sort((a, b) => {
            return Number(b.status) - Number(a.status)
        })
        trend = 'descending'
    } else if (trend === 'descending') {
        data.sort((a, b) => {
            return Number(a.status) - Number(b.status)

        })
        trend = 'ascending'
    }
}
</script>
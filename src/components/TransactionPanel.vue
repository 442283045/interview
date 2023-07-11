<template>
    <table border-solid border-gray-200 border-1 shadow-md
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">交易产品</th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        交易情况
                        <a @click="handleSort('result')" href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        交易时间
                        <a @click="handleSort('date')" href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        交易金额
                        <a @click="handleSort('price')" href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true"
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
                    {{ item.product }}
                </th>
                <td class="px-6 py-4">{{ item.result }}</td>
                <td class="px-6 py-4">{{ item.date }}</td>
                <td class="px-6 py-4">{{ item.price }}</td>

            </tr>

        </tbody>
    </table>
</template>
<script lang="ts" setup>
import transaction from '@/data/transaction'
import { reactive } from 'vue'
const data = reactive(transaction)
let trend = ''

function handleSort(type: string) {
    if (type === 'date') {
        if (trend === '') {
            trend = 'ascending'
            data.sort((a, b) => {
                return new Date(a[type]).valueOf() - new Date(b[type]).valueOf()
            })
        } else if (trend === 'ascending') {
            trend = 'descending'
            data.sort((a, b) => {
                return new Date(b[type]).valueOf() - new Date(a[type]).valueOf()
            })
        } else {
            trend = 'ascending'
            data.sort((a, b) => {
                return new Date(a[type]).valueOf() - new Date(b[type]).valueOf()
            })
        }
    } else if (type === 'price') {
        if (trend === '') {
            trend = 'ascending'
            data.sort((a, b) => {
                return a[type] - b[type]
            })
        } else if (trend === 'ascending') {
            trend = 'descending'
            data.sort((a, b) => {
                return b[type] - a[type]
            })
        } else {
            trend = 'ascending'
            data.sort((a, b) => {
                return a[type] - b[type]
            })
        }
    } else if (type === 'result') {
        if (trend === '') {
            trend = 'ascending'
            data.sort((a, b) => {
                return a[type].localeCompare(b[type])
            })
        } else if (trend === 'ascending') {
            trend = 'descending'
            data.sort((a, b) => {
                return b[type].localeCompare(a[type])
            })
        } else {
            trend = 'ascending'
            data.sort((a, b) => {
                return a[type].localeCompare(b[type])
            })
        }
    }

}
</script>
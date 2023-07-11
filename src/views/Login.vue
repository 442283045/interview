<template>
  <div flex flex-col items-center>
    <div w-lg mt-40 flex flex-col items-center gap-5 rounded-md shadow-md border-gray-200 py-5>
      <div text-2xl text-center>登录</div>
      <form flex flex-col gap-8 w-lg pb-5>
        <label items-center mx-10 flex justify-between relative for="">
          <input bg-gray-50 border-1 border-solid border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 type="text" h-10 w-full focus:outline-none
            rounded-md v-model="user.email" @input="validateEmail" @change="validateEmail" ref="emailInput"
            placeholder="邮箱账号" />
          <div absolute class="-bottom-5 prompt" text-red text-sm display-none></div>
        </label>

        <label items-center mx-10 flex justify-between relative for="">
          <input bg-gray-50 border-1 border-solid border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 type="password" w-full h-10
            focus:outline-none rounded-md v-model="user.password" @input="validatePassword" @change="validatePassword"
            placeholder="输入密码" ref="passwordInput" />
          <div absolute class="-bottom-5 prompt" text-red text-sm display-none></div>
        </label>

        <button type="submit" @click="handleSubmit" mx-10
          class="text-white border-none bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          提交
        </button>
      </form>
      <div flex justify-between w-full text-sm px-10 text-gray-500>
        <div flex items-center><label><input v-model="rememberUser" translate-y-0.3 type="checkbox"><span ml-2
              select-none>7天内免登录</span></label>
        </div>
        <div self-end>
          没有账户，去<RouterLink to="/register" text-blue-700>注册</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import router from '@/router';
import { reactive, ref } from 'vue'

const user = reactive({
  email: '123456@qq.com',
  password: '123456'
})
const rememberUser = ref(false)
// validate the email
function validateEmail(e: Event) {
  const divElement = (e.target as HTMLInputElement).nextElementSibling as HTMLDivElement

  if (e.type === 'input' && window.getComputedStyle(divElement).display === 'none') return
  const email = user.email
  const emailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (!emailRegex.test(email)) {
    divElement.textContent = '请输入正确的邮箱地址'

    divElement.style.display = 'block'

    return '请输入正确的邮箱地址'
  }
  divElement.textContent = ''
  divElement.style.display = 'none'
}
// validate the password
function validatePassword(e: Event) {
  const divElement = (e.target as HTMLInputElement).nextElementSibling as HTMLDivElement

  if (e.type === 'input' && window.getComputedStyle(divElement).display === 'none') return
  const password = user.password
  const passwordRegex = /^[a-zA-Z0-9]{6,20}$/
  if (!passwordRegex.test(password)) {
    divElement.textContent = '密码长度为6-20，包含数字和字母'

    divElement.style.display = 'block'
    return '密码长度为6-20，包含数字和字母'
  }
  divElement.textContent = ''
  divElement.style.display = 'none'
}

const emailInput = ref<HTMLInputElement>()
const passwordInput = ref<HTMLInputElement>()
function validateAll() {
  emailInput.value?.dispatchEvent(new Event('change'))
  passwordInput.value?.dispatchEvent(new Event('change'))

  return true
}
function handleSubmit(event: Event) {
  event.preventDefault()
  validateAll()
  const promptElements = document.querySelectorAll('.prompt')
  for (const promptElement of promptElements) {
    if (promptElement.textContent) {

      return
    }
  }
  if (rememberUser.value) {
    document.cookie = `email=${user.email};max-age=${60 * 60 * 24 * 7};`
  }
  else {
    document.cookie = `email=${user.email};`
  }


  router.push('/')
}
</script>

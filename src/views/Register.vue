<template>
  <div flex flex-col items-center>
    <div w-xl mt-30 flex flex-col items-center gap-5 rounded-md shadow-2xl border-gray-200 border-solid border-1 py-5>
      <div text-2xl text-center>注册</div>
      <form flex flex-col gap-8 w-lg pb-5>
        <label items-center mx-10 flex justify-between relative for="">
          <div><i mr-2 text-red>*</i>用&nbsp&nbsp户&nbsp&nbsp名：</div>
          <input bg-gray-50 border-1 border-solid border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 type="text" w-80 h-10 focus:outline-none
            rounded-md v-model="user.name" placeholder="字符串的长度为6-20，包含数字和字母" @change="validateName" @input="validateName"
            ref="nameInput" />
          <div absolute class="-bottom-5 left-30 prompt-register" text-red text-sm display-none>
            字符串的长度为6-20，包含数字和字母
          </div>
        </label>

        <label items-center mx-10 flex justify-between relative for="">
          <div><i mr-2 text-red>*</i>电子邮箱：</div>
          <input bg-gray-50 border-1 border-solid border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 type="text" w-80 h-10 focus:outline-none
            rounded-md v-model="user.email" @input="validateEmail" @change="validateEmail" ref="emailInput"
            placeholder="输入正确的电子邮箱地址" />
          <div absolute class="-bottom-5 left-30 prompt-register" text-red text-sm display-none></div>
        </label>

        <label items-center mx-10 flex justify-between relative for="">
          <div w-22 text-justify whitespace-nowrap>
            <i mr-2 text-red>*</i>密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码：
          </div>
          <input bg-gray-50 border-1 border-solid border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 type="password" w-80 h-10
            focus:outline-none rounded-md v-model="user.password" @input="validatePassword" @change="validatePassword"
            placeholder="设置密码" ref="passwordInput" />
          <div absolute class="-bottom-5 left-30 prompt-register" text-red text-sm display-none></div>
        </label>
        <label items-center mx-10 flex justify-between relative for="">
          <div><i mr-2 text-red>*</i>确认密码：</div>
          <input bg-gray-50 border-1 border-solid border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 type="password" w-80 h-10
            focus:outline-none rounded-md v-model="user.validationPassword" @input="validateValidationPassword"
            @change="validateValidationPassword" placeholder="再次输入密码" ref="validatePasswordInput" />
          <div absolute class="-bottom-5 left-30 prompt-register" text-red text-sm display-none></div>
        </label>
        <button type="submit" @click="handleSubmit"
          class="text-white border-none bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          提交
        </button>
      </form>
      <div self-end text-sm pr-5>
        已有账户，去<RouterLink to="/login" text-blue-700>登陆</RouterLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import router from '@/router';
import { reactive, ref } from 'vue'

const user = reactive({
  name: 'TomTom',
  email: '123456@qq.com',
  password: '123456',
  validationPassword: '123456'
})
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
// validate the username
function validateName(e: Event) {
  const divElement = (e.target as HTMLInputElement).nextElementSibling as HTMLDivElement

  if (e.type === 'input' && window.getComputedStyle(divElement).display === 'none') return
  const name = user.name
  const nameRegex = /^[a-zA-Z0-9]{6,20}$/
  if (!nameRegex.test(name)) {
    divElement.textContent = '用户名长度为6-20，包含数字和字母'
    divElement.style.display = 'block'

    return '用户名长度为6-20，包含数字和字母'
  }
  divElement.textContent = ''
  divElement.style.display = 'none'
}
// validate the validationPassword
function validateValidationPassword(e: Event) {
  const divElement = (e.target as HTMLInputElement).nextElementSibling as HTMLDivElement

  if (e.type === 'input' && window.getComputedStyle(divElement).display === 'none') return
  const validationPassword = user.validationPassword
  const password = user.password
  if (validationPassword !== password) {
    divElement.textContent = '两次输入的密码不一致'
    divElement.style.display = 'block'
    return '两次输入的密码不一致'
  }
  divElement.textContent = ''
  divElement.style.display = 'none'
}
const nameInput = ref<HTMLInputElement>()
const emailInput = ref<HTMLInputElement>()
const passwordInput = ref<HTMLInputElement>()
const validatePasswordInput = ref<HTMLInputElement>()
function validateAll() {
  nameInput.value?.dispatchEvent(new Event('change'))
  emailInput.value?.dispatchEvent(new Event('change'))
  passwordInput.value?.dispatchEvent(new Event('change'))
  validatePasswordInput.value?.dispatchEvent(new Event('change'))

  return true
}
function handleSubmit(event: Event) {
  event.preventDefault()
  validateAll()
  const promptElements = document.querySelectorAll('.prompt-register')
  for (const promptElement of promptElements) {
    if (promptElement.textContent) {

      return
    }
  }
  document.cookie = `email=${user.email};`
  router.push('/')
}
</script>

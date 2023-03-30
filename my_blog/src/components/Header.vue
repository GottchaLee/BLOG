<script setup lang="ts">
const nav = [
    { name: "Home", link: "https://github.com/GottchaLee", id: "home" },
    { name: "About", link: "/about", id: "about" },
    { name: "Contact", link: "/contact", id: "contact" },
];
interface contact {
    name: string,
    link: string,
    icon: string,
    id: string
}
const contactMsg: contact[] = [
    { name: "Email", link: "mailto:gotyabro06168414@gmail.com", icon: "./src/assets/img/gmail.png", id: "email" },
    { name: "Github", link: "https://github.com/GottchaLee", icon: "./src/assets/img/github.png", id: "github" },
    { name: "qq", link: "mailto:2515066433@qq.com", icon: "./src/assets/img/qq.png", id: "qq" }
]
const mode_toggle = () => {
    const modeToggle = document.querySelector("#mode-toggle")
    // 获取svg元素
    const svg = modeToggle?.querySelector("svg")
    // 获取rect元素
    const rect = svg?.querySelector("rect")
    // svg中是否含有text元素
    const hasText = svg?.querySelector("text")
    // 获取text元素内容
    const text = hasText?.textContent
    // 判断text元素内容
    if (hasText && rect && text === "dark") {
        // 改变text元素内容
        hasText.textContent = "light"
        // 改变svg背景元素颜色
        rect?.setAttribute("fill", "white")
        // 改变svg元素背景颜色
        hasText?.setAttribute("fill", "black")
        // 改变body元素背景颜色
        document.body.classList.remove("bg-black-lighter","text-white-lighter")
        document.body.classList.add("bg-white-lighter","text-grey-lighter") 
    } else if (hasText && rect && text === "light") {
        hasText.textContent = "dark"
        rect?.setAttribute("fill", "black")
        hasText?.setAttribute("fill", "white")
        document.body.classList.remove("bg-white-lighter","text-grey-lighter")
        document.body.classList.add("bg-black-lighter","text-white-lighter")
    }
};
</script>
<template>
    <div id="home" class="flex flex-row items-center relative justify-between h-20">
        <nav class=" absolute left-36 list-none flex flex-row first:ml-5 font-custom content-center">
            <li v-for="liItem in nav" :key="liItem.id" class="pr-6  font-bold text-4xl hover:text-red">
                <a :href="liItem.link">
                    <span>{{ liItem.name }}</span>
                </a>
            </li>
        </nav>
        <div id="mode-toggle" @click="mode_toggle"
            class="absolute overflow-hidden w-8 h-8 rounded-full right-1/4">
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 2rem 2rem" fill="none">
                <rect width="2rem" height="2rem" fill="white" />
                <text x="50%" y="60%" text-anchor="middle" dominant-baseline="middle" fill="black" font-size="16"
                    class="font-custom">light</text>
            </svg>
        </div>
        <div>
            <ul class="absolute flex flex-row top-1/2 translate-y-[-50%] left-[30%]">
                <li v-for="contactItem in contactMsg" :key="contactItem.id" class="block px-3">
                    <a :href="contactItem.link" class="block">
                        <img :src="contactItem.icon" alt="contact" class="block w-6 h-6 ">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped></style>
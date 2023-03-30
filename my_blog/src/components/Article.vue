<script setup lang="ts">
    interface Article {
        title: string;
        content: string;
    }
    const articleLi:Article[] = [
        {title: "Title 1", content: "Content 1"},
        {title: "Title 2", content: "Content 2"},
        {title: "Title 3", content: "Content 3"},
    ]
</script>

<template>
    <article v-for="article in articleLi">
        <h1>{{ article.title }}</h1>
        <p>{{ article.content }}</p>
    </article>
</template>